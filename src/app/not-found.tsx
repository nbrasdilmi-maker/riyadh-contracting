import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem 1.25rem",
        background:
          "radial-gradient(900px 420px at 85% -5%, rgba(199,165,106,0.14), transparent 60%), #10110f",
        color: "#f3f0e8",
        fontFamily: "'Tajawal','IBM Plex Sans Arabic',Arial,sans-serif",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <div
          aria-hidden="true"
          style={{
            fontSize: "clamp(4rem,18vw,8rem)",
            fontWeight: 800,
            lineHeight: 1,
            background: "linear-gradient(135deg,#f3e3b3,#c7a56a 50%,#8a6530)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 26px rgba(199,165,106,0.35))",
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: "1.5rem", margin: "14px 0 8px" }}>الصفحة غير موجودة</h1>
        <p style={{ color: "#a8a29e", lineHeight: 2, margin: "0 0 22px" }}>
          يبدو أن الرابط الذي تحاول فتحه غير صحيح أو تم نقل الصفحة إلى مكان آخر.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 52,
              padding: "0.8rem 1.6rem",
              borderRadius: 14,
              fontWeight: 700,
              background: "linear-gradient(135deg,#f3e3b3,#c7a56a 55%,#8a6530)",
              color: "#191510",
              boxShadow: "0 6px 24px rgba(199,165,106,0.35)",
            }}
          >
            → العودة للرئيسية
          </Link>
          <a
            href="tel:0551215610"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 52,
              padding: "0.8rem 1.6rem",
              borderRadius: 14,
              fontWeight: 700,
              color: "#f3f0e8",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            اتصل بنا
          </a>
        </div>
      </div>
    </main>
  );
}
