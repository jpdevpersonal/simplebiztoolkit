import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../app/App";
import { createPortal } from "react-dom";

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // Close menu only when route actually changes
  useEffect(() => {
    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;
    const handle = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(handle);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { to: "/products", label: "Products" },
    { to: "/blog", label: "Resources" },
    { to: "/testimonials", label: "Reviews" },
    { to: "/about", label: "About" },
    { to: "/faq", label: "FAQ" },
    { to: "/help", label: "Help" },
    { to: "/contact", label: "Contact" }
  ];

  const closeMenu = () => setIsOpen(false);

  const mobileMenu = (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 9998,
            transition: "opacity 0.3s ease"
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(85vw, 320px)",
          backgroundColor: "white",
          zIndex: 9999,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          boxShadow: isOpen ? "-5px 0 25px rgba(0, 0, 0, 0.15)" : "none",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--sb-green), var(--sb-green2))",
            color: "white",
            padding: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <h4 style={{ margin: 0, fontWeight: 900, fontSize: "1.25rem" }}>
              Menu
            </h4>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.9 }}>
              Simple Biz Toolkit
            </p>
          </div>
          <button
            onClick={closeMenu}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white"
            }}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fafafa" }}>
          <nav style={{ padding: "0.5rem 0" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem 1.5rem",
                  textDecoration: "none",
                  color: "var(--sb-ink)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  backgroundColor: "white",
                  borderBottom: "1px solid #eee"
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "var(--sb-green)",
                    borderRadius: "50%",
                    marginRight: "1rem"
                  }}
                />
                {item.label}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginLeft: "auto", opacity: 0.4 }}
                >
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div style={{ padding: "1.5rem" }}>
            <Link
              to={LINKS.freebiePage}
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "1rem",
                marginBottom: "0.75rem",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--sb-green), var(--sb-green2))",
                color: "white",
                border: "none"
              }}
            >
              ⭐ Get Free Template
            </Link>
            <a
              href={LINKS.etsyShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "1rem",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "12px",
                backgroundColor: "white",
                color: "var(--sb-green)",
                border: "2px solid var(--sb-green)"
              }}
            >
              🛒 Shop on Etsy
            </a>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                fontSize: "13px"
              }}
            >
              <div style={{ color: "var(--sb-green)", fontWeight: 700 }}>
                🔒 Secure Checkout
              </div>
              <div style={{ color: "#666", marginTop: "4px" }}>
                All transactions via Etsy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="d-none d-lg-flex align-items-center gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            className="px-3 py-2 text-decoration-none sb-muted rounded-pill"
            to={item.to}
            style={{
              transition: "all 0.2s ease",
              fontWeight: 600
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="d-lg-none"
        type="button"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
        style={{
          border: "none",
          background: "transparent",
          color: "var(--sb-ink)",
          padding: "0.5rem",
          cursor: "pointer"
        }}
        aria-label="Open menu"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ width: "22px", height: "2px", backgroundColor: "currentColor", borderRadius: "1px" }} />
          <div style={{ width: "22px", height: "2px", backgroundColor: "currentColor", borderRadius: "1px" }} />
          <div style={{ width: "22px", height: "2px", backgroundColor: "currentColor", borderRadius: "1px" }} />
        </div>
      </button>

      {/* Portal the mobile menu to body to avoid z-index issues */}
      {createPortal(mobileMenu, document.body)}
    </>
  );
}