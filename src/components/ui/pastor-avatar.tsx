import Image from "next/image";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "light" | "dark";

const dimsBySize: Record<Size, string> = {
  sm: "w-16 h-16 md:w-20 md:h-20",
  md: "w-24 h-24 md:w-28 md:h-28",
  lg: "w-40 h-40 md:w-52 md:h-52",
  xl: "w-64 h-64 md:w-80 md:h-80",
};

const fontBySize: Record<Size, string> = {
  sm: "text-lg md:text-xl",
  md: "text-2xl md:text-3xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-6xl md:text-7xl",
};

function getInitials(name?: string): string {
  if (!name) return "—";
  const cleaned = name.replace(/[—–-]/g, " ").replace(/\bTBC\b/gi, "").trim();
  if (!cleaned) return "—";
  const parts = cleaned
    .replace(/^(Rev\.?|Dr\.?|Pastors?|Pastor)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "—";
  const initials = parts.map((p) => p[0]).slice(0, 2).join("");
  return initials.toUpperCase();
}

export function PastorAvatar({
  name,
  image,
  size = "md",
  variant = "light",
  fullWidth = false,
  className = "",
}: {
  name?: string;
  image?: string;
  size?: Size;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
}) {
  const bg =
    variant === "dark"
      ? "bg-parchment-50/[0.06] border-parchment-50/20"
      : "bg-parchment-100 border-ink/10";
  const fg = variant === "dark" ? "text-grace-light" : "text-grace-dark";
  const initials = getInitials(name);
  const dims = fullWidth ? "w-full aspect-square" : dimsBySize[size];

  return (
    <div
      className={`relative ${dims} shrink-0 border hairline ${bg} overflow-hidden flex items-center justify-center ${className}`}
      aria-hidden={image ? undefined : true}
    >
      {image ? (
        <Image
          src={image}
          alt={name ?? "Pastor"}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 320px, 240px"
        />
      ) : (
        <span className={`font-display ${fontBySize[size]} ${fg} tracking-tight`}>
          {initials}
        </span>
      )}
    </div>
  );
}
