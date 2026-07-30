import useCompany from "../../hooks/useCompany";
import { downloadVCard } from "../../utils/vcard";
import Button from "../ui/Button";
import LogoBadge from "../ui/LogoBadge";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  const company = useCompany();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <LogoBadge company={company} className="h-9 rounded-lg" />
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
