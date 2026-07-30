import { FiArrowRight } from "react-icons/fi";
import useCompany from "../../hooks/useCompany";
import Section, { SectionHeading } from "../ui/Section";

export default function ProductCategories() {
  const company = useCompany();

  return (
    <Section id="products">
      <SectionHeading eyebrow="What we offer" title="Product Categories" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {company.products.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft transition-shadow duration-150 hover:shadow-soft-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-500">
              <Icon />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-slate-800">
                {title}
              </h3>
              <p className="truncate text-xs text-slate-500">{description}</p>
            </div>
            <FiArrowRight className="shrink-0 text-slate-300 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-brand-500" />
          </div>
        ))}
      </div>
    </Section>
  );
}
