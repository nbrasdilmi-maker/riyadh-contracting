import type { Metadata } from "next";
import LabGuideView from "@/components/lab/service/LabGuideView";
import { labGuides } from "@/data/lab/guides";
import { SITE_URL } from "@/app/sitemap";

export function generateStaticParams() {
  return labGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = labGuides.find((g) => g.slug === slug);
  if (!guide) return { title: "الدليل غير موجود" };
  const url = `${SITE_URL}/guides/${slug}`;
  const description = `${guide.intro[0].slice(0, 150)}...`;
  return {
    title: guide.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description, url, type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="lab-scope">
      <LabGuideView slug={slug} />
    </div>
  );
}
