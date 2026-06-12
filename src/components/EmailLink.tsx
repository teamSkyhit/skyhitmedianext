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

  if (!email) {
    // During server side rendering (Node.js environment), decode and render obfuscated text
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

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
