const ContactCTA: React.FC = () => {
  return (
    <section className="bg-[#E8D5C0] py-4 px-6 lg:px-24 m-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-4">
        {/* Left Text */}
        <p className="text-left text-base lg:text-3xl md:text-2xl font-medium text-[#774635]">
          Let's work together just drop us a line
        </p>

        {/* Right Button */}
        <a href="/contact" rel="noopener noreferrer">
          <button className="bg-[#9B5E35] text-[12px] lg:text-xl text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#7D4E28] transition duration-300">
            Contact Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
