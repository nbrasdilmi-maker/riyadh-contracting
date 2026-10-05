"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import LabImage from "../ui/LabImage";
import type { LabSection } from "@/data/lab/sections.seed";

export function ServiceCard({ s, index = 0 }: { s: LabSection; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25) }}
      whileHover={{ y: -6 }}
      className="lab-card"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span className="lab-shine" aria-hidden="true" />
      <Link href={`/services/${s.slug}`} aria-label={`فتح قسم ${s.title}`} className="lab-card-media" style={{ display: "block", position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <LabImage src={s.cover} alt={s.title} fill sizes="(max-width:640px) 100vw,(max-width:1100px) 50vw,33vw" />
        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(8,8,6,0.75) 0%,transparent 55%)" }} />
        <span style={{ position: "absolute", top: 10, insetInlineStart: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {s.warranty && <span className="lab-badge lab-badge-gold">✦ ضمان {s.warranty}</span>}
          {!s.active && <span className="lab-badge">غير فعال</span>}
        </span>
        <span style={{ position: "absolute", bottom: 10, insetInlineStart: 10 }}>
          <span className="lab-badge">{s.gallery.length} صورة{s.videos.length > 0 ? ` • فيديو` : ""}</span>
        </span>
      </Link>
      <div style={{ padding: "0.85rem 0.95rem 1rem", display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "3.4em" }}>{s.title}</h3>
        <p className="lab-muted" style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.9, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "3.2em" }}>{s.short}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2, paddingTop: 10, borderTop: "1px solid var(--lab-border-soft)" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, padding: "0.3rem 0.7rem", borderRadius: 999, background: s.priceFrom ? "rgba(199,165,106,0.14)" : "rgba(255,255,255,0.06)", color: s.priceFrom ? "var(--lab-gold-light)" : "var(--lab-muted)", border: "1px solid var(--lab-border-soft)" }}>
            {s.priceFrom ? `${s.priceFrom} ر/م` : "عند المعاينة"}
          </span>
          <Link href={`/services/${s.slug}`} aria-label={`عرض ${s.title}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", fontWeight: 700, color: "var(--lab-gold-light)" }}>
            عرض القسم <span aria-hidden="true" style={{ transition: "transform 0.3s" }}>←</span>
          </Link>
        </div>
        {s.guide && (
          <Link href={s.guide.href} aria-label={`قراءة دليل ${s.title}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "0 0.95rem 1rem", padding: "0.6rem", borderRadius: 12, fontSize: "0.82rem", fontWeight: 700, color: "var(--lab-gold-light)", background: "rgba(199,165,106,0.1)", border: "1px solid var(--lab-border)", boxShadow: "0 0 14px rgba(199,165,106,0.15)" }}>
            <span aria-hidden="true">📖</span> اقرأ الدليل الشامل
          </Link>
        )}
      </div>
    </motion.article>
  );
}
