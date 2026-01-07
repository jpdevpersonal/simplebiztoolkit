import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import TrustBar from "../components/TrustBar";
import EmailCaptureForm from "../components/EmailCaptureForm";
import TestimonialGrid from "../components/TestimonialGrid";
import ProductGrid from "../components/ProductGrid";
import { categories } from "../data/products";
import { LINKS } from "../app/App";

import "../styles/home.css";

export default function HomePage() {
  const trust = [
    "4.7★ Etsy rating (placeholder)",
    "Etsy Star Seller (placeholder)",
    "Instant digital download",
    "Secure checkout via Etsy",
  ];

  const featured = categories.flatMap((c) => c.items.slice(0, 1)).slice(0, 3);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Simple Biz Toolkit",
    url: "https://simplebiztoolkit.com",
    sameAs: [LINKS.etsyShopUrl],
  };

  return (
    <>
      <Seo
        title="Simple Biz Toolkit | Essential Templates & Tools for Small Business Owners"
        description="Trust-first templates and toolkits that save time and reduce admin. Get a free starter template, then shop securely on Etsy."
        canonicalPath="/"
        jsonLd={orgJsonLd}
      />

      {/* HERO */}
      <section className="sb-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="sb-hero-title">
                Essential templates & tools for small business owners
              </h1>
              <p className="sb-muted fs-5">
                Simple, ready-to-use downloads that reduce admin, keep you organised, and don’t require tech skills.
              </p>

              <div className="d-flex gap-2 flex-wrap mt-3">
                <a className="btn sb-btn-primary" href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">
                  Shop on Etsy
                </a>
                <Link className="btn sb-btn-ghost" to="/products">
                  Browse products
                </Link>
              </div>

              <div className="mt-3">
                <TrustBar items={trust} />
              </div>

              {/* One strong testimonial near CTA */}
              <div className="sb-card p-3 mt-4">
                <div style={{ fontWeight: 900 }}>"Saved me hours each month."</div>
                <div className="sb-muted" style={{ fontSize: 13 }}>— Verified Etsy buyer (placeholder)</div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sb-card p-3">
                <img
                  src="/images/placeholder-hero.png"
                  alt="Placeholder hero illustration"
                  className="img-fluid rounded-4"
                />
                <div className="sb-muted mt-2" style={{ fontSize: 13 }}>
                  Replace with your toolbox illustration / banner image.
                </div>
              </div>
            </div>
          </div>

          {/* Product previews (proof) */}
          <div className="sb-section pt-4 pb-0">
            <h2 className="text-center" style={{ fontWeight: 900 }}>What the tools look like</h2>
            <p className="text-center sb-muted">A quick preview — the full details and checkout are on Etsy.</p>

            <ProductGrid products={featured} />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="sb-section sb-section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2 style={{ fontWeight: 900 }}>Designed to be simple</h2>
            <p className="sb-muted">Clear layouts, printable formats, and Essential categories.</p>
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="sb-card p-3 h-100">
                <div style={{ fontWeight: 900 }}>Essential templates</div>
                <div className="sb-muted">Tracking, planning, and admin — without overcomplication.</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sb-card p-3 h-100">
                <div style={{ fontWeight: 900 }}>Simple systems</div>
                <div className="sb-muted">Repeatable formats that keep you consistent.</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sb-card p-3 h-100">
                <div style={{ fontWeight: 900 }}>Real-world use</div>
                <div className="sb-muted">Made for small business owners, solo operators, and online sellers.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sb-section">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
            <div>
              <h2 style={{ fontWeight: 900 }}>What customers say</h2>
              <p className="sb-muted mb-0">Social proof reduces hesitation. Put it right next to the action.</p>
            </div>
            <Link className="btn sb-btn-ghost" to="/testimonials">Read more reviews</Link>
          </div>
          <TestimonialGrid />

          <div className="text-center mt-4">
            <a className="btn sb-btn-primary" href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">
              Shop on Etsy (secure checkout)
            </a>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="sb-section sb-section-alt">
        <div className="container">
          <div className="sb-card p-4">
            <div className="row align-items-center g-3">
              <div className="col-lg-6">
                <h2 style={{ fontWeight: 900 }}>Get a free starter template</h2>
                <p className="sb-muted mb-2">
                  A quick win you can use today. This is the start of your email list funnel.
                </p>
                <ul className="sb-muted mb-0">
                  <li>Instant download link (via email)</li>
                  <li>No spam — helpful tips + new releases</li>
                  <li>Occasional subscriber-only discounts</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <EmailCaptureForm source="home-lead-magnet" />
                <div className="sb-muted mt-2" style={{ fontSize: 13 }}>
                  By subscribing you agree to receive emails. Unsubscribe anytime.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
