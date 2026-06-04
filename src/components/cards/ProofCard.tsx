interface ProofCardProps {
  stat: string;
  label: string;
  descriptor: string;
  icon?: React.ReactNode;
}

export function ProofCard({ stat, label, descriptor, icon }: ProofCardProps) {
  return (
    <div
      className="rounded-[var(--radius-lg)] border p-6"
      style={{
        background: "var(--surface-dark)",
        borderColor: "rgba(255,255,255,0.14)",
        boxShadow: "var(--shadow-dark)",
      }}
    >
      {icon && (
        <div className="mb-4" style={{ color: "var(--clay)" }}>
          {icon}
        </div>
      )}
      <div
        className="text-5xl font-black leading-none tracking-[-0.03em]"
        style={{ color: "var(--fg-on-dark-1)", fontFamily: "var(--font-sans)" }}
      >
        {stat}
      </div>
      <div
        className="mt-2 text-[15px] font-semibold"
        style={{ color: "var(--fg-on-dark-1)" }}
      >
        {label}
      </div>
      <p
        className="mt-3 border-t pt-3 text-xs leading-relaxed"
        style={{
          borderColor: "var(--line-on-dark)",
          color: "var(--fg-on-dark-3)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {descriptor}
      </p>
    </div>
  );
}
