"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function ProjectsHeader({ title, description }: { title: string; description: string }) {
  const t = useTranslations("projects")

  return (
    <section className="py-16 md:py-20" aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="projects-heading" className="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
