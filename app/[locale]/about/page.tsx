import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { AboutHero } from "@/components/about/about-hero"
import { AboutContent } from "@/components/about/about-content"
import { AboutEducation } from "@/components/about/about-education"
import { AboutAwards } from "@/components/about/about-awards"

export const metadata: Metadata = {
  title: "About Me | Nông Nguyễn Thành",
  description:
    "Learn more about Nông Nguyễn Thành, an AI Application & Workflow Automation Specialist with expertise in AI integration, automation, and software development.",
  openGraph: {
    title: "About Me | Nông Nguyễn Thành",
    description:
      "Learn more about Nông Nguyễn Thành, an AI Application & Workflow Automation Specialist with expertise in AI integration, automation, and software development.",
    url: "https://thanhnn16.vercel.app/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutContent />
      <AboutEducation />
      <AboutAwards />
    </MainLayout>
  )
}
