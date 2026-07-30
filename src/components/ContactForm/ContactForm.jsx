import { useState } from "react";
import { FiSend } from "react-icons/fi";
import useCompany from "../../hooks/useCompany";
import Section, { SectionHeading } from "../ui/Section";
import Button from "../ui/Button";

const emptyForm = { name: "", company: "", phone: "", email: "", message: "" };

const fieldClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none";

export default function ContactForm() {
  const company = useCompany();
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", { to: company.contact.enquiryEmail, ...form });
    setSubmitted(true);
    setForm(emptyForm);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Section id="contact" className="bg-white">
      <SectionHeading eyebrow="Get in touch" title="Send an Enquiry" />
      <p className="-mt-4 mb-6 text-center text-xs text-slate-400">
        Enquiries are routed to {company.contact.enquiryEmail}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={fieldClasses}
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company name"
          className={fieldClasses}
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone number"
          required
          className={fieldClasses}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          required
          className={fieldClasses}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help?"
          rows={4}
          className={`${fieldClasses} resize-none`}
        />

        <Button type="submit" size="lg" icon={FiSend} className="mt-1 w-full">
          {submitted ? "Sent — thank you!" : "Submit Enquiry"}
        </Button>
      </form>
    </Section>
  );
}
