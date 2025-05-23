import { getWorkflows } from "@/lib/directus/api/workflow";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { WorkflowsHeader } from "@/components/workflows/workflows-header";
import { WorkflowsGrid } from "@/components/workflows/workflows-grid";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "workflows" });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      url: "https://thanhnn16.vercel.app/workflows",
      type: "website",
    },
  } satisfies Metadata;
}

export default async function WorkflowsPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "workflows" });
  const locale = params.locale;
  const workflows = await getWorkflows(true);

  return (
    <div className="container py-10">
      <WorkflowsHeader 
        title={t("title")} 
        description={t("description")}
      />
      
      <WorkflowsGrid workflows={workflows} locale={locale} />
    </div>
  );
}
