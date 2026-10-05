"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Home, LayoutGrid, Images, Sparkles, Menu, X, Phone, MessageCircle } from "lucide-react";
import LabImage from "../ui/LabImage";

const links = [
  { href: "/", label: "الرئيسية", Icon: Home },
  { href: "/#sections", label: "الأقسام", Icon: LayoutGrid },
  { href: "/#work", label: "أعمالنا", Icon: Images },
  { href: "/#why", label: "لماذا نحن", Icon: Sparkles },
];

export default function LabHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <div style={{ height: 2, background: "linear-gradient(90deg,transparent,var(--lab-gold),transparent)", boxShadow: "0 0 12px rgba(199,165,106,0.7)" }} />
      <header style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(18px)", background: "rgba(12,12,10,0.72)", borderBottom: "1px solid var(--lab-border-soft)" }}>
        <div className="lab-container" style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Link href="/" aria-label="شبكة التميز للمقاولات — الرئيسية" style={{ display: "flex", alignItems: "center" }}>
            <span style={{ position: "relative", display: "block", width: 168, height: 44, filter: "brightness(0) invert(1) drop-shadow(0 0 12px rgba(199,165,106,0.5))" }}>
              <LabImage src="/lab/logo-footer.png" alt="شعار شبكة التميز للمقاولات" fill fit="contain" sizes="168px" />
            </span>
          </Link>
          <nav aria-label="التنقل الرئيسي" className="lab-nav-desktop" style={{ display: "none" }}>
            <ul style={{ display: "flex", gap: 6, listStyle: "none", margin: 0, padding: 0 }}>
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 14px", borderRadius: 12, color: "var(--lab-ivory)", fontSize: "0.92rem", border: "1px solid transparent", background: path === l.href ? "rgba(199,165,106,0.12)" : "transparent", borderColor: path === l.href ? "var(--lab-border)" : "transparent" }}>
                    <l.Icon size={17} aria-hidden="true" style={{ color: "var(--lab-gold)" }} />{l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <style>{`@media(min-width:1024px){.lab-nav-desktop{display:block !important}.lab-burger{display:none !important}}`}</style>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button aria-label="فتح القائمة" aria-expanded={open} className="lab-btn lab-btn-ghost lab-burger" style={{ minHeight: 44, minWidth: 44, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: "fixed", inset: 0, zIndex: 70, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }} onClick={() => setOpen(false)}>
            <motion.aside
              role="dialog" aria-modal="true" aria-label="قائمة الجوال"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "min(86vw,340px)", background: "linear-gradient(180deg,#1a1a16,#101010)", borderInlineStart: "1px solid var(--lab-border)", padding: 18, display: "flex", flexDirection: "column", gap: 8, boxShadow: "-30px 0 60px rgba(0,0,0,0.5)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid var(--lab-border-soft)" }}>
                <strong className="lab-gradient-text">القائمة</strong>
                <button aria-label="إغلاق القائمة" className="lab-btn lab-btn-ghost" style={{ minHeight: 42, minWidth: 42, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setOpen(false)}><X size={20} /></button>
              </div>
              {links.map((l, i) => (
                <motion.div key={l.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i }}>
                  <Link href={l.href} onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 14px", borderRadius: 14, border: "1px solid var(--lab-border-soft)", background: "rgba(255,255,255,0.03)", color: "var(--lab-ivory)" }}>
                    <span style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(199,165,106,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--lab-gold)" }}><l.Icon size={17} /></span>{l.label}
                  </Link>
                </motion.div>
              ))}
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8, paddingTop: 12, borderTop: "1px solid var(--lab-border-soft)" }}>
                <a href="tel:0551215610" className="lab-btn lab-btn-primary"><Phone size={17} /> اتصال فوري</a>
                <a href="https://wa.me/966551215610" className="lab-btn lab-btn-ghost"><MessageCircle size={17} /> واتساب</a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
