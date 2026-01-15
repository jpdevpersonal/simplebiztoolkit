import { Link } from "react-router-dom";
import { LINKS } from "../app/App";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--sb-border)",
        background: "var(--sb-soft)",
      }}
    >
      <div className="container py-5 d-flex flex-column flex-lg-row justify-content-between gap-4">
        <div>
          <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
            Simple Biz Toolkit
          </div>
          <p className="sb-muted mb-2" style={{ maxWidth: "280px" }}>
            Essential templates & tools for small business owners.
          </p>
          <p className="sb-muted mb-0" style={{ fontSize: "0.8125rem" }}>
            Support:{" "}
            <a
              href={LINKS.etsyShopUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Etsy messages
            </a>{" "}
            or <strong>simplebiztoolkit@gmail.com</strong>
          </p>
        </div>

        <nav
          className="d-flex gap-3 flex-wrap align-items-start justify-content-lg-end"
          style={{ fontSize: "0.9375rem" }}
        >
          <Link to="/products">Products</Link>
          <Link to="/blog">Resources</Link>
          <Link to="/testimonials">Reviews</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <a href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">
            Etsy Shop
          </a>
        </nav>
      </div>
      <div className="container pb-4">
        <p className="sb-muted mb-0" style={{ fontSize: "0.75rem" }}>
          © {year} Simple Biz Toolkit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
