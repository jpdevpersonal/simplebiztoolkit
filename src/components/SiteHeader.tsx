import { Link, NavLink } from "react-router-dom";
import { LINKS } from "../app/App";

export default function SiteHeader() {
  return (
    <header className="sticky-top sb-site-header" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--sb-border)" }}>
      <div className="container py-3 d-flex align-items-center justify-content-between gap-3 sb-site-header-inner">
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none sb-site-header-brand">
          <img
            src="/images/simple-biz-toolkit-logo.png"
            alt="Simple Biz Toolkit"
            width={80}
            height={80}
            style={{ borderRadius: 12, border: "1px solid var(--sb-border)" }}
          />
          <div>
            <div className="sb-brand-title">Simple Biz Toolkit</div>
            <div className="sb-muted" style={{ fontSize: 12.5 }}>
              Essential Templates & Tools for Small Business Owners
            </div>
          </div>
        </Link>

        <nav className="d-none d-lg-flex align-items-center gap-2">
          <NavLink className="px-2 py-1 text-decoration-none sb-muted" to="/products">Products</NavLink>
          <NavLink className="px-2 py-1 text-decoration-none sb-muted" to="/blog">Resources</NavLink>
          <NavLink className="px-2 py-1 text-decoration-none sb-muted" to="/testimonials">Reviews</NavLink>
          <NavLink className="px-2 py-1 text-decoration-none sb-muted" to="/about">About</NavLink>
          <NavLink className="px-2 py-1 text-decoration-none sb-muted" to="/faq">FAQ</NavLink>
          <NavLink className="px-2 py-1 text-decoration-none sb-muted" to="/contact">Contact</NavLink>
        </nav>

        <div className="d-flex align-items-center gap-2 sb-site-header-actions">
          <Link to={LINKS.freebiePage} className="btn sb-btn-ghost d-none d-sm-inline-flex">
            Get free template
          </Link>

          <a
            className="btn sb-btn-primary"
            href={LINKS.etsyShopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop on Etsy
          </a>

          {/* Bootstrap offcanvas for mobile nav */}
          <button
            className="btn sb-btn-ghost d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
          >
            Menu
          </button>
        </div>
      </div>

      <div className="offcanvas offcanvas-end" tabIndex={-1} id="mobileNav" aria-labelledby="mobileNavLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel" style={{ fontWeight: 900 }}>Navigate</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          <NavLink className="text-decoration-none" to="/products" data-bs-dismiss="offcanvas">Products</NavLink>
          <NavLink className="text-decoration-none" to="/blog" data-bs-dismiss="offcanvas">Resources</NavLink>
          <NavLink className="text-decoration-none" to="/testimonials" data-bs-dismiss="offcanvas">Reviews</NavLink>
          <NavLink className="text-decoration-none" to="/about" data-bs-dismiss="offcanvas">About</NavLink>
          <NavLink className="text-decoration-none" to="/faq" data-bs-dismiss="offcanvas">FAQ</NavLink>
          <NavLink className="text-decoration-none" to="/contact" data-bs-dismiss="offcanvas">Contact</NavLink>

          <div className="mt-3 d-grid gap-2">
            <Link to={LINKS.freebiePage} className="btn sb-btn-primary" data-bs-dismiss="offcanvas">
              Get free template
            </Link>
            <a className="btn sb-btn-ghost" href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">
              Shop on Etsy
            </a>
          </div>

          <div className="sb-muted mt-3" style={{ fontSize: 13 }}>
            Trust-first note: checkout happens securely on Etsy.
          </div>
        </div>
      </div>
    </header>
  );
}
