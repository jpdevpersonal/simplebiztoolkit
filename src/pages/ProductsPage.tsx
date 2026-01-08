import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { categories } from "../data/products";

import "../styles/products.css";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products | Simple Biz Toolkit"
        description="Browse categories like accounting ledgers, time sheets, and rent trackers. Each tool links to Etsy for secure checkout."
        canonicalPath="/products"
      />

      <section className="sb-section">
        <div className="container">
          <h1 style={{ fontWeight: 900 }}>Products</h1>
          {/* <p className="sb-muted">
            Dedicated category pages = more SEO surface area + clearer buyer intent before sending them to Etsy. :contentReference[oaicite:9]
          </p> */}

          <div className="row g-3 mt-2">
            {categories.map((c) => (
              <div className="col-md-4" key={c.slug}>
                <div className="sb-card p-3 h-100">
                  <div style={{ fontWeight: 900 }}>{c.name}</div>
                  <div className="sb-muted mt-1">{c.summary}</div>
                  <div className="mt-3 d-flex gap-2 flex-wrap">
                    <Link className="btn sb-btn-primary" to={`/products/${c.slug}`}>View category</Link>
                    <Link className="btn sb-btn-ghost" to="/free">Get free template</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sb-card p-3 mt-4">
            <div className="sb-muted" style={{ fontSize: 13 }}>
              Pro tip: write unique copy here (not copy/paste Etsy descriptions). This is what ranks on Google. :contentReference[oaicite:10]
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
