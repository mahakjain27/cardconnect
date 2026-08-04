import useCompany from "../../hooks/useCompany";
import Section, { SectionHeading } from "../ui/Section";
import QRCodeBlock from "../ui/QRCode";

export default function ShareCard() {
  const company = useCompany();

  return (
    <Section id="scan" className="bg-white">
      <SectionHeading eyebrow="Tap. Scan. Connect." title="Scan to Chat" />

      <div className="flex flex-col items-center gap-5 rounded-2xl bg-surface p-6 sm:flex-row sm:justify-center">
        <QRCodeBlock value={company.social.whatsapp} href={company.social.whatsapp} />
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-neutral-800">
            {company.person.name}
          </p>
          <p className="mt-1 max-w-xs text-xs text-neutral-500">
            Scan or tap this code to start a WhatsApp chat with{" "}
            {company.person.name}.
          </p>
        </div>
      </div>
    </Section>
  );
}
