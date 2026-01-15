import { useState } from "react";
import "../styles/products.css";

type Product = {
  title: string;
  problem: string;
  bullets: string[];
  image: string;
  etsyUrl: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <>
      <div className="row g-3 mt-2">
        {products.map((p) => (
          <div className="col-md-4" key={p.title}>
            <div className="template-thumbnail sb-card h-100">
              <div className="overflow-hidden" style={{ width: "100%" }}>
                <div
                  className="product-thumbnail-clickable"
                  style={{
                    aspectRatio: "10/7",
                    width: "100%",
                    overflow: "hidden",
                  }}
                  onClick={() => setHoveredImage(p.image)}
                >
                  <picture>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="img-fluid ledger-thumb"
                    />
                  </picture>
                </div>
              </div>
              <div className="p-3">
                <div className="sb-muted mt-1" style={{ fontWeight: 900 }}>
                  {p.problem}
                </div>
                <ul className="sb-muted mt-2 mb-3">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  className="btn sb-btn-primary w-100"
                  href={p.etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Etsy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Preview Overlay */}
      {hoveredImage && (
        <div
          className="product-image-preview-overlay"
          onClick={() => setHoveredImage(null)}
        >
          <div className="product-image-preview-content">
            <img src={hoveredImage} alt="Product preview" />
          </div>
        </div>
      )}
    </>
  );
}
