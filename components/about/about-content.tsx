"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function AboutContent() {
  const t = useTranslations("about")

  return (
    <section className="py-16 bg-zinc-950" aria-labelledby="about-content-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h2 id="about-content-heading" className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">
            Câu chuyện của tôi
          </h2>

          <div className="mt-8 space-y-6 text-zinc-300">
            <p>
              Thành thạo xây dựng các quy trình tự động hóa end-to-end bằng n8n, bao gồm xử lý dữ liệu, tự động hóa
              DevOps và sản xuất/phân phối nội dung số (đặc biệt cho TikTok) nhằm đạt được các mục tiêu kinh doanh cụ
              thể.
            </p>

            <p>
              Chủ động nghiên cứu và làm chủ các công nghệ AI mới, thể hiện khả năng tự học nhanh chóng để triển khai
              các giải pháp hiệu quả về chi phí và có tác động lớn. Mong muốn đóng góp vào các dự án đột phá, khai thác
              tối đa tiềm năng của AI và tự động hóa.
            </p>

            <h3 className="text-xl font-semibold text-zinc-100 mt-8">Kinh nghiệm làm việc</h3>

            <div className="border-l-2 border-orange-500/30 pl-6 space-y-8 mt-6">
              <div>
                <h4 className="text-lg font-medium text-orange-500">AI & Automation Specialist (Freelance)</h4>
                <p className="text-sm text-zinc-400">2023 - Present</p>
                <ul className="mt-2 space-y-2 list-disc list-inside text-zinc-300">
                  <li>Phát triển và quản lý mạng lưới kênh TikTok tự động hóa 100% bằng AI</li>
                  <li>Xây dựng quy trình tự động hóa end-to-end với n8n</li>
                  <li>Tích hợp các mô hình AI (OpenAI, Gemini, TogetherAI) vào quy trình làm việc</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-orange-500">Mobile Developer (Freelance)</h4>
                <p className="text-sm text-zinc-400">2022 - Present</p>
                <ul className="mt-2 space-y-2 list-disc list-inside text-zinc-300">
                  <li>Phát triển ứng dụng di động với Flutter và React Native</li>
                  <li>Thiết kế và triển khai kiến trúc sạch (Clean Architecture)</li>
                  <li>Tích hợp API và dịch vụ bên thứ ba</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-orange-500">Mobile Developer Intern @ SOFTWORLD Vietnam</h4>
                <p className="text-sm text-zinc-400">2022</p>
                <ul className="mt-2 space-y-2 list-disc list-inside text-zinc-300">
                  <li>Nghiên cứu và phát triển giải pháp quét và ghép hóa đơn dài bằng OpenCV</li>
                  <li>Xử lý tích hợp camera/cảm biến, kết nối mã C gốc với Flutter thông qua FFI</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
