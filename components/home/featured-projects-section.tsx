"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/projects/project-card"

// This would normally come from Contentlayer, but for now we'll use mock data
const mockFeaturedProjects = [
  {
    title: "Automated TikTok Channel Network",
    description: "Built and managed a network of 6 TikTok channels with 100% AI-generated content for book sales.",
    role: "Developer",
    technologies: ["AI", "n8n", "FFmpeg", "TikTok API", "Google Sheets API"],
    category: "AI & Automation",
    featured: true,
    mainImage: "/placeholder.svg?height=400&width=600",
    slug: "automated-tiktok-channel",
    url: "/projects/automated-tiktok-channel",
  },
  {
    title: "n8n-Based Automation Workflows",
    description:
      "Designed and implemented various automated workflows using n8n to address specific technical and business challenges.",
    role: "Developer",
    technologies: ["n8n", "OpenAI API", "Google AI Studio", "Docker", "REST APIs"],
    category: "AI & Automation",
    featured: true,
    mainImage: "/placeholder.svg?height=400&width=600",
    slug: "n8n-automation-workflows",
    url: "/projects/n8n-automation-workflows",
  },
  {
    title: "Điện lạnh Bông Tuyết Trắng",
    description:
      "Developed a mobile app for customers to book appointments and purchase products/services with corresponding admin dashboards.",
    role: "Full-stack Developer",
    technologies: ["Flutter", "BloC/Cubit", "Clean Architecture", "Gemini AI API", "Laravel"],
    category: "Mobile App",
    featured: true,
    mainImage: "/placeholder.svg?height=400&width=600",
    slug: "dien-lanh-bong-tuyet-trang",
    url: "/projects/dien-lanh-bong-tuyet-trang",
  },
]

export function FeaturedProjectsSection() {
  const t = useTranslations("home.featuredProjects")

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild variant="ghost" className="text-orange-500 hover:bg-orange-500/10 hover:text-orange-500">
              <Link href="/projects">
                {t("viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockFeaturedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
