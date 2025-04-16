"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { GraduationCap, BookOpen } from "lucide-react"

export function AboutEducation() {
  const t = useTranslations("about")

  return (
    <section className="py-16" aria-labelledby="education-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h2 id="education-heading" className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">
            Học vấn
          </h2>

          <div className="mt-8 space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                  <GraduationCap className="h-6 w-6 text-orange-500" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">FPT Polytechnic</h3>
                <p className="text-zinc-400">August 2022 – Present</p>
                <p className="mt-2 text-zinc-300">Mobile Application Development</p>
                <p className="text-zinc-400">GPA: 9.4 - 9.5</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                  <BookOpen className="h-6 w-6 text-orange-500" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">Ho Chi Minh Open University</h3>
                <p className="text-zinc-400">October 2017 – October 2022</p>
                <p className="mt-2 text-zinc-300">Japanese Language</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
