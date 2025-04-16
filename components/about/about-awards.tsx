"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Award, Trophy, Medal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutAwards() {
  const t = useTranslations("about")

  const awards = [
    {
      icon: <Trophy className="h-6 w-6 text-orange-500" />,
      title: "Top 150 Outstanding Students",
      description: "Awarded 5 times in 6 semesters (2023 & 2024)",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Top 50 Outstanding Leaders",
      description: "Activities & Classroom Management (October 2023)",
    },
    {
      icon: <Medal className="h-6 w-6 text-orange-500" />,
      title: "Mobile App Challenge",
      description: "Ranked Second (July 2023)",
    },
  ]

  return (
    <section className="py-16 bg-zinc-950" aria-labelledby="awards-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 id="awards-heading" className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">
            Giải thưởng và thành tích
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-zinc-900 border-zinc-800">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-orange-500/10 p-3">{award.icon}</div>
                    <h3 className="mb-2 text-lg font-semibold text-zinc-100">{award.title}</h3>
                    <p className="text-zinc-400">{award.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <span>Tải CV (PDF)</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
