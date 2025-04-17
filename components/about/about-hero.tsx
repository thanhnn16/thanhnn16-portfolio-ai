"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function AboutHero() {
  const t = useTranslations("about")

  return (
    <section className="py-20 md:py-28" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Nông Nguyễn Thành portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 id="about-heading" className="text-4xl font-bold tracking-tight text-orange-500 md:text-5xl">
              Nông Nguyễn Thành
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-200">AI Application & Workflow Automation Specialist</p>
            <div className="mt-6 space-y-4 text-zinc-300">
              <p>
                Một Chuyên gia Ứng dụng AI & Tự động hóa Quy trình đầy nhiệt huyết, được thúc đẩy bởi tư duy cốt lõi
                'AI-First', tin rằng gần như mọi thách thức đều có thể được tối ưu hóa hoặc giải quyết hiệu quả thông
                qua ứng dụng AI sáng tạo.
              </p>
              <p>
                Chuyên về tự động hóa các quy trình phức tạp và tích hợp các giải pháp AI tiên tiến (LLMs như
                ChatGPT/Gemini, APIs, AI tạo ảnh/video) để nâng cao hiệu quả hoạt động.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">Email:</span>
                <a
                  href="mailto:thanhnn16.work@gmail.com"
                  className="text-orange-500 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm"
                >
                  thanhnn16.work@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">GitHub:</span>
                <a
                  href="https://github.com/thanhnn16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm"
                >
                  github.com/thanhnn16
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">Phone:</span>
                <a
                  href="tel:+84879159499"
                  className="text-orange-500 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm"
                >
                  +84 879 159 499
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
