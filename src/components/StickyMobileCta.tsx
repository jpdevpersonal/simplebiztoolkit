import { Link } from "react-router-dom";
import { LINKS } from "../app/App";

export default function StickyMobileCta() {
  return (
    <div className="sb-sticky-cta">
      <div className="container d-flex gap-2">
        <a
          className="shop-button-hollow"
          href={LINKS.etsyShopUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.rem",
            padding: "0.5rem",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "12px",
            backgroundColor: "white",
            color: "var(--sb-green)",
            border: "2px solid var(--sb-green)",
          }}
        >
          🛒 Shop on Etsy
        </a>
        <Link className="btn sb-btn-ghost flex-fill" to={LINKS.freebiePage}>
          Free template
        </Link>
      </div>
    </div>
  );
}
