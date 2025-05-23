"use client"

import { motion } from "framer-motion"

interface WorkflowsHeaderProps {
  title: string
  description: string
}

export function WorkflowsHeader({ title, description }: WorkflowsHeaderProps) {
  return (
    <section className="mb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
          <span className="text-orange-500">{title}</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-zinc-400">
          {description}
        </p>
      </motion.div>
    </section>
  )
}
