import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject } from "@/lib/directus"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLink } from "lucide-react"
import { Link } from "@/i18n/navigation"

export async function generateMetadata({ params }: {
  params: { slug: string, locale: string }
}): Promise<Metadata> {
  const project = await getProject(params.slug, params.locale)
  
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }
  
  return {
    title: `${project.title} - Nông Nguyễn Thành`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `https://thanhnn16.io.vn/projects/${project.slug}`,
      images: project.cover_image 
        ? [{ url: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${project.cover_image}` }] 
        : [],
    },
  }
}

export default async function ProjectPage({ params }: { 
  params: { slug: string, locale: string } 
}) {
  const project = await getProject(params.slug, params.locale)
  const t = await getTranslations({ locale: params.locale, namespace: "projects" })
  
  if (!project) {
    notFound()
  }

  return (
    <article className="container py-10 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        
        {project.cover_image && (
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}/assets/${project.cover_image}`}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
      
      <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
        {project.description}
      </div>
      
      {project.tech_stack && project.tech_stack.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{t("tech_stack")}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech, index) => (
              <span 
                key={index} 
                className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-4">
        {project.github_link && (
          <Button asChild variant="outline">
            <a 
              href={project.github_link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              {t("view_code")}
            </a>
          </Button>
        )}
        
        {project.demo_link && (
          <Button asChild>
            <a 
              href={project.demo_link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("live_demo")}
            </a>
          </Button>
        )}
        
        <Button asChild variant="ghost">
          <Link href="/projects">
            {t("back_to_projects")}
          </Link>
        </Button>
      </div>
    </article>
  )
}