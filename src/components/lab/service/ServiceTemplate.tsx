"use client";
import { useState } from "react";
import Link from "next/link";
import LabImage from "../ui/LabImage";
import Lightbox from "../ui/Lightbox";
import Reveal from "../ui/Reveal";
import type { LabSection } from "@/data/lab/sections.seed";

/** قالب موحد بفروع شرطية: يعرض Gallery/Videos/Features فقط عند وجود بيانات. */
export default function ServiceTemplate({ section, related }: { section: LabSection; related: LabSection[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [videoIdx, setVideoIdx] = useState<number | null>(null);
  const gallery = showAll ? section.gallery : section.gallery.slice(0, 8);
  const allLightbox = [...section.gallery, ...section.videos];

  return (
    <div>
      <section style={{ position: "relative", minHeight: "58vh", display: "flex", alignItems: "flex-end", overflow: "hidden", borderRadius: "0 0 28px 28px", borderBottom: "1px solid var(--lab-border)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <div className="lab-kenburns" style={{ position: "absolute", inset: 0 }}>
            <LabImage src={section.cover} alt={section.title} fill priority sizes="100vw" />
          </div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#0c0c0a 8%,rgba(12,12,10,0.5) 55%,rgba(0,0,0,0.25))" }} />
        </div>
        <div className="lab-container" style={{ position: "relative", paddingBottom: "1.8rem", width: "100%" }}>
          <Link href="/" style={{ color: "var(--lab-muted)", fontSize: "0.85rem" }}>الرئيسية / الأقسام / {section.title.slice(0, 24)}</Link>
          <h1 className="lab-h2" style={{ marginTop: 8 }}>{section.title}</h1>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            {section.priceFrom ? <span className="lab-badge lab-badge-gold">يبدأ من {section.priceFrom} ر/م</span> : <span className="lab-badge">السعر عند المعاينة</span>}
            {section.warranty ? <span className="lab-badge lab-badge-gold">✦ ضمان {section.warranty}</span> : null}
            {section.duration ? <span className="lab-badge">تنفيذ {section.duration}</span> : null}
            {!section.active && <span className="lab-badge">غير فعال — معاينة إدارية</span>}
          </div>
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-container" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <Reveal>
            {section.description.split("\n\n").map((para, i) => (
              <p key={i} style={{ lineHeight: 2, fontSize: "0.98rem", maxWidth: 820, margin: i === 0 ? 0 : "14px 0 0" }}>{para}</p>
            ))}
          </Reveal>

          {section.subtypes && section.subtypes.length > 0 && (
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--lab-border)" }}>
              <div style={{ background: "#10110f", padding: "1.2rem 1.25rem 0" }}>
                <h2 className="lab-h2" style={{ fontSize: "1.25rem", margin: 0 }}>الأنواع المتوفرة ({section.subtypes.length})</h2>
              </div>
              <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" style={{ display: "block", width: "100%", height: 34, background: "#F3F0E8" }}>
                <path d="M0,0 L1440,0 L1440,26 C1220,52 960,34 720,26 C480,18 240,50 0,28 Z" fill="#10110f" />
              </svg>
              <div className="lab-section-light lab-luminous" style={{ padding: "0.5rem 1.25rem 1.25rem" }}>
              <div style={{ display: "grid", gap: 14, marginTop: 12, gridTemplateColumns: "1fr" }} className="lab-sub-grid">
                <style>{`@media(min-width:700px){.lab-sub-grid{grid-template-columns:1fr 1fr !important}}`}</style>
                {section.subtypes.map((t, i) => (
                  <Reveal key={t.id} delay={Math.min(i * 0.04, 0.2)}>
                    <article className="lab-card" style={{ height: "100%" }}>
                      <span className="lab-shine" aria-hidden="true" />
                      <div className="lab-card-media" style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                        <LabImage src={t.src} alt={t.name} fill sizes="(max-width:700px) 100vw,50vw" />
                      </div>
                      <div style={{ padding: "0.9rem 1rem 1.1rem" }}>
                        <h3 style={{ margin: "0 0 6px", fontSize: "1rem", lineHeight: 1.7 }}>{t.name}</h3>
                        <p className="lab-muted" style={{ margin: 0, fontSize: "0.86rem", lineHeight: 1.9 }}>{t.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
              </div>
            </div>
          )}

          {section.guide && (
            <Reveal>
              <div className="lab-card" style={{ padding: "1.4rem", textAlign: "center", background: "linear-gradient(180deg,rgba(199,165,106,0.12),rgba(255,255,255,0.02))" }}>
                <span className="lab-shine" aria-hidden="true" />
                <h3 style={{ margin: "0 0 6px", fontSize: "1.05rem" }}>{section.guide.title}</h3>
                <p className="lab-muted" style={{ margin: "0 0 12px", fontSize: "0.88rem", lineHeight: 1.9 }}>{section.guide.desc}</p>
                <Link href={section.guide.href} className="lab-btn lab-btn-primary">{section.guide.cta}</Link>
              </div>
            </Reveal>
          )}

          {section.features.length > 0 && (
            <div>
              <h2 className="lab-h2" style={{ fontSize: "1.25rem" }}>المميزات</h2>
              <ul style={{ display: "grid", gap: 10, marginTop: 12, padding: 0, listStyle: "none", gridTemplateColumns: "1fr" }}>
                {section.features.map((f) => (
                  <li key={f} className="lab-card" style={{ padding: "0.8rem 1rem", fontSize: "0.92rem" }}><span className="lab-shine" aria-hidden="true" /><span style={{ color: "var(--lab-gold-light)" }}>✦ </span>{f}</li>
                ))}
              </ul>
              <style>{`@media(min-width:800px){.lab-feat-grid{grid-template-columns:1fr 1fr !important}}`}</style>
            </div>
          )}

          {section.gallery.length > 0 && (
            <div>
              <h2 className="lab-h2" style={{ fontSize: "1.25rem" }}>معرض الصور ({section.gallery.length})</h2>
              {section.gallery.length === 1 && <p className="lab-muted" style={{ fontSize: "0.88rem" }}>قسم بصورة واحدة — التصميم يعرض Hero فقط بدون شبكة مزدحمة.</p>}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
                {gallery.map((m, i) => (
                  <button key={m.id} aria-label={`فتح ${m.caption}`} onClick={() => setIdx(i)} className="lab-card" style={{ position: "relative", aspectRatio: "4/3", padding: 0, borderRadius: 16 }}>
                    <span className="lab-shine" aria-hidden="true" />
                    <LabImage src={m.src} alt={m.caption ?? ""} fill sizes="(max-width:800px) 50vw,33vw" objectPosition={m.crop} />
                    <span style={{ position: "absolute", insetInline: 8, bottom: 8, textAlign: "start" }}><span className="lab-badge" style={{ fontSize: "0.7rem" }}>{m.caption}</span></span>
                  </button>
                ))}
              </div>
              {section.gallery.length > 8 && (
                <button className="lab-btn lab-btn-ghost" style={{ marginTop: 12 }} onClick={() => setShowAll((v) => !v)}>{showAll ? "عرض أقل" : `عرض كل الصور (${section.gallery.length})`}</button>
              )}
            </div>
          )}

          {section.videos.length > 0 && (
            <div>
              <h2 className="lab-h2" style={{ fontSize: "1.4rem" }}>الفيديوهات</h2>
              <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
                {section.videos.map((v, i) => (
                  <button key={v.id} onClick={() => setVideoIdx(section.gallery.length + i)} aria-label={`تشغيل ${v.caption}`} style={{ position: "relative", aspectRatio: "16/9", borderRadius: "var(--lab-radius-card)", overflow: "hidden", border: "1px solid var(--lab-border)", background: "#000", padding: 0 }}>
                    <LabImage src={section.cover} alt={v.caption ?? "فيديو"} fill />
                    <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--lab-gold)", color: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }} aria-hidden="true">▶</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="lab-card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <h3 style={{ marginTop: 0 }}>اطلب معاينة مجانية الآن</h3>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:0551215610" className="lab-btn lab-btn-primary">اتصال</a>
              <a href="https://wa.me/966551215610" className="lab-btn lab-btn-ghost">واتساب</a>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="lab-h2" style={{ fontSize: "1.4rem" }}>أقسام ذات صلة</h2>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/lab/services/${r.slug}`} className="lab-badge" style={{ padding: "0.6rem 1rem" }}>{r.title.slice(0, 20)}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Lightbox media={allLightbox} index={idx ?? videoIdx} onClose={() => { setIdx(null); setVideoIdx(null); }} onNav={(i) => { if (i < section.gallery.length) { setIdx(i); setVideoIdx(null); } else { setVideoIdx(i); setIdx(null); } }} />
    </div>
  );
}
