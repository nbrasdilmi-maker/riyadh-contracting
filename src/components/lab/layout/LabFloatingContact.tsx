"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, Plus, Minus } from "lucide-react";

/** أيقونات عائمة فاخرة — بديل الشريط المثبت */
export default function LabFloatingContact() {
  const [open, setOpen] = useState(true);
  return (
    <div aria-label="تواصل سريع" style={{ position: "fixed", bottom: "calc(86px + env(safe-area-inset-bottom))", insetInlineStart: 14, zIndex: 65, display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
      <style>{`@media(min-width:1024px){.lab-fab-wrap{bottom:28px !important;inset-inline-start:22px !important}}`}</style>
      <div className="lab-fab-wrap" style={{ display: "contents" }}>
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                href="https://wa.me/966551215610"
                aria-label="تواصل واتساب"
                initial={{ opacity: 0, scale: 0.5, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 16 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                title="واتساب"
                style={{ width: 54, height: 54, borderRadius: "50%", background: "linear-gradient(135deg,#2fe07a,#12a94b)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 0 24px rgba(37,211,102,0.55),0 12px 30px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.3)", animation: "lab-float 3s ease-in-out infinite" }}
              ><MessageCircle size={24} /></motion.a>
              <motion.a
                href="tel:0551215610"
                aria-label="اتصال فوري"
                initial={{ opacity: 0, scale: 0.5, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 16 }}
                transition={{ delay: 0.06 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                title="اتصال"
                style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg,#f3e3b3,#c7a56a 55%,#8a6530)", display: "flex", alignItems: "center", justifyContent: "center", color: "#191510", boxShadow: "0 0 28px rgba(199,165,106,0.7),0 12px 30px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.4)", animation: "lab-pulse-glow 2.4s ease-in-out infinite" }}
              ><Phone size={26} /></motion.a>
            </>
          )}
        </AnimatePresence>
        <button
          aria-label={open ? "إخفاء أزرار التواصل" : "إظهار أزرار التواصل"}
          onClick={() => setOpen((v) => !v)}
          style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(15,15,12,0.85)", backdropFilter: "blur(10px)", border: "1px solid var(--lab-border)", color: "var(--lab-gold-light)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >{open ? <Minus size={18} /> : <Plus size={18} />}</button>
      </div>
    </div>
  );
}
