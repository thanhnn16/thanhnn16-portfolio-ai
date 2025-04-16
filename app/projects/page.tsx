import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { ProjectsHeader } from "@/components/projects/projects-header"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects | Nông Nguyễn Thanh",
  description:
    "Explore my portfolio of AI automation, mobile, and web development projects. Featuring work in AI integration, workflow automation, Flutter, and more.",
  openGraph: {
    title: "Projects | Nông Nguyễn Thanh",
    description:
      "Explore my portfolio of AI automation, mobile, and web development projects. Featuring work in AI integration, workflow automation, Flutter, and more.",
    url: "https://thanhnn16.vercel.app/projects",
    type: "website",
  },
}

export default function ProjectsPage() {
  return (
    <MainLayout>
      <ProjectsHeader />
      <ProjectsGrid />
    </MainLayout>
  )
}
