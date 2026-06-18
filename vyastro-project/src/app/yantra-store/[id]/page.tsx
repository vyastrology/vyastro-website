import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getYantraById, YANTRAS } from "@/lib/yantras";
import { YantraDetail } from "@/components/yantra/YantraDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return YANTRAS.map((y) => ({ id: y.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const yantra = getYantraById(id);
  if (!yantra) return { title: "Yantra Not Found" };

  return {
    title: `${yantra.name} — ${yantra.purpose}`,
    description: yantra.shortDesc,
    openGraph: {
      title: `${yantra.name} | VyAstro Yantra Store`,
      description: yantra.shortDesc,
      url: `https://vyastro.com/yantra-store/${yantra.id}`,
    },
  };
}

export default async function YantraDetailPage({ params }: Props) {
  const { id } = await params;
  const yantra = getYantraById(id);
  if (!yantra) notFound();
  return <YantraDetail yantra={yantra} />;
}
