import Seo from "../components/Seo";

export default function HelpPage() {
  return (
    <>
      <Seo
        title="Help | Simple Biz Toolkit"
        description="How to get help with any problems on the SimpleBizToolKit"
        canonicalPath="/help"
      />

      <section className="sb-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontWeight: 900 }}>Help</h1>
          <p className="sb-muted fs-5">
            This is where you can get help on any problems you might be having.
          </p>
        </div>
      </section>
    </>
  );
}
