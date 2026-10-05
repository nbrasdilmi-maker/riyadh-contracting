import LabServiceView from "@/components/lab/service/LabServiceView";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="lab-scope">
      <LabServiceView slug={slug} />
    </div>
  );
}
