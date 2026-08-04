import useCompany from "../../hooks/useCompany";
import Section, { SectionHeading } from "../ui/Section";

export default function About() {
  const company = useCompany();
  const { title, description, highlights } = company.about;

  return (
    <Section id="about" className="bg-white">
      <SectionHeading eyebrow="Who we are" title={title} />

      <p className="text-center text-[15px] leading-relaxed text-neutral-600">
        {description}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {highlights.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2.5 rounded-2xl bg-surface p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-lg text-brand-500">
              <Icon />
            </span>
            <span className="text-xs font-semibold text-neutral-700">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
