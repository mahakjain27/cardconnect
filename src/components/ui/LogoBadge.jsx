// Falls back to initials when a company has no logo asset yet —
// same pattern as the person photo fallback in Hero.
export default function LogoBadge({ company, className = "", textClassName = "text-sm" }) {
  if (company.logo) {
    return (
      <img
        src={company.logo}
        alt={company.name}
        className={`w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex aspect-square items-center justify-center bg-brand-500 font-bold text-white ${className}`}
    >
      <span className={textClassName}>{company.logoInitials}</span>
    </div>
  );
}
