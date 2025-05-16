"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { PostCard } from "@/components/blog/post-card"

// Define the post interface
interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
}

// Define the mock post interface
interface MockPost {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  categories: string[]
  coverImage: string
  slug: string
  url: string
}

type PostType = Post | MockPost

// Type guard to check if a post is from API or mock data
function isApiPost(post: PostType): post is Post {
  return (post as Post).image !== undefined && (post as Post).excerpt !== undefined;
}

interface LatestPostsSectionProps {
  posts: Post[]
}

// This would normally come from Contentlayer, but for now we'll use mock data
const mockLatestPosts = [
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
]

export function LatestPostsSection({ posts = [] }: LatestPostsSectionProps) {
  const t = useTranslations("home.latestPosts")
  
  // Use provided posts or fallback to mock data if no posts provided
  const postsToShow = posts.length > 0 ? posts : mockLatestPosts

  return (
    <section className="py-16 bg-zinc-950">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild variant="ghost" className="text-orange-500 hover:bg-orange-500/10 hover:text-orange-500">
              <Link href="/blog">
                {t("viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PostCard 
                post={{
                  title: post.title,
                  description: isApiPost(post) ? post.excerpt : post.description,
                  date: post.date,
                  author: isApiPost(post) ? "" : post.author,
                  tags: isApiPost(post) ? [] : post.tags,
                  categories: isApiPost(post) ? [] : post.categories,
                  coverImage: isApiPost(post) ? post.image : post.coverImage,
                  slug: post.slug,
                  url: `/blog/${post.slug}`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
