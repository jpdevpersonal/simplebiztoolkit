import Seo from "../components/Seo";
import EmailCaptureForm from "../components/EmailCaptureForm";
import { LINKS } from "../app/App";

export default function FreebiePage() {
  return (
    <>
      <Seo
        title="Free Template | Simple Biz Toolkit"
        description="Get a free starter template delivered by email. Try the format and quality before you buy on Etsy."
        canonicalPath="/free"
      />

      <section className="sb-section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontWeight: 900 }}>Free starter template</h1>
              <p className="sb-muted fs-5">
                A practical download you can use today. This is your lead magnet — it builds your list and trust. :contentReference[oaicite:13]{index=13}
              </p>

              <div className="sb-card p-3">
                <div style={{ fontWeight: 900 }}>What you’ll get</div>
                <ul className="sb-muted mb-0">
                  <li>Printable layout (PDF)</li>
                  <li>Simple instructions</li>
                  <li>A “next steps” link to the full Etsy shop</li>
                </ul>
              </div>

              <div className="mt-3 sb-muted" style={{ fontSize: 13 }}>
                Note: the email delivery is placeholder until you connect Mailchimp/MailerLite.
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sb-card p-4">
                <h2 style={{ fontWeight: 900 }} className="h4">Send it to my inbox</h2>
                <p className="sb-muted mb-3">
                  Enter your email to receive the download link.
                </p>
                <EmailCaptureForm source="freebie-page" />

                <div className="mt-3 d-flex gap-2 flex-wrap">
                  <a className="btn sb-btn-primary" href={LINKS.etsyShopUrl} target="_blank" rel="noopener noreferrer">
                    Shop on Etsy
                  </a>
                  <a className="btn sb-btn-ghost" href="/products">
                    Browse categories
                  </a>
                </div>
              </div>

              <div className="sb-card p-3 mt-3">
                <img src="/images/placeholder-preview.png" className="img-fluid rounded-4" alt="Freebie preview placeholder" />
                <div className="sb-muted mt-2" style={{ fontSize: 13 }}>
                  Replace with a screenshot of the free template.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
