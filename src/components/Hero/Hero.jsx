import { motion } from "framer-motion";
import useCompany from "../../hooks/useCompany";
import { downloadVCard } from "../../utils/vcard";
import Button from "../ui/Button";
import LogoBadge from "../ui/LogoBadge";
import { FiDownload } from "react-icons/fi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const photoIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const company = useCompany();
  const initials = company.person.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--color-brand-50)_0%,_transparent_60%)] px-5 pt-12 pb-10 text-center md:pt-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto flex w-full max-w-3xl flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <LogoBadge
            company={company}
            className="mb-5 h-14 rounded-2xl shadow-soft"
            textClassName="text-lg"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase"
        >
          {company.name}
        </motion.p>

        <motion.div
          variants={photoIn}
          className="relative my-6 h-28 w-28 overflow-hidden rounded-full bg-brand-50 ring-4 ring-white shadow-[0_0_0_6px_rgba(122,17,40,0.1),0_8px_24px_rgba(34,28,29,0.09),0_20px_48px_rgba(34,28,29,0.09)]"
        >
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
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl"
        >
          {company.person.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-1 text-sm font-medium text-brand-500 md:text-base"
        >
          {company.person.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-sm text-balance text-neutral-500"
        >
          {company.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 w-full max-w-xs">
          <Button
            size="lg"
            icon={FiDownload}
            className="w-full"
            onClick={() => downloadVCard(company)}
          >
            Save Contact
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
