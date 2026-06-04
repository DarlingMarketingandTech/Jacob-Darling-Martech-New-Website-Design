interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status?: string;
  href?: string;
}

export function ToolCard({ icon, title, description, status = "Available" }: ToolCardProps) {
  return (
    <div
      className="rounded-[var(--radius-lg)] border bg-white p-5 transition-all duration-[240ms] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
      style={{ borderColor: "var(--line)" }}
    >
      {/* Icon bubble */}
      <div
        className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px]"
        style={{ background: "var(--crimson-100)", color: "var(--crimson)" }}
      >
        {icon}
      </div>

      <h3
        className="dm-h3 mt-4"
        style={{ color: "var(--charcoal)" }}
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
        {description}
      </p>

      {/* Meta row */}
      <div
        className="mt-4 flex items-center gap-2 border-t pt-3 text-xs font-bold tracking-[0.12em] uppercase"
        style={{
          borderColor: "var(--line)",
          color: "var(--fg3)",
          fontFamily: "var(--font-mono)",
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: "var(--cool-sage)" }}
          aria-hidden="true"
        />
        {status}
      </div>
    </div>
  );
}
