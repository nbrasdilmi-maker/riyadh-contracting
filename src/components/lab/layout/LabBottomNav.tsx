"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Info, Sparkles } from "lucide-react";

/** قائمة سفلية للجوال والتابلت والآيباد — تظهر حتى 1024px */
const tabs = [
  { href: "/", label: "الرئيسية", Icon: Home },
  { href: "/#sections", label: "الأقسام", Icon: LayoutGrid },
  { href: "/#about", label: "من نحن", Icon: Info },
  { href: "/#why", label: "لماذا نحن", Icon: Sparkles },
];

export default function LabBottomNav() {
  const path = usePathname();
  return (
    <nav aria-label="التنقل السفلي" style={{ position: "fixed", bottom: 0, insetInline: 0, zIndex: 60, padding: "8px 10px calc(8px + env(safe-area-inset-bottom))", background: "rgba(12,12,10,0.85)", backdropFilter: "blur(16px)", borderTop: "1px solid var(--lab-border)" }}>
      <style>{`@media(min-width:1024px){.lab-bottomnav{display:none !important}}`}</style>
      <div className="lab-bottomnav" style={{ display: "flex", alignItems: "center", gap: 4, maxWidth: 640, marginInline: "auto" }}>
        {tabs.map((t) => (
          <Link key={t.label} href={t.href} aria-current={path === t.href ? "page" : undefined} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "8px 4px", borderRadius: 12, color: path === t.href ? "var(--lab-gold-light)" : "var(--lab-muted)", background: path === t.href ? "rgba(199,165,106,0.14)" : "transparent", border: path === t.href ? "1px solid var(--lab-border)" : "1px solid transparent", fontSize: "0.72rem", minHeight: 52, justifyContent: "center" }}>
            <t.Icon size={20} style={path === t.href ? { filter: "drop-shadow(0 0 8px rgba(199,165,106,0.8))" } : undefined} aria-hidden="true" />{t.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
