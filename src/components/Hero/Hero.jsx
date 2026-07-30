import { motion } from "framer-motion";
import useCompany from "../../hooks/useCompany";
import { downloadVCard } from "../../utils/vcard";
import Button from "../ui/Button";
import { FiDownload } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const company = useCompany();
  const initials = company.person.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="px-5 pt-12 pb-10 text-center md:pt-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-full max-w-3xl flex-col items-center"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-white shadow-soft">
          {company.logoInitials}
        </div>

        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          {company.name}
        </p>

        <div className="relative my-6 h-28 w-28 overflow-hidden rounded-full bg-brand-50 shadow-soft-lg ring-4 ring-white">
          {company.person.photo ? (
            <img
              src={company.person.photo}
              alt={company.person.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-brand-400">
              {initials}
            </div>
          )}
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          {company.person.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-brand-500 md:text-base">
          {company.person.title}
        </p>

        <p className="mt-5 max-w-sm text-balance text-slate-500">
          {company.tagline}
        </p>

        <Button
          size="lg"
          icon={FiDownload}
          className="mt-8 w-full max-w-xs"
          onClick={() => downloadVCard(company)}
        >
          Save Contact
        </Button>
      </motion.div>
    </section>
  );
}
