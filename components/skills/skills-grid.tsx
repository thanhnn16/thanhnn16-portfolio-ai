"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  Brain,
  Bot,
  Workflow,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  Cpu,
  ImageIcon as Image,
  Video,
  Terminal,
  Cloud,
  DockIcon as Docker,
  MessageSquare,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsGrid() {
  const t = useTranslations("skills")

  const skillGroups = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      skills: [
        {
          name: "Large Language Models (LLMs)",
          description: "ChatGPT (Plus), Gemini (Advanced, AI Studio), Claude, Perplexity",
          icon: <Bot className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Prompt Engineering",
          description: "Designing effective prompts for various AI models and use cases",
          icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "AI APIs",
          description: "OpenAI API, Gemini API, TogetherAI",
          icon: <Terminal className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Image Generation",
          description: "Stable Diffusion, ComfyUI, ChatGPT",
          icon: <Image className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Video Generation",
          description: "Kling AI (Familiarity)",
          icon: <Video className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Local AI Models",
          description: "LM Studio, Ollama",
          icon: <Cpu className="h-6 w-6 text-orange-500" />,
        },
      ],
    },
    {
      title: "Automation & Integration",
      icon: <Workflow className="h-8 w-8 text-orange-500" />,
      skills: [
        {
          name: "n8n",
          description: "Advanced Workflow Development",
          icon: <Workflow className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "API Integration",
          description: "REST APIs, Third-party services",
          icon: <Terminal className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Docker & Docker Compose",
          description: "Containerization for automation",
          icon: <Docker className="h-6 w-6 text-orange-500" />,
        },
      ],
    },
    {
      title: "Development & DevOps",
      icon: <Code className="h-8 w-8 text-orange-500" />,
      skills: [
        {
          name: "Web Frameworks",
          description: "Laravel (PHP), Nuxt 3, NestJS, NextJS, ReactJS, NodeJS/Express",
          icon: <Code className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Mobile Frameworks",
          description: "Flutter (BloC/Cubit, Clean Architecture), React Native (Expo)",
          icon: <Smartphone className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Programming Languages",
          description: "Python (Scripting for Automation), PHP, JavaScript/TypeScript",
          icon: <Terminal className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Database",
          description: "MySQL, MongoDB, Firebase",
          icon: <Database className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Version Control",
          description: "Git, GitHub",
          icon: <GitBranch className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Cloud Platforms",
          description: "Google Cloud Platform, DigitalOcean, AWS (Basic)",
          icon: <Cloud className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "DevOps Tools",
          description: "Docker, Docker Compose, VPS Management",
          icon: <Server className="h-6 w-6 text-orange-500" />,
        },
      ],
    },
    {
      title: "Soft Skills & Languages",
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      skills: [
        {
          name: "Languages",
          description: "Vietnamese (Native), English (Professional), Japanese (N3)",
          icon: <Globe className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Problem Solving",
          description: "AI-First Thinking & Strategic Application",
          icon: <Brain className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Self-Learning",
          description: "Rapid Research, Adaptability & Resourcefulness",
          icon: <Bot className="h-6 w-6 text-orange-500" />,
        },
        {
          name: "Teamwork",
          description: "Communication, Collaboration, Leadership",
          icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
        },
      ],
    },
  ]

  return (
    <section className="py-12 pb-24">
      <div className="container">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-orange-500/10 p-2">{group.icon}</div>
              <h2 className="text-2xl font-bold text-orange-500">{group.title}</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-zinc-900 border-zinc-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                      <div className="rounded-md bg-orange-500/10 p-1">{skill.icon}</div>
                      <CardTitle className="text-lg font-medium text-zinc-100">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-400">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
