import Seo from "../components/Seo";
import { LINKS } from "../app/App";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About | Simple Biz Toolkit"
        description="The story behind Simple Biz Toolkit and why these templates are built to be simple, Essential, and reusable."
        canonicalPath="/about"
      />

      <section className="sb-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontWeight: 900 }}>About</h1>
          <p className="sb-muted fs-5">
            Small businesses don’t need more complexity — they need tools that make admin boring and predictable.
          </p>

          <div className="sb-card p-4">
            <p className="mb-2">
              Hi, I’m Julian. I create simple business templates for real people who just want to stay organised.
            </p>
            <p className="sb-muted mb-0">
              Add credibility here (sales count, Star Seller, etc.). This is a trust lever. :contentReference[oaicite:17]
            </p>
          </div>

          <div className="mt-4 d-flex gap-2 flex-wrap">
            <a className="btn sb-btn-primary" href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">
              Shop on Etsy
            </a>
            <a className="btn sb-btn-ghost" href="/products">Browse products</a>
          </div>
        </div>
      </section>
    </>
  );
}
