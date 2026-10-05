import LabGuideView from "@/components/lab/service/LabGuideView";

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="lab-scope">
      <LabGuideView slug={slug} />
    </div>
  );
}
