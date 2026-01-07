import { Link } from "react-router-dom";
import { LINKS } from "../app/App";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--sb-border)" }}>
      <div className="container py-4 d-flex flex-column flex-lg-row justify-content-between gap-3">
        <div>
          <div style={{ fontWeight: 900 }}>Simple Biz Toolkit</div>
          <div className="sb-muted">Essential templates & tools for small business owners.</div>
          <div className="sb-muted mt-2" style={{ fontSize: 13 }}>
            Fastest support: Etsy messages. Email: <strong>simplebiztoolkit@gmail.com</strong>
          </div>
        </div>

        <div className="d-flex gap-3 flex-wrap align-items-start justify-content-lg-end">
          <Link to="/products">Products</Link>
          <Link to="/blog">Resources</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <a href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">Etsy shop</a>
          <span className="sb-muted">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
