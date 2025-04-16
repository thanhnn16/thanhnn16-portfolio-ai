import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { SkillsHeader } from "@/components/skills/skills-header"
import { SkillsGrid } from "@/components/skills/skills-grid"

export const metadata: Metadata = {
  title: "Skills | Nông Nguyễn Thanh",
  description:
    "Explore my technical skills in AI, automation, web and mobile development, and more. Specializing in AI integration, workflow automation, and software development.",
  openGraph: {
    title: "Skills | Nông Nguyễn Thanh",
    description:
      "Explore my technical skills in AI, automation, web and mobile development, and more. Specializing in AI integration, workflow automation, and software development.",
    url: "https://thanhnn16.vercel.app/skills",
    type: "website",
  },
}

export default function SkillsPage() {
  return (
    <MainLayout>
      <SkillsHeader />
      <SkillsGrid />
    </MainLayout>
  )
}
