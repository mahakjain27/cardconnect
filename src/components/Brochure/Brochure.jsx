import { FiDownload, FiFileText } from "react-icons/fi";
import useCompany from "../../hooks/useCompany";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Brochure() {
  const company = useCompany();

  return (
    <Section id="brochure" className="bg-white">
      <div className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-10 text-center text-white shadow-soft-lg">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
          <FiFileText />
        </span>
        <h2 className="mt-5 text-xl font-bold md:text-2xl">
          Company Brochure
        </h2>
        <p className="mt-2 max-w-xs text-sm text-white/80">
          Get the full product range and capabilities of {company.shortName}{" "}
          in one document.
        </p>
        <Button
          as="a"
          href={company.brochure.url}
          download={company.brochure.fileName}
          variant="inverse"
          size="lg"
          icon={FiDownload}
          className="mt-6 w-full max-w-xs"
        >
          Download Company Profile
        </Button>
      </div>
    </Section>
  );
}
