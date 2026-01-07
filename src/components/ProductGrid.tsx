type Product = {
  title: string;
  problem: string;
  bullets: string[];
  image: string;
  etsyUrl: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="row g-3 mt-2">
      {products.map((p) => (
        <div className="col-md-4" key={p.title}>
          <div className="sb-card h-100 overflow-hidden">
            <img src={p.image} alt="" className="img-fluid" style={{ height: 220, width: "100%", objectFit: "cover" }} />
            <div className="p-3">
              <div style={{ fontWeight: 900 }}>{p.title}</div>
              <div className="sb-muted mt-1">{p.problem}</div>
              <ul className="sb-muted mt-2 mb-3">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <a className="btn sb-btn-primary w-100" href={p.etsyUrl} target="_blank" rel="noopener noreferrer">
                View on Etsy
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
