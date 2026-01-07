import { testimonials } from "../data/testimonials";

export default function TestimonialGrid() {
  return (
    <div className="row g-3">
      {testimonials.map((t) => (
        <div className="col-md-4" key={t.quote}>
          <div className="sb-card p-3 h-100">
            <div style={{ fontWeight: 900 }}>"{t.quote}"</div>
            <div className="sb-muted mt-2" style={{ fontSize: 13 }}>
              — {t.name}, {t.role}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
