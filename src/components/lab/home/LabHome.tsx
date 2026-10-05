"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import LabImage from "../ui/LabImage";
import Lightbox from "../ui/Lightbox";
import Reveal from "../ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import type { LabSection } from "@/data/lab/sections.seed";

const heroParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function LabHero({ covers }: { covers: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (covers.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % covers.length), 6000);
    return () => clearInterval(t);
  }, [covers.length]);
  useEffect(() => {
    setI(0);
  }, [covers.length]);
  const reduce = useReducedMotion();
  return (
    <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "flex-end", overflow: "hidden", borderRadius: "0 0 28px 28px", borderBottom: "1px solid var(--lab-border)" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        {covers.map((c, k) => (
          <div key={c} style={{ position: "absolute", inset: 0, opacity: k === i ? 1 : 0, transition: "opacity 1.2s ease" }}>
            <div className="lab-kenburns" style={{ position: "absolute", inset: 0 }}>
              <LabImage src={c} alt="مشروع مقاولات فاخر" fill priority={k === 0} sizes="100vw" />
            </div>
          </div>
        ))}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#0c0c0a 6%,rgba(12,12,10,0.55) 50%,rgba(0,0,0,0.3)),radial-gradient(600px 300px at 80% 20%,rgba(199,165,106,0.2),transparent 60%)" }} />
      </div>
      <div className="lab-container" style={{ position: "relative", paddingBottom: "2.5rem", width: "100%" }}>
        <style>{`@media(max-width:560px){.lab-hero-cta{flex-direction:column !important;align-items:stretch !important}.lab-hero-cta a{justify-content:center}}
        @keyframes lab-ticker-up { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .lab-ticker { overflow: hidden; -webkit-mask-image: linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent); mask-image: linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent); }
        .lab-ticker-track { display: flex; flex-direction: column; gap: 14px; animation: lab-ticker-up 32s linear infinite; }
        .lab-ticker:hover .lab-ticker-track, .lab-ticker:focus-within .lab-ticker-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .lab-ticker-track { animation: none; } }`}</style>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontFamily: "var(--lab-font-head)", fontSize: "clamp(1.5rem,5.4vw,3rem)", lineHeight: 1.7, fontWeight: 700, margin: "0 0 12px", textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}>شبكة التميز للمقاولات العامه - الرياض</h1>
          <div className="lab-ticker" role="marquee" aria-label="نص تعريفي متحرك" style={{ height: "clamp(220px,36vh,300px)", maxWidth: 720 }}>
            <div className="lab-ticker-track">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <p style={{ lineHeight: 2.1, fontSize: "clamp(0.88rem,2.6vw,0.98rem)", margin: 0 }}>تنفيذ كافة أنواع المظلات، السواتر البرجولات، الخشب البلاستيكي WPC، وتنسيق الحدائق والهياكل الإنشائية مع ضمان ممتد على كافة الأعمال.</p>
                  <p style={{ lineHeight: 2.1, fontSize: "clamp(0.88rem,2.6vw,0.98rem)", margin: 0 }}>متخصصون في تصميم وتأسيس المجالس الزجاجية المودرن، وبناء بيوت الشعر والخيام الملكية بأفخم التجهيزات والديكورات الداخلية والخارجية.</p>
                  <p style={{ lineHeight: 2.1, fontSize: "clamp(0.88rem,2.6vw,0.98rem)", margin: 0 }}>نقدم خدمات متكاملة في أحدث أعمال "الدهانات" الخارجية والبروفايل، وتركيب "الديكورات" المعمارية وشاشات الليزر للواجهات بأعلى معايير الاحترافية.</p>
                  <p style={{ color: "var(--lab-gold-light)", fontWeight: 700, margin: 0, textShadow: "0 0 20px rgba(199,165,106,0.5)" }}>عروض استثنائية كافه</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div variants={reduce ? undefined : heroChild} className="lab-hero-cta" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <a href="tel:0551215610" className="lab-btn lab-btn-primary">اتصل الان</a>
            <a href="https://wa.me/966551215610" className="lab-btn lab-btn-ghost">تواصل واتساب</a>
          </motion.div>
          {covers.length > 1 && (
            <motion.div variants={reduce ? undefined : heroChild} style={{ display: "flex", gap: 6, marginTop: 16 }} role="tablist" aria-label="صور الهيرو">
              {covers.map((c, k) => (
                <button key={c} role="tab" aria-selected={k === i} aria-label={`صورة ${k + 1}`} onClick={() => setI(k)} style={{ width: k === i ? 28 : 8, height: 8, borderRadius: 99, background: k === i ? "var(--lab-gold)" : "rgba(255,255,255,0.3)", border: "none", transition: "width 0.4s", boxShadow: k === i ? "0 0 12px rgba(199,165,106,0.8)" : "none" }} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesGrid({ sections }: { sections: LabSection[] }) {
  const [q, setQ] = useState("");
  const visible = sections.filter((s) => s.active && (s.title + s.short).includes(q));
  return (
    <section id="sections" className="lab-section">
      <div className="lab-container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <h2 className="lab-h2" style={{ margin: 0 }}>خدماتنا</h2>
            <div aria-hidden="true" style={{ color: "var(--lab-gold)", letterSpacing: 5, marginTop: 6 }}>♦♦♦♦♦♦♦♦♦♦♦</div>
            <p className="lab-muted" style={{ fontSize: "0.9rem", maxWidth: 760, marginInline: "auto", lineHeight: 2 }}>نقدم خدمات متكاملة بجودة عالية وتنفيذ احترافي لكافه مجالات اعمالنا، مع تصاميم عصرية تناسب مختلف المساحات وخامات متينة تتحمل الظروف المناخية. نحرص على أدق التفاصيل لنمنحك حلولًا تجمع بين المتانة والجمال بأفضل قيمة.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
            <input aria-label="بحث في الأقسام" className="lab-input" placeholder="ابحث: شبوك، مظلات..." value={q} onChange={(e) => setQ(e.target.value)} style={{ maxWidth: 300 }} />
          </div>
        </Reveal>
        {visible.length === 0 ? (
          <div className="lab-card" style={{ padding: "2rem", textAlign: "center", marginTop: 18 }}>
            <p>لا توجد أقسام مطابقة — جرّب كلمة أخرى.</p>
          </div>
        ) : (
          <div className="lab-grid-cards" style={{ marginTop: 18 }}>
            {visible.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}

export function StatsBand() {
  const stats = [
    { n: "+350", l: "مشروع منفذ" },
    { n: "12", l: "سنة خبرة" },
    { n: "10", l: "سنوات ضمان" },
    { n: "48h", l: "سرعة تنفيذ" },
  ];
  return (
    <section style={{ paddingTop: "1.25rem" }}>
      <div className="lab-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <style>{`@media(min-width:900px){.lab-stats-row{grid-template-columns:repeat(4,1fr) !important}}`}</style>
        <div className="lab-stats-row" style={{ display: "contents" }}>
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="lab-card" style={{ padding: "1rem", textAlign: "center", background: "linear-gradient(180deg,rgba(199,165,106,0.1),rgba(255,255,255,0.02))" }}>
                <span className="lab-shine" aria-hidden="true" />
                <div className="lab-gradient-text" style={{ fontSize: "1.6rem", fontWeight: 800 }}>{s.n}</div>
                <div className="lab-muted" style={{ fontSize: "0.82rem" }}>{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview({ sections }: { sections: LabSection[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const all = sections.flatMap((s) => s.gallery).slice(0, 6);
  return (
    <section id="work" className="lab-section" style={{ paddingTop: "1rem" }}>
      <div className="lab-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 8 }}>
          <h2 className="lab-h2" style={{ margin: 0 }}>من <span className="lab-gradient-text">أعمالنا</span></h2>
          <span className="lab-muted" style={{ fontSize: "0.85rem" }}>اضغط أي صورة للعرض المكبر</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 }}>
          <style>{`@media(min-width:900px){.lab-gal3{grid-template-columns:repeat(3,1fr) !important}}`}</style>
          <div className="lab-gal3" style={{ display: "contents" }}>
            {all.map((m, i) => (
              <button key={m.id} aria-label={`فتح ${m.caption}`} onClick={() => setIdx(i)} className="lab-card" style={{ position: "relative", aspectRatio: "4/3", padding: 0, borderRadius: 16 }}>
                <span className="lab-shine" aria-hidden="true" />
                <LabImage src={m.src} alt={m.caption ?? ""} fill sizes="(max-width:900px) 50vw,33vw" objectPosition={m.crop} />
                <span style={{ position: "absolute", insetInline: 8, bottom: 8, textAlign: "start" }}><span className="lab-badge">{m.caption}</span></span>
              </button>
            ))}
          </div>
        </div>
        <Lightbox media={all} index={idx} onClose={() => setIdx(null)} onNav={(i) => setIdx(i)} />
      </div>
    </section>
  );
}
