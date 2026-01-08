import { Link } from "react-router-dom";
import { LINKS } from "../app/App";
import SiteNavigation from "./SiteNavigation";

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

        <SiteNavigation />

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
        </div>
      </div>
    </header>
  );
}
