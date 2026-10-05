"use client";
export default function LabBottomBar() {
  return (
    <div style={{ position: "fixed", bottom: 0, insetInline: 0, zIndex: 60, background: "rgba(17,17,15,0.92)", backdropFilter: "blur(10px)", borderTop: "1px solid var(--lab-border)", padding: "10px 12px calc(10px + env(safe-area-inset-bottom))" }}>
      <div style={{ display: "flex", gap: 10, maxWidth: 640, marginInline: "auto" }}>
        <a href="tel:0551215610" className="lab-btn lab-btn-primary" style={{ flex: 1 }}>اتصل الآن</a>
        <a href="https://wa.me/966551215610" className="lab-btn lab-btn-ghost" style={{ flex: 1 }}>واتساب</a>
      </div>
    </div>
  );
}
