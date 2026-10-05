'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import DOMPurify from "isomorphic-dompurify";
import { getOptimizedImageUrl } from "@/utils/imageProxy";
import "../Blogs.css";

const SingleBlogClient = ({ blog }: { blog: any }) => {
 const router = useRouter();
 const [submitting, setSubmitting] = useState(false);
 const decodeHTML = (html: string) => {
   if (!html) return "";
   const entities: Record<string, string> = {
     nbsp: " ",
     amp: "&",
     quot: '"',
     lt: "<",
     gt: ">",
     apos: "'",
     ndash: "–",
     mdash: "—",
     middot: "·",
     lsquo: "‘",
     rsquo: "’",
     ldquo: "“",
     rdquo: "”",
     hellip: "…",
   };
   return html
     .replace(/&([a-z0-9]+);/gi, (match, entity) => {
       const lower = entity.toLowerCase();
       return entities[lower] || match;
     })
     .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(parseInt(dec)))
     .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
 };
 const sendEmail = async (e: any) => {
   e.preventDefault();
   if (submitting) return;
   setSubmitting(true);
   const form = e.target;
   const formData = {
     name: form.user_name.value.trim(),
     email: form.user_email.value.trim(),
     phone: form.user_phone.value.trim(),
     message: form.user_message.value.trim(),
     pageURL: typeof window !== 'undefined' ? window.location.href : '',
   };
   if (!formData.name || !formData.email || !formData.phone || !formData.message) {
     alert("Please fill in all required fields.");
     setSubmitting(false);
     return;
   }
   try {
     await emailjs.send(
       "service_i2h82eb",
       "template_82xia1m",
       formData,
       "hjLXq5MC66R977QFn"
     );
     form.reset();
     alert("Message Sent Successfully!");
     router.push("/contact-form-submit");
   } catch (err) {
     alert("Failed to send message. Please try again.");
   } finally {
     setSubmitting(false);
   }
 };
 const rawImageUrl = blog.featuredImage?.url || "/images/no-image.jpg";
 const imageUrlMobile = getOptimizedImageUrl(rawImageUrl, 380, 45) || rawImageUrl;
 const imageUrlDesktop = getOptimizedImageUrl(rawImageUrl, 1200, 55) || rawImageUrl;
 const sanitizedContent = DOMPurify.sanitize(decodeHTML(blog.content || ""), {
   ALLOWED_TAGS: [
     "h1","h2","h3","h4","h5","h6",
     "p","br","b","strong","i","em","u",
     "ul","ol","li",
     "a","img",
     "blockquote","code","pre",
     "div","span","hr",
     "table","thead","tbody","tr","td","th",
     "sub","sup","small"
   ],
   ALLOWED_ATTR: ["href","src","alt","title","class","style","target","rel"]
 });
 return (
   <>
     <div className="single-blog-container mt-16 md:mt-24 pb-8">
       <div className="single-blog-wrapper">
         {/* LEFT CONTENT */}
         <div className="single-blog-left">
           <h1 className="single-blog-title">{blog.title}</h1>
           <p className="single-blog-date">
             {new Date(blog.createdAt).toLocaleDateString("en-IN", {
               day: "numeric",
               month: "long",
               year: "numeric",
               timeZone: "UTC",
             })}
           </p>
           <div className="single-blog-image">
             <picture>
               <source media="(min-width: 769px)" srcSet={imageUrlDesktop} />
               <img
                 src={imageUrlMobile}
                 alt={blog.title}
                 fetchPriority="high"
                 loading="eager"
                 decoding="async"
               />
             </picture>
           </div>
           <div
             className="single-blog-content"
             dangerouslySetInnerHTML={{ __html: sanitizedContent }}
           />
         </div>
         {/* RIGHT FORM */}
         <div className="single-blog-right">
           <div className="sticky-form shadow-md border border-gray-200">
             <h2 className="form-heading">Get in Touch</h2>
             <form className="contact-form" onSubmit={sendEmail}>
               <input type="text" name="user_name" placeholder="Name" required />
               <input type="email" name="user_email" placeholder="Email" required />
               <input type="tel" name="user_phone" placeholder="Phone" required />
               <textarea name="user_message" placeholder="Message" rows={3} required />
               <button type="submit" disabled={submitting}>
                 {submitting ? "Submitting..." : "Submit"}
               </button>
             </form>
           </div>
         </div>
       </div>
     </div>
   </>
 );
};
export default SingleBlogClient;
