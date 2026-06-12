"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CareersForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showFollowPopup, setShowFollowPopup] = useState(false);
  const isSubmittingRef = useRef(false);

  // Handle PDF selection
  const handleResumeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload only PDF files.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File too large! Please upload below 5MB.");
      e.target.value = "";
      return;
    }

    setResumeFile(file);
  };

  // Upload PDF to your server
  const handleResumeUpload = async (): Promise<string> => {
    if (!resumeFile) return "";

    const uploadData = new FormData();
    uploadData.append("file", resumeFile);

    try {
      const isDev = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
      const uploadUrl = isDev ? "/api/upload-resume" : "/media/uploads/uploads.php";

      const res = await fetch(
        uploadUrl,
        {
          method: "POST",
          body: uploadData,
        }
      );

      const data = await res.json();
      console.log("Upload response:", data);

      if (data.fileUrl) {
        let url = data.fileUrl;
        if (!url.startsWith("http")) {
          if (url.startsWith("/")) {
            // Use current origin if available, fallback to production domain
            const origin = typeof window !== "undefined" ? window.location.origin : "https://skyhitmedia.com";
            url = `${origin}${url}`;
          } else {
            const uploadPath = isDev ? "/images/uploads/" : "/media/uploads/";
            const origin = typeof window !== "undefined" ? window.location.origin : "https://skyhitmedia.com";
            url = `${origin}${uploadPath}${url}`;
          }
        }
        console.log("Formatted Absolute Resume URL:", url);
        return url;
      } else {
        throw new Error("Upload failed: no fileUrl returned");
      }
    } catch (error) {
      console.error("Resume upload failed:", error);
      alert("Failed to upload resume. Please try again.");
      return "";
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume before submitting.");
      return;
    }

    const formData = new FormData(form.current!);
    const numberCleaned = (formData.get("number") as string || "").trim();
    if (!/^[6-9]\d{9}$/.test(numberCleaned)) {
      alert("Please enter a valid 10-digit phone number starting with 6-9.");
      return;
    }

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsLoading(true);

    const resumeUrl = await handleResumeUpload();
    console.log("Final Resume URL:", resumeUrl);

    if (!resumeUrl) {
      setIsLoading(false);
      return;
    }

    const templateParams: Record<string, unknown> = {
      from_name: "Skyhit Media Team",
      to_name: formData.get("to_name") || "",
      email: formData.get("email") || "",
      number: formData.get("number") || "",
      gender: formData.get("gender") || "",
      position: formData.get("position") || "",
      linkedin: formData.get("linkedin") || "N/A",
      message: formData.get("to_message") || "",
      msg: formData.get("to_message") || "",
      resume_link: resumeUrl || "",
      attachment: resumeFile,
      page: "Careers",
      subject: `Job Application for ${formData.get("position") || "Careers"}`,
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_i2h82eb";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_v4fu3u7";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "hjLXq5MC66R977QFn";

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      // Submit external career lead
      try {
        const fullName = (formData.get("to_name") as string) || "";
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0] || "Website";
        const lastName = nameParts.slice(1).join(" ") || "Applicant";

        const response = await fetch("/api/external-leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: formData.get("email"),
            phone: formData.get("number"),
            company: "Skyhit Media Career Application",
            source: "website",
            status: "new",
            metadata: {
              page: "Careers",
              gender: formData.get("gender"),
              position: formData.get("position"),
              linkedin: formData.get("linkedin") || "",
              resume_link: resumeUrl,
              message: formData.get("to_message")
            }
          })
        });

        const data = await response.json();
        console.log("External career lead created:", data);
      } catch (leadError) {
        console.error("Failed to submit external career lead:", leadError);
      }

      setIsLoading(false);
      setShowFollowPopup(true);
      form.current?.reset();
      setResumeFile(null);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send your application. Please try again.");
      setIsLoading(false);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "#FAF6F2" }}
    >
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-[#BE7F51]">
          Start Your Journey with SkyHit Media
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Be part of a fast-growing company where your creativity and talent
          thrive in a collaborative environment.
        </p>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="to_name"
            placeholder="Enter your full name"
            className="border border-gray-400 p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border border-gray-400 p-2 rounded w-full"
            required
          />
        </div>

        <input
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          className="border border-gray-400 p-2 rounded w-full"
          maxLength={10}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/\D/g, "");
          }}
          required
        />

        <select
          name="gender"
          required
          className="border border-gray-400 p-2 rounded w-full text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          name="position"
          required
          className="border border-gray-400 p-2 rounded w-full text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select Position
          </option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Website Developer">Website Developer</option>
          <option value="Graphic Designer">Graphic Designer</option>
        </select>

        {/* Resume Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Resume (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            className="border border-gray-400 p-2 rounded w-full"
            onChange={handleResumeSelect}
            required
          />
          {resumeFile && (
            <p className="text-sm text-gray-700 mt-2">
              {resumeFile.name} — {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          )}
        </div>

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn Profile (optional)"
          className="border border-gray-400 p-2 rounded w-full"
        />

        <textarea
          name="to_message"
          placeholder="Enter your message"
          rows={4}
          className="border border-gray-400 p-2 rounded w-full"
          required
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="text-white px-6 py-2 rounded"
            style={{ backgroundColor: "#BE7F51" }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Success Popup */}
      {showFollowPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <h3
              className="text-xl font-semibold text-center mb-4"
              style={{ color: "#BE7F51" }}
            >
              Submission Successful!
            </h3>
            <p className="text-center mb-6 text-sm">
              Your application has been received. Follow our LinkedIn profile to
              track the next steps in the recruitment process.
            </p>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/company/skyhit-media/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-6 py-2 rounded inline-block"
                style={{ backgroundColor: "#0077B5" }}
                onClick={() => setShowFollowPopup(false)}
              >
                Follow on LinkedIn
              </a>
            </div>
            <button
              onClick={() => setShowFollowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersForm;
