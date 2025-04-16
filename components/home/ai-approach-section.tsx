"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Brain, Sparkles, Workflow } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AiApproachSection() {
  const t = useTranslations("home.aiApproach")

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-orange-500" />,
      title: "AI-First Thinking",
      description: "Approaching every challenge with AI as the primary solution driver.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-orange-500" />,
      title: "Workflow Automation",
      description: "Creating end-to-end automated processes that save time and reduce errors.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-orange-500" />,
      title: "Creative Solutions",
      description: "Combining AI technologies in innovative ways to solve complex problems.",
    },
  ]

  return (
    <section className="py-16 bg-zinc-950">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-zinc-300">{t("description")}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-orange-500/10 p-3">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-100">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
