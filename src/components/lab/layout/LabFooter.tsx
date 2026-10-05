import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import LabImage from "../ui/LabImage";

function WhiteLogo({ alt, width = 300 }: { alt: string; width?: number }) {
  return (
    <span
      aria-label={alt}
      role="img"
      style={{
        position: "relative",
        display: "block",
        width: `min(${width}px,72vw)`,
        height: 72,
        marginInline: "auto",
        filter:
          "brightness(0) invert(1) drop-shadow(0 0 18px rgba(199,165,106,0.45))",
      }}
    >
      <LabImage
        src="/lab/logo-footer.png"
        alt={alt}
        fill
        fit="contain"
        sizes="(max-width:640px) 72vw,300px"
      />
    </span>
  );
}

/** فوتر أفقي بأربعة أقسام — الشعار بنسخة بيضاء فاخرة بدون شرائط بيضاء */
export default function LabFooter() {
  return (
    <footer
      style={{
        marginTop: "1rem",
        borderTop: "1px solid var(--lab-border)",
        background:
          "linear-gradient(180deg,rgba(199,165,106,0.08),transparent 30%)",
        paddingBottom: "7.5rem",
      }}
    >
      <div className="lab-container" style={{ paddingTop: "1.8rem" }}>
        <div
          className="lab-foot-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
        >
          <style>{`@media(min-width:800px){.lab-foot-grid{grid-template-columns:1.15fr 0.85fr 0.9fr 1.1fr !important}}`}</style>
          {/* القسم 1: الشعار */}
          <div>
            <span
              style={{
                position: "relative",
                display: "block",
                width: "min(210px,100%)",
                height: 76,
                filter:
                  "brightness(0) invert(1) drop-shadow(0 0 14px rgba(199,165,106,0.4))",
              }}
            >
              <LabImage
                src="/lab/logo-footer.png"
                alt="شعار شبكة التميز للمقاولات"
                fill
                fit="contain"
                sizes="(max-width:640px) 50vw,210px"
                objectPosition="right center"
              />
            </span>
            <p
              className="lab-muted"
              style={{ fontSize: "0.9rem", lineHeight: 1.9, marginTop: 8 }}
            >
              مظلات • سواتر • شبوك • برجولات.
            </p>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <a
                href="tel:0551215610"
                className="lab-btn lab-btn-primary"
                style={{
                  minHeight: 40,
                  fontSize: "0.8rem",
                  padding: "0.4rem 0.9rem",
                }}
              >
                <Phone size={15} /> اتصال
              </a>
              <a
                href="https://wa.me/966551215610"
                className="lab-btn lab-btn-ghost"
                style={{
                  minHeight: 40,
                  fontSize: "0.8rem",
                  padding: "0.4rem 0.9rem",
                }}
              >
                <MessageCircle size={15} /> واتساب
              </a>
            </div>
          </div>
          {/* القسم 2: روابط سريعة */}
          <nav aria-label="روابط سريعة">
            <h4
              style={{
                margin: "0 0 8px",
                fontSize: "0.95rem",
                color: "var(--lab-gold-light)",
              }}
            >
              روابط سريعة
            </h4>
            {[
              ["الرئيسية", "/"],
              ["الأقسام", "/#sections"],
              ["أعمالنا", "/#work"],
              ["لماذا نحن", "/#why"],
            ].map(([l, h]) => (
              <div key={h + l}>
                <Link
                  href={h}
                  style={{
                    color: "var(--lab-muted)",
                    fontSize: "0.92rem",
                    lineHeight: 2.1,
                  }}
                >
                  ‹ {l}
                </Link>
              </div>
            ))}
          </nav>
          {/* القسم 3: أقسام شائعة */}
          <nav aria-label="أقسام شائعة">
            <h4
              style={{
                margin: "0 0 8px",
                fontSize: "0.95rem",
                color: "var(--lab-gold-light)",
              }}
            >
              أقسام شائعة
            </h4>
            {[
              ["الشبوك", "shabak"],
              ["المظلات", "mazalat"],
              ["السواتر", "sawater"],
              ["البرجولات", "pergolas"],
            ].map(([l, s]) => (
              <div key={s}>
                <Link
                  href={`/services/${s}`}
                  style={{
                    color: "var(--lab-muted)",
                    fontSize: "0.92rem",
                    lineHeight: 2.1,
                  }}
                >
                  ‹ {l}
                </Link>
              </div>
            ))}
          </nav>
          {/* القسم 4: تواصل */}
          <div>
            <h4
              style={{
                margin: "0 0 8px",
                fontSize: "0.95rem",
                color: "var(--lab-gold-light)",
              }}
            >
              تواصل
            </h4>
            <p
              className="lab-muted"
              style={{ fontSize: "0.92rem", lineHeight: 2, margin: 0 }}
            >
              الرياض — معاينة مجانية
              <br />
              يومياً 8ص — 10م
              <br />
              <span dir="ltr">0551215610</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="lab-container"
        style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: "1px solid var(--lab-border-soft)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 6,
        }}
      >
        <small className="lab-muted" style={{ fontSize: "0.82rem" }}>
          © شبكة التميز للمقاولات العامة — الرياض • جميع الحقوق محفوظة
        </small>
        <small style={{ fontSize: "0.84rem" }}>
          <span className="lab-muted">تطوير </span>
          <a
            href="https://wa.me/967776668662"
            aria-label="محادثة واتساب مع المطور"
            style={{ color: "var(--lab-gold-light)", fontWeight: 700 }}
          >
            build.x
          </a>
        </small>
      </div>
    </footer>
  );
}
