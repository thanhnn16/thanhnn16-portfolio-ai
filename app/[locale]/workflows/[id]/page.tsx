import { notFound } from "next/navigation";
import Image from "next/image";
import { getWorkflow } from "@/lib/directus/api/workflow";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowLeft, ShoppingCart, Download } from "lucide-react";
import { WorkflowDetail } from "@/components/workflows/workflow-detail";
import { Badge } from "@/components/ui/badge";

interface WorkflowParams {
  id: string;
  locale: string;
}

export async function generateMetadata({ params }: { params: WorkflowParams }) {
  const workflow = await getWorkflow(params.id);
  const t = await getTranslations({ locale: params.locale, namespace: "workflows" });
  
  if (!workflow) {
    return {
      title: t("not_found"),
    };
  }

  return {
    title: `${workflow.name} | ${t("workflow")}`,
    description: workflow.description,
    openGraph: {
      title: `${workflow.name} | ${t("workflow")}`,
      description: workflow.description,
      type: "website",
    },
  } satisfies Metadata;
}

export default async function WorkflowPage({ params }: { params: WorkflowParams }) {
  const workflow = await getWorkflow(params.id);
  const t = await getTranslations({ locale: params.locale, namespace: "workflows" });
  
  if (!workflow) {
    notFound();
  }

  return (
    <article className="container py-10 max-w-4xl mx-auto">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/workflows">{t("workflows")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{workflow.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold">{workflow.name}</h1>
          
          <div className="flex items-center">
            <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
              n8n
            </Badge>
            <span className="ml-4 text-2xl font-bold text-orange-500">${workflow.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
        <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
        <p className="text-lg">{workflow.description}</p>
      </div>
      
      <WorkflowDetail workflow={workflow} />
      
      <div className="flex flex-wrap gap-4 mt-8">
        <Button asChild variant="ghost">
          <Link href="/workflows">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back_to_workflows")}
          </Link>
        </Button>
      </div>
    </article>
  );
}
