import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiShare2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import useCompany from "../../hooks/useCompany";
import { shareContact } from "../../utils/share";
import Section from "../ui/Section";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function ActionButton({ icon: Icon, label, href, onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <motion.div variants={item}>
      <Tag
        href={href}
        type={Tag === "button" ? "button" : undefined}
        onClick={onClick}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noreferrer" : undefined}
        className="flex w-full flex-col items-center gap-2.5 rounded-2xl bg-white p-4 text-center shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-soft-lg active:translate-y-0 active:scale-100"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-xl text-brand-500">
          <Icon />
        </span>
        <span className="text-xs font-semibold text-slate-700">{label}</span>
      </Tag>
    </motion.div>
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
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-3 gap-3 md:gap-4"
      >
        {actions.map((action) => (
          <ActionButton key={action.label} {...action} />
        ))}
      </motion.div>
      {status && (
        <p className="mt-3 text-center text-xs font-medium text-brand-500">
          {status}
        </p>
      )}
    </Section>
  );
}
