import Image from 'next/image';
import Link from 'next/link';
// Inline SVGs — these social icons don't exist in this lucide-react version
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0622] text-white flex flex-col items-center justify-center px-4 text-center space-y-8">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-8">Thank You</h1>
        <p className="text-xl md:text-2xl">The form was submitted successfully</p>
      </div>

      <Image
        src="/images/header-skyhit-logo-desktop.webp"
        alt="Skyhit Media Logo"
        width={144}
        height={48}
        className="w-36 h-auto"
        preload
        unoptimized
      />

      <div>
        <p className="text-lg md:text-xl font-semibold mb-2">
          OUR TEAM WILL GET BACK TO YOU SOON
        </p>
        <p className="text-lg md:text-xl font-semibold">
          FOLLOW US ON SOCIAL MEDIA
        </p>
      </div>

      <div className="flex gap-6 justify-center text-white text-2xl">
        <Link href="https://www.facebook.com/skyhitmedia" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="w-7 h-7 hover:text-blue-400 transition-colors" />
        </Link>
        <Link href="https://www.instagram.com/skyhitmedia/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="w-7 h-7 hover:text-pink-400 transition-colors" />
        </Link>
        <Link href="https://www.youtube.com/c/SKYHITMEDIA" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon className="w-7 h-7 hover:text-red-500 transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com/company/skyhit-media/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="w-7 h-7 hover:text-blue-300 transition-colors" />
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
