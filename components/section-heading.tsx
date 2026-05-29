export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#d7b56d]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">{copy}</p> : null}
    </div>
  );
}
