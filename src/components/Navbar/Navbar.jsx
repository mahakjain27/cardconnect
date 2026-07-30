import useCompany from "../../hooks/useCompany";
import { downloadVCard } from "../../utils/vcard";
import Button from "../ui/Button";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  const company = useCompany();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
            {company.logoInitials}
          </div>
          <span className="text-sm font-semibold text-slate-800">
            {company.shortName}
          </span>
        </div>

        <div className="hidden md:block">
          <Button
            size="md"
            className="h-10 px-4 text-sm"
            icon={FiDownload}
            onClick={() => downloadVCard(company)}
          >
            Save Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
