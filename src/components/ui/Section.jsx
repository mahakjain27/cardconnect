// Shared section shell: consistent max-width, spacing, and scroll-anchor id.
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`px-5 py-14 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={`mb-8 text-center md:mb-10 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-brand-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
