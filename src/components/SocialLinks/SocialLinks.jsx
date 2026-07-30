import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import useCompany from "../../hooks/useCompany";
import Section, { SectionHeading } from "../ui/Section";

export default function SocialLinks() {
  const company = useCompany();

  const links = [
    { icon: FaLinkedinIn, label: "LinkedIn", href: company.social.linkedin },
    { icon: FaInstagram, label: "Instagram", href: company.social.instagram },
    { icon: FaFacebookF, label: "Facebook", href: company.social.facebook },
    { icon: FaYoutube, label: "YouTube", href: company.social.youtube },
    { icon: FaGlobe, label: "Website", href: company.social.website },
    { icon: FaWhatsapp, label: "WhatsApp", href: company.social.whatsapp },
  ];

  return (
    <Section id="social" className="bg-white">
      <SectionHeading eyebrow="Stay connected" title="Follow Us" />

      <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex flex-col items-center gap-2 rounded-2xl bg-surface p-4 transition-colors duration-150 hover:bg-brand-50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-brand-500 shadow-soft">
              <Icon />
            </span>
            <span className="text-[11px] font-medium text-slate-600">
              {label}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
