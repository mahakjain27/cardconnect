import { FiNavigation } from "react-icons/fi";
import useCompany from "../../hooks/useCompany";
import Section, { SectionHeading } from "../ui/Section";
import Button from "../ui/Button";

export default function Location() {
  const company = useCompany();

  return (
    <Section id="location">
      <SectionHeading eyebrow="Find us" title="Location" />

      <div className="overflow-hidden rounded-2xl shadow-soft">
        <iframe
          title="Company location"
          src={company.address.embedUrl}
          className="h-56 w-full border-0 md:h-72"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-4 text-center text-sm text-neutral-600">
        {company.address.line}
      </p>

      <Button
        as="a"
        href={company.address.mapsUrl}
        target="_blank"
        rel="noreferrer"
        size="lg"
        icon={FiNavigation}
        className="mt-5 w-full"
      >
        Get Directions
      </Button>
    </Section>
  );
}
