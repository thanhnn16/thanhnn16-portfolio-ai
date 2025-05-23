"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Workflow, Bot, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function WorkflowFeatureSection() {
  const t = useTranslations("home.workflows")
  
  const features = [
    {
      icon: <Bot className="h-10 w-10 text-orange-500" />,
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
    {
      icon: <Workflow className="h-10 w-10 text-orange-500" />,
      title: t("features.automation.title"),
      description: t("features.automation.description"),
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-500" />,
      title: t("features.productivity.title"),
      description: t("features.productivity.description"),
    },
  ]
  
  return (
    <section className="py-16 bg-zinc-950">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-zinc-300">{t("description")}</p>
          <div className="mt-6">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <Link href="/workflows">
                {t("browse_workflows")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
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
