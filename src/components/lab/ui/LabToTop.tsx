"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** زر العودة للأعلى — يظهر بعد النزول */
export default function LabToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <>
      <style>{`@media(min-width:1024px){.lab-totop{bottom:28px !important}}`}</style>
      <button
        aria-label="العودة للأعلى"
        className="lab-totop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed", bottom: "calc(150px + env(safe-area-inset-bottom))", insetInlineEnd: 14, zIndex: 65,
          width: 48, height: 48, borderRadius: "50%", cursor: "pointer",
          background: "rgba(15,15,12,0.9)", border: "1px solid var(--lab-gold)", color: "var(--lab-gold-light)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 18px rgba(199,165,106,0.4),0 10px 26px rgba(0,0,0,0.5)",
        }}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
