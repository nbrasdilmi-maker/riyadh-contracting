/**
 * Design Lab — التوكنز المركزية الوحيدة للهوية.
 * لتغيير الهوية كاملة عدّل هذا الملف + lab.css فقط.
 * لا تستخدم ألوان hard-coded في المكونات.
 */
export const labTheme = {
  color: {
    base: "#10110f", // فحمي — الخلفيات الأساسية
    surface: "#161614",
    surface2: "#1e1e1a",
    ivory: "#f3f0e8", // عاجي — الأقسام الفاتحة
    gold: "#c7a56a", // ذهبي — التفاصيل والعناصر البارزة
    goldLight: "#d8bd8a",
    muted: "#a8a29e",
    border: "rgba(255,255,255,0.10)",
    whatsapp: "#25d366",
    danger: "#e5484d",
  },
  font: {
    head: "'IBM Plex Sans Arabic','Tajawal',Arial,sans-serif",
    body: "'Tajawal','IBM Plex Sans Arabic',Arial,sans-serif",
  },
  size: {
    h1: "clamp(2.6rem,11vw,6rem)",
    h2: "clamp(1.6rem,5vw,2.5rem)",
    h3: "1.15rem",
    body: "1rem",
    small: "0.85rem",
  },
  radius: {
    card: "18px",
    btn: "12px",
    badge: "999px",
  },
  shadow: {
    card: "0 20px 50px rgba(0,0,0,0.35)",
    header: "0 10px 30px rgba(0,0,0,0.35)",
  },
  spacing: {
    sectionMobile: "4rem",
    sectionDesktop: "6.5rem",
    container: "1280px",
  },
  header: {
    height: "72px",
  },
} as const;

export type LabTheme = typeof labTheme;
