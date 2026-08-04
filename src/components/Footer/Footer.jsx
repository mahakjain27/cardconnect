import useCompany from "../../hooks/useCompany";
import LogoBadge from "../ui/LogoBadge";

export default function Footer() {
  const company = useCompany();
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-10 text-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
        <LogoBadge company={company} className="h-10 rounded-xl" />
        <p className="text-sm font-semibold text-neutral-700">
          {company.name}
        </p>
        <p className="text-xs text-neutral-400">
          &copy; {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
