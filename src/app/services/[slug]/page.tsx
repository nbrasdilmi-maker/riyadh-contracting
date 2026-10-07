import type { Metadata } from "next";
import LabServiceView from "@/components/lab/service/LabServiceView";
import { labSectionsSeed } from "@/data/lab/sections.seed";
import { SITE_URL } from "@/app/sitemap";

export function generateStaticParams() {
  return labSectionsSeed
    .filter((s) => s.active)
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = labSectionsSeed.find((s) => s.slug === slug);
  if (!section) return { title: "القسم غير موجود" };
  const url = `${SITE_URL}/services/${slug}`;
  const description = `${section.short} ${section.warranty ? `بضمان ${section.warranty}.` : ""} اتصل 0551215610 لمعاينة مجانية في الرياض.`;
  return {
    title: section.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: section.title,
      description,
      url,
      type: "article",
      images: [{ url: `${SITE_URL}${section.cover}`, alt: section.title }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="lab-scope">
      <LabServiceView slug={slug} />
    </div>
  );
}
