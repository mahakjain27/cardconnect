import { FaWhatsapp } from "react-icons/fa";
import useCompany from "../../hooks/useCompany";

export default function FloatingWhatsApp() {
  const company = useCompany();

  return (
    <a
      href={`https://wa.me/${company.contact.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-20 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft-lg transition-transform duration-150 hover:scale-105 md:bottom-6"
    >
      <FaWhatsapp />
    </a>
  );
}
