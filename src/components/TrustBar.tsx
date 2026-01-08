type Props = { items: string[] };

export default function TrustBar({ items }: Props) {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
      {items.map((t) => (
        <span key={t} className="sb-trust-pill">{t}</span>
      ))}
    </div>
  );
}
