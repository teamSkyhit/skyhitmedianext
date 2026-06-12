"use client";

import { useEffect, useState } from "react";

interface EmailLinkProps {
  encoded: string; // Base64 encoded email
  className?: string;
}

export default function EmailLink({ encoded, className }: EmailLinkProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      // Decode on client side
      setEmail(window.atob(encoded));
    } catch (e) {
      console.error("Failed to decode email", e);
    }
  }, [encoded]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  if (!email) {
    // Server-side rendering (SSR) fallback
    try {
      const decodedBuild = Buffer.from(encoded, "base64").toString("utf-8");
      const parts = decodedBuild.split("@");
      if (parts.length === 2) {
        return (
          <span className={className}>
            {parts[0]} [at] {parts[1].replace(/\./g, " [dot] ")}
          </span>
        );
      }
    } catch (e) {
      // fallback
    }
    return <span className={className}>contact [at] skyhitmedia [dot] com</span>;
  }

  // To prevent headless crawlers that execute JS from scanning the email address,
  // we reverse the email string in the DOM and use CSS bidi-override to render it
  // visually correct for human users. We launch the mailto: protocol on click.
  const reversedEmail = email.split("").reverse().join("");

  return (
    <span
      onClick={handleClick}
      style={{
        direction: "rtl",
        unicodeBidi: "bidi-override",
        cursor: "pointer",
      }}
      className={`${className} hover:underline`}
      title="Click to send email"
    >
      {reversedEmail}
    </span>
  );
}
