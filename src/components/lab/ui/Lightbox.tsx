"use client";
import { AnimatePresence, motion } from "framer-motion";
import LabImage from "./LabImage";
import type { LabMedia } from "@/data/lab/sections.seed";

export default function Lightbox({ media, index, onClose, onNav }: { media: LabMedia[]; index: number | null; onClose: () => void; onNav: (i: number) => void }) {
  const current = index !== null ? media[index] : null;
  return (
    <AnimatePresence>
      {current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="معرض الصور"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          onClick={onClose}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(960px,100%)", aspectRatio: "16/10", background: "#000", borderRadius: 18, overflow: "hidden" }}>
            {current.type === "image" ? (
              <LabImage src={current.src} alt={current.caption ?? "صورة"} fill objectPosition={current.crop ?? "center"} />
            ) : (
              <iframe src={current.src} title={current.caption ?? "فيديو"} style={{ width: "100%", height: "100%", border: 0 }} allowFullScreen />
            )}
            <div style={{ position: "absolute", bottom: 12, insetInline: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.85rem", color: "#f4f1eb" }}>{current.caption} — {(index ?? 0) + 1} / {media.length}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button aria-label="السابق" className="lab-btn lab-btn-ghost" style={{ minHeight: 44, padding: "0.4rem 0.9rem" }} onClick={() => onNav(((index ?? 0) - 1 + media.length) % media.length)}>→</button>
                <button aria-label="التالي" className="lab-btn lab-btn-ghost" style={{ minHeight: 44, padding: "0.4rem 0.9rem" }} onClick={() => onNav(((index ?? 0) + 1) % media.length)}>←</button>
                <button aria-label="إغلاق" className="lab-btn lab-btn-primary" style={{ minHeight: 44, padding: "0.4rem 0.9rem" }} onClick={onClose}>✕</button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
