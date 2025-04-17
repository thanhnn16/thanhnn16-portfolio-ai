"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { PostCard } from "@/components/blog/post-card"
import { Badge } from "@/components/ui/badge"

// This would normally come from Contentlayer, but for now we'll use mock data
const mockPosts = [
  {
    title: "Tối ưu hóa quy trình làm việc với AI",
    description: "Cách tôi sử dụng AI để tự động hóa các tác vụ lặp đi lặp lại và tăng năng suất làm việc.",
    date: "2023-12-15",
    author: "Nông Nguyễn Thành",
    tags: ["AI", "Automation", "Productivity"],
    categories: ["AI", "Workflow"],
    coverImage: "/placeholder.svg?height=400&width=600",
    slug: "toi-uu-hoa-quy-trinh-lam-viec-voi-ai",
    url: "/blog/toi-uu-hoa-quy-trinh-lam-viec-voi-ai",
  },
  {
    title: "Xây dựng ứng dụng di động với Flutter và Clean Architecture",
    description: "Kinh nghiệm và bài học từ việc phát triển ứng dụng di động sử dụng Flutter và Clean Architecture.",
    date: "2023-11-20",
    author: "Nông Nguyễn Thành",
    tags: ["Flutter", "Mobile", "Clean Architecture"],
    categories: ["Mobile Development", "Flutter"],
    coverImage: "/placeholder.svg?height=400&width=600",
    slug: "xay-dung-ung-dung-di-dong-voi-flutter-va-clean-architecture",
    url: "/blog/xay-dung-ung-dung-di-dong-voi-flutter-va-clean-architecture",
  },
  {
    title: "Tự động hóa nội dung TikTok với AI",
    description: "Cách tôi sử dụng AI để tạo và quản lý nội dung cho nhiều kênh TikTok cùng lúc.",
    date: "2023-10-05",
    author: "Nông Nguyễn Thành",
    tags: ["TikTok", "AI", "Content Creation"],
    categories: ["AI", "Social Media"],
    coverImage: "/placeholder.svg?height=400&width=600",
    slug: "tu-dong-hoa-noi-dung-tiktok-voi-ai",
    url: "/blog/tu-dong-hoa-noi-dung-tiktok-voi-ai",
  },
  {
    title: "Tích hợp ChatGPT vào ứng dụng di động",
    description: "Hướng dẫn cách tích hợp API của OpenAI vào ứng dụng di động Flutter.",
    date: "2023-09-12",
    author: "Nông Nguyễn Thành",
    tags: ["ChatGPT", "Flutter", "API Integration"],
    categories: ["AI", "Mobile Development"],
    coverImage: "/placeholder.svg?height=400&width=600",
    slug: "tich-hop-chatgpt-vao-ung-dung-di-dong",
    url: "/blog/tich-hop-chatgpt-vao-ung-dung-di-dong",
  },
  {
    title: "Sử dụng n8n để tự động hóa quy trình DevOps",
    description: "Cách tôi sử dụng n8n để tự động hóa các quy trình DevOps và tiết kiệm thời gian.",
    date: "2023-08-18",
    author: "Nông Nguyễn Thành",
    tags: ["n8n", "DevOps", "Automation"],
    categories: ["DevOps", "Automation"],
    coverImage: "/placeholder.svg?height=400&width=600",
    slug: "su-dung-n8n-de-tu-dong-hoa-quy-trinh-devops",
    url: "/blog/su-dung-n8n-de-tu-dong-hoa-quy-trinh-devops",
  },
  {
    title: "Học tiếng Nhật hiệu quả với AI",
    description: "Chia sẻ kinh nghiệm học tiếng Nhật hiệu quả với sự hỗ trợ của các công cụ AI.",
    date: "2023-07-25",
    author: "Nông Nguyễn Thành",
    tags: ["Japanese", "Language Learning", "AI"],
    categories: ["Language", "AI"],
    coverImage: "/placeholder.svg?height=400&width=600",
    slug: "hoc-tieng-nhat-hieu-qua-voi-ai",
    url: "/blog/hoc-tieng-nhat-hieu-qua-voi-ai",
  },
]

// Extract all unique categories
const allCategories = Array.from(new Set(mockPosts.flatMap((post) => post.categories)))

export function BlogGrid() {
  const t = useTranslations("blog")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? mockPosts.filter((post) => post.categories.includes(selectedCategory))
    : mockPosts

  return (
    <section className="py-12 pb-24">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className={`cursor-pointer ${selectedCategory === null ? "bg-orange-500 text-zinc-900" : "bg-transparent hover:bg-zinc-800"}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {allCategories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === category ? "bg-orange-500 text-zinc-900" : "bg-transparent hover:bg-zinc-800"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <p className="text-zinc-400">No posts found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
