"use client";

import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import "./InfluencerSignup.css";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz6YgaD7Kkw9INhdjnIg_6CRW83TH5ztQJTZH55WUud0lBXolOcuVIkyXQFFVBo1UGL/exec";

const InfluencerSignup: React.FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitted) return;

    const form = e.currentTarget;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const mobileInput = form.elements.namedItem("mobile") as HTMLInputElement;
    const instagramInput = form.elements.namedItem(
      "instagram",
    ) as HTMLInputElement;
    const youtubeInput = form.elements.namedItem("youtube") as HTMLInputElement;
    const locationInput = form.elements.namedItem(
      "location",
    ) as HTMLInputElement;
    const languageInput = form.elements.namedItem(
      "language",
    ) as HTMLInputElement;

    const mobile = mobileInput.value.trim();

    if (!validatePhone(mobile)) {
      setPhoneError("Enter valid 10 digit mobile number");
      return;
    }

    setPhoneError("");
    setLoading(true);

    const formData = {
      name: nameInput.value,
      mobile: mobile,
      instagram: instagramInput.value,
      youtube: youtubeInput.value,
      location: locationInput.value,
      language: languageInput.value,
      page_url: pageUrl,
    };

    try {
      // GOOGLE SHEET SUBMIT
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors", // IMPORTANT FOR CORS
        body: JSON.stringify(formData),
      });

      // EMAILJS SUBMIT
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        "template_nrsiw6m",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setLoading(false);
      setSubmitted(true);

      form.reset();
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="influencer-wrapper">
      <div className="influencer-container">
        {/* WELCOME SECTION */}
        <div className="welcome-section">
          <h1>Welcome!</h1>
          <div className="welcome-box">
            <ul>
              <li>▶ Get access to unlimited campaign opportunities</li>
              <li>▶ Work with multiple brands</li>
              <li>▶ Earn what you deserve</li>
              <li>▶ 100% transparent</li>
            </ul>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="signup-card">
          <h2>Influencer Signup</h2>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="page_url" value={pageUrl} />

            <input type="text" name="name" placeholder="Name" required />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              maxLength={10}
              required
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/\D/g, "");
                setPhoneError("");
              }}
            />

            {phoneError && (
              <p style={{ color: "red", fontSize: "13px" }}>{phoneError}</p>
            )}

            <input
              type="url"
              name="instagram"
              placeholder="Instagram Profile Link"
              required
            />

            <input
              type="url"
              name="youtube"
              placeholder="YouTube Profile Link (Optional)"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              required
            />

            <input
              type="text"
              name="language"
              placeholder="Language"
              required
            />

            <button type="submit" disabled={loading || submitted}>
              {loading ? "Submitting..." : submitted ? "Submitted" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSignup;
