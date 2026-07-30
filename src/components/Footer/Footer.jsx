import useCompany from "../../hooks/useCompany";

export default function Footer() {
  const company = useCompany();
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-10 text-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-white">
          {company.logoInitials}
        </div>
        <p className="text-sm font-semibold text-slate-700">
          {company.name}
        </p>
        <p className="text-xs text-slate-400">
          &copy; {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
