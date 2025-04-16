"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Brain, Bot, Workflow, Code, Database, Server, Smartphone, Globe, GitBranch } from "lucide-react"

export function KeySkillsSection() {
  const t = useTranslations("home.skills")

  const skills = [
    {
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      name: "AI & LLMs",
      description: "ChatGPT, Gemini, Claude, Prompt Engineering",
    },
    {
      icon: <Bot className="h-8 w-8 text-orange-500" />,
      name: "AI Integration",
      description: "OpenAI API, Gemini API, TogetherAI",
    },
    {
      icon: <Workflow className="h-8 w-8 text-orange-500" />,
      name: "Workflow Automation",
      description: "n8n, API Integration, Process Optimization",
    },
    {
      icon: <Code className="h-8 w-8 text-orange-500" />,
      name: "Web Development",
      description: "Next.js, React, TypeScript, Laravel",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      name: "Mobile Development",
      description: "Flutter, React Native, Clean Architecture",
    },
    {
      icon: <Database className="h-8 w-8 text-orange-500" />,
      name: "Databases",
      description: "MySQL, MongoDB, Firebase",
    },
    {
      icon: <Server className="h-8 w-8 text-orange-500" />,
      name: "DevOps",
      description: "Docker, VPS Management, Cloud Platforms",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      name: "Languages",
      description: "Vietnamese, English, Japanese (N3)",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-orange-500" />,
      name: "Version Control",
      description: "Git, GitHub, Collaborative Development",
    },
  ]

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
              <Link href="/skills">
                {t("viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-4 transition-all hover:border-orange-500/30 hover:bg-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="rounded-md bg-orange-500/10 p-2">{skill.icon}</div>
              <div>
                <h3 className="font-medium text-zinc-100">{skill.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
