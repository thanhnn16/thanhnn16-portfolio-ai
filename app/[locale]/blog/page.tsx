import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog | Nông Nguyễn Thành",
  description: "Read my latest articles about AI, automation, mobile and web development, and more.",
  openGraph: {
    title: "Blog | Nông Nguyễn Thành",
    description: "Read my latest articles about AI, automation, mobile and web development, and more.",
    url: "https://thanhnn16.vercel.app/blog",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogHeader />
      <BlogGrid />
    </MainLayout>
  )
}
