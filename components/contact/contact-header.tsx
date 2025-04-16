"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function ContactHeader() {
  const t = useTranslations("contact")

  return (
    <section className="py-16 md:py-20" aria-labelledby="contact-heading">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="contact-heading" className="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
            Liên hệ
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Hãy liên hệ với tôi nếu bạn có bất kỳ câu hỏi hoặc đề xuất hợp tác nào.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
