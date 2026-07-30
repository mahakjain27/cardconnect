import { useState } from "react";
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiShare2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import useCompany from "../../hooks/useCompany";
import { shareContact } from "../../utils/share";
import Section from "../ui/Section";

function ActionButton({ icon: Icon, label, href, onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={Tag === "button" ? "button" : undefined}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="flex flex-col items-center gap-2.5 rounded-2xl bg-white p-4 text-center shadow-soft transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-soft-lg active:translate-y-0"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-xl text-brand-500">
        <Icon />
      </span>
      <span className="text-xs font-semibold text-slate-700">{label}</span>
    </Tag>
  );
}

export default function QuickActions() {
  const company = useCompany();
  const [status, setStatus] = useState(null);

  const handleShare = async () => {
    const result = await shareContact(company);
    if (result === "copied") {
      setStatus("Link copied");
      setTimeout(() => setStatus(null), 2000);
    }
  };

  const actions = [
    { icon: FiPhone, label: "Call", href: `tel:${company.contact.phone}` },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: `https://wa.me/${company.contact.whatsapp}`,
    },
    { icon: FiMail, label: "Email", href: `mailto:${company.contact.email}` },
    { icon: FiGlobe, label: "Website", href: company.contact.website },
    { icon: FiMapPin, label: "Maps", href: company.address.mapsUrl },
    { icon: FiShare2, label: "Share", onClick: handleShare },
  ];

  return (
    <Section id="actions" className="pt-0 md:pt-0">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {actions.map((action) => (
          <ActionButton key={action.label} {...action} />
        ))}
      </div>
      {status && (
        <p className="mt-3 text-center text-xs font-medium text-brand-500">
          {status}
        </p>
      )}
    </Section>
  );
}
