import { Metadata } from "next"
import { getProjects } from "@/lib/directus"
import { getTranslations } from "next-intl/server"
import { ProjectsHeader } from "@/components/projects/projects-header"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectCard } from "@/components/projects/project-card"

export const metadata: Metadata = {
  title: "Projects - Nông Nguyễn Thành",
  description: "Explore my portfolio of projects in AI, automation, and development.",
}

export default async function ProjectsPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "projects" })
  const locale = params.locale
  const projects = await getProjects(locale)

  return (
    <div className="container py-10">
      <ProjectsHeader 
        title={t("title")} 
        description={t("description")}
      />
      
      <ProjectsGrid>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                title: project.title,
                description: project.description,
                role: project.role || t("default_role"),
                technologies: project.tech_stack || [],
                category: project.category || "Other",
                mainImage: project.cover_image 
                  ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}/assets/${project.cover_image}` 
                  : "/placeholder.jpg",
                slug: project.slug,
                url: `/${locale}/projects/${project.slug}`,
                githubLink: project.github_link,
                demoLink: project.demo_link
              }}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-zinc-400">{t("no_projects")}</p>
        )}
      </ProjectsGrid>
    </div>
  )
}
