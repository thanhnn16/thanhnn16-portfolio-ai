"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/projects/project-card"

// This would normally come from Contentlayer, but for now we'll use mock data
const mockProjects = [
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
  {
    title: "Allure Spa",
    description:
      "Developed a mobile app for spa customers to book appointments and purchase cosmetics, integrating MegaPAYQR API for payments.",
    role: "Developer",
    technologies: ["React Native", "MegaPAYQR API", "Laravel", "ReactJS", "MySQL"],
    category: "Mobile App",
    featured: false,
    mainImage: "/placeholder.svg?height=400&width=600",
    slug: "allure-spa",
    url: "/projects/allure-spa",
  },
  {
    title: "Đừng Quên Em",
    description:
      "Developed an IoT interaction mobile app communicating with devices via a server using REST API and Firebase Cloud Messaging.",
    role: "Developer / Team Leader",
    technologies: ["Flutter", "BloC/Cubit", "Clean Architecture", "FCM", "REST API", "Firebase"],
    category: "Mobile App",
    featured: false,
    mainImage: "/placeholder.svg?height=400&width=600",
    slug: "dung-quen-em",
    url: "/projects/dung-quen-em",
  },
  {
    title: "Webgame Lucky Draw",
    description:
      "Developed a web-based minigame (lucky draw) for SCG VN's distributors, including an admin dashboard for management.",
    role: "Developer",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery", "Zalo OA API"],
    category: "Web App",
    featured: false,
    mainImage: "/placeholder.svg?height=400&width=600",
    slug: "webgame-lucky-draw",
    url: "/projects/webgame-lucky-draw",
  },
]

export function ProjectsGrid({ children }: { children: React.ReactNode }) {
  const t = useTranslations("projects")
  const [activeCategory, setActiveCategory] = useState("AI & Automation")

  const filteredProjects =
    activeCategory === "All" ? mockProjects : mockProjects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-12 pb-24" aria-labelledby="projects-filter">
      <div className="container">
        <div className="mb-12">
          <Tabs defaultValue="AI & Automation" onValueChange={setActiveCategory} className="w-full">
            <TabsList className="mx-auto flex flex-wrap justify-center gap-2 bg-transparent">
              <TabsTrigger
                value="AI & Automation"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                aria-controls="projects-grid"
              >
                AI & Automation
              </TabsTrigger>
              <TabsTrigger
                value="Mobile App"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                aria-controls="projects-grid"
              >
                Mobile Apps
              </TabsTrigger>
              <TabsTrigger
                value="Web App"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                aria-controls="projects-grid"
              >
                Web Apps
              </TabsTrigger>
              <TabsTrigger
                value="All"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                aria-controls="projects-grid"
              >
                All Projects
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div id="projects-grid" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <p className="text-zinc-400">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
