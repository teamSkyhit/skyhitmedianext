import LogoCarousel from "../LogoCarousel";

const clientLogos = [
  { src: "/images/clients-kia.webp", alt: "Kia" },
  { src: "/images/clients-mg-motor.webp", alt: "MG Motor" },
  { src: "/images/clients-nissan.webp", alt: "Nissan" },
  { src: "/images/clients-golddrop.webp", alt: "Golddrop" },
  { src: "/images/clients-hpcl.webp", alt: "HPCL" },
  { src: "/images/clients-indian-oil.webp", alt: "Indian Oil" },
  { src: "/images/clients-aix-investment.webp", alt: "AIX Investment" },
  { src: "/images/clients-ramee.webp", alt: "Ramee" },
  { src: "/images/clients-photriya.webp", alt: "Photriya" },
  { src: "/images/clients-venkat-fitness.webp", alt: "Venkat Fitness" },
  { src: "/images/clients-bakelore.webp", alt: "Bakelore" },
  { src: "/images/clients-thangedu.webp", alt: "Thangedu" },
  { src: "/images/clients-signova-group.webp", alt: "Signova Group" },
  { src: "/images/clients-ridge-homes.webp", alt: "Ridge Homes" },
  { src: "/images/clients-promea.webp", alt: "Promea" },
  { src: "/images/clients-international-appareal.webp", alt: "International Apparel" },
  { src: "/images/clients-my-pet-clinic.webp", alt: "My Pet Clinic" },
  { src: "/images/clients-nris.webp", alt: "NRIS" },
];

function ClientLogos() {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-semibold mb-6">Our Clients</h2>
      <LogoCarousel logos={clientLogos} autoplaySpeed={1500} />
    </div>
  );
}

export default ClientLogos;
