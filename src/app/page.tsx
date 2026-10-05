"use client";
import LabHeader from "@/components/lab/layout/LabHeader";
import LabFooter from "@/components/lab/layout/LabFooter";
import LabBottomNav from "@/components/lab/layout/LabBottomNav";
import LabFloatingContact from "@/components/lab/layout/LabFloatingContact";
import LabToTop from "@/components/lab/ui/LabToTop";
import { LabHero, ServicesGrid } from "@/components/lab/home/LabHome";
import { SeoContent, AboutSection, WhyUsSection } from "@/components/lab/home/LabOldSections";
import { labHeroCovers } from "@/data/lab/sections.seed";
import { useLabSections } from "@/lib/lab/store";

export default function HomePage() {
  const { sections, loading } = useLabSections();
  const covers = sections.filter((s) => s.active).map((s) => s.cover);
  const heroCovers = covers.length > 0 ? covers : labHeroCovers;

  return (
    <div className="lab-scope">
      <LabHeader />
      <main>
        <LabHero covers={heroCovers} />
        {loading ? (
          <div className="lab-container lab-section"><p className="lab-muted">جارٍ تحميل المختبر...</p></div>
        ) : (
          <>
            <ServicesGrid sections={sections} />
            <SeoContent />
            <AboutSection />
            <WhyUsSection />
          </>
        )}
      </main>
      <LabFooter />
      <LabFloatingContact />
      <LabToTop />
      <LabBottomNav />
    </div>
  );
}
