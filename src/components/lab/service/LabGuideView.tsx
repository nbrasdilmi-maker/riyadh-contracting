"use client";
import Link from "next/link";
import LabHeader from "@/components/lab/layout/LabHeader";
import LabFooter from "@/components/lab/layout/LabFooter";
import LabBottomNav from "@/components/lab/layout/LabBottomNav";
import LabFloatingContact from "@/components/lab/layout/LabFloatingContact";
import Reveal from "@/components/lab/ui/Reveal";
import { labGuides } from "@/data/lab/guides";

export default function LabGuideView({ slug }: { slug: string }) {
  const guide = labGuides.find((g) => g.slug === slug);
  if (!guide) {
    return (<><LabHeader /><main className="lab-container lab-section"><h1 className="lab-h2">الدليل غير موجود</h1></main><LabFooter /><LabFloatingContact /><LabBottomNav /></>);
  }
  return (
    <>
      <LabHeader />
      <main>
        <section className="lab-section">
          <div className="lab-container" style={{ maxWidth: 900 }}>
            <Link href="/" style={{ color: "var(--lab-muted)", fontSize: "0.85rem" }}>الرئيسية / الأدلة / {guide.title.slice(0, 30)}</Link>
            <Reveal>
              <h1 className="lab-h2" style={{ marginTop: 10 }}>{guide.title}</h1>
              {guide.intro.map((p, i) => (
                <p key={i} style={{ lineHeight: 2, fontSize: "0.95rem" }}>{p}</p>
              ))}
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
              {guide.blocks.map((b) => (
                <Reveal key={b.h}>
                  <article className="lab-card" style={{ padding: "1.1rem 1.2rem" }}>
                    <span className="lab-shine" aria-hidden="true" />
                    {b.h && <h2 style={{ margin: "0 0 8px", fontSize: "1.05rem", color: "var(--lab-gold-light)" }}>{b.h}</h2>}
                    {b.paras.map((p, i) => (
                      <p key={i} style={{ margin: i === 0 ? 0 : "10px 0 0", lineHeight: 2, fontSize: "0.88rem" }}>{p}</p>
                    ))}
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="lab-card" style={{ padding: "1.6rem", textAlign: "center", marginTop: 20 }}>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="tel:0551215610" className="lab-btn lab-btn-primary">اتصل الآن</a>
                <a href="https://wa.me/966551215610" className="lab-btn lab-btn-ghost">واتساب</a>
                <Link href={guide.backHref} className="lab-btn lab-btn-ghost">{guide.backLabel} ←</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LabFooter />
      <LabFloatingContact />
      <LabBottomNav />
    </>
  );
}
