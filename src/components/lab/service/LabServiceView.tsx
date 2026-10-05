"use client";
import LabHeader from "@/components/lab/layout/LabHeader";
import LabFooter from "@/components/lab/layout/LabFooter";
import LabBottomNav from "@/components/lab/layout/LabBottomNav";
import LabFloatingContact from "@/components/lab/layout/LabFloatingContact";
import LabToTop from "@/components/lab/ui/LabToTop";
import ServiceTemplate from "@/components/lab/service/ServiceTemplate";
import { labSectionsSeed } from "@/data/lab/sections.seed";
import { useLabSections } from "@/lib/lab/store";

export default function LabServiceView({ slug }: { slug: string }) {
  const { sections, loading } = useLabSections();
  const source = sections.length > 0 ? sections : labSectionsSeed;
  const section = source.find((s) => s.slug === slug);
  if (loading) return <main className="lab-container lab-section"><p className="lab-muted">جارٍ فتح القسم...</p></main>;
  if (!section) return (<><LabHeader /><main className="lab-container lab-section"><h1 className="lab-h2">القسم غير موجود</h1><p className="lab-muted">Slug: {slug} — ربما حُذف من اللوحة. أعد ضبط المختبر.</p></main><LabFooter /><LabFloatingContact /><LabToTop /><LabBottomNav /></>);
  const related = source.filter((s) => s.slug !== slug && s.active).slice(0, 4);
  return (<><LabHeader /><main><ServiceTemplate section={section} related={related} /></main><LabFooter /><LabFloatingContact /><LabToTop /><LabBottomNav /></>);
}
