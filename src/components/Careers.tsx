import EmailLink from "./EmailLink";

const DigitalMarketingExecutiveDetails = () => (
  <div className="space-y-3 text-[17px] leading-[30px] text-gray-700 text-left">
    <div><strong>Company:</strong> SKYHIT MEDIA</div>
    <div><strong>Job Type:</strong> Full Time</div>
    <div><strong>Location:</strong> Hitech city, Hyderabad</div>
    <div><strong>Salary Expectations:</strong> 18k - 25k</div>

    <div>
      <strong>Job Description:</strong>
      <ul className="list-disc list-inside ml-4">
        <li>We're looking for a passionate and driven Junior Digital Marketing Executive to join our dynamic marketing team.</li>
        <li>As a Digital Marketing Junior, you'll play a key role in supporting the team across multiple digital channels. From lead reporting to social media posting, you'll be working alongside our design, development, and marketing teams to ensure a strong and consistent online presence.</li>
      </ul>
    </div>

    <div>
      <strong>Key Responsibilities:</strong>
      <ul className="list-disc list-inside ml-4">
        <li>Handle daily lead tracking and reporting across platforms.</li>
        <li>Coordinate with clients for updates, reporting, and feedback.</li>
        <li>Schedule and post engaging content on social media platforms (Facebook, Instagram, LinkedIn, etc.).</li>
        <li>Contribute creative content ideas for posts, blogs, and campaigns.</li>
        <li>Support in basic SEO activities like keyword research, on-page optimization, and backlink outreach.</li>
        <li>Work closely with the team to maintain brand consistency across all digital touchpoints.</li>
        <li>Help with performance tracking, analytics, and preparing reports for internal and client review.</li>
      </ul>
    </div>

    <div className="text-[17px] leading-[30px] text-gray-700">
      Send your resume to <EmailLink encoded="aHJAc2t5aGl0bWVkaWEuY29t" className="text-black-400 underline" />
    </div>
  </div>
);

export default function Careers() {
  return (
    <div
      className="w-full overflow-x-hidden box-border pb-10"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h3 className="text-[rgba(119,70,53,1)] text-3xl leading-8 text-center font-bold mb-6 mt-6 max-md:text-[23px]">
        POSITIONS REQUIRED
      </h3>

      <div className="w-[85%] mx-auto border rounded-lg overflow-hidden text-left shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-[rgba(190,127,81,1)] font-semibold text-[20px] leading-[30px]">
              Digital Marketing Junior
            </span>
          </div>
        </div>
        <div className="px-4 py-4 border-t bg-gray-50">
          <DigitalMarketingExecutiveDetails />
        </div>
      </div>
    </div>
  );
}
