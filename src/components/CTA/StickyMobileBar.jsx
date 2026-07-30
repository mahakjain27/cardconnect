import { FiPhone, FiDownload } from "react-icons/fi";
import useCompany from "../../hooks/useCompany";
import { downloadVCard } from "../../utils/vcard";
import Button from "../ui/Button";

export default function StickyMobileBar() {
  const company = useCompany();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-slate-100 bg-white/95 p-3 backdrop-blur md:hidden">
      <Button
        as="a"
        href={`tel:${company.contact.phone}`}
        variant="secondary"
        icon={FiPhone}
        className="flex-1"
      >
        Call
      </Button>
      <Button
        icon={FiDownload}
        className="flex-1"
        onClick={() => downloadVCard(company)}
      >
        Save Contact
      </Button>
    </div>
  );
}
