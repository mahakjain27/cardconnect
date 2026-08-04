const variants = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-soft hover:from-brand-600 hover:to-brand-500 hover:shadow-[0_8px_24px_rgba(10,79,179,0.35)] active:from-brand-700 active:to-brand-600",
  secondary:
    "bg-white text-brand-500 border border-brand-100 hover:border-brand-300 hover:bg-brand-50",
  ghost: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  inverse: "bg-white text-brand-600 hover:bg-white/90",
};

const sizes = {
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="shrink-0 text-lg" />}
      {children}
    </Tag>
  );
}
