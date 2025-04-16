"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const t = useTranslations("home.hero")
  const ctaT = useTranslations("common.cta")

  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-labelledby="hero-heading">
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            id="hero-heading"
            className="font-lexend text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl md:text-6xl"
          >
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300 md:text-xl">{t("tagline")}</p>
          <p className="mt-4 text-base text-zinc-400">{t("intro")}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 text-zinc-900 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <Link href="/projects">
                {ctaT("viewProjects")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <Link href="/contact">{ctaT("contact")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute right-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-amber-700/10 blur-[100px]" />
      </div>
    </section>
  )
}
