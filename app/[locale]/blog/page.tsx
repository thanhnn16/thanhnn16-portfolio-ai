import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getBlogPosts } from "@/lib/directus"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogGrid } from "@/components/blog/blog-grid"
import { PostCard } from "@/components/blog/post-card"

export const metadata: Metadata = {
  title: "Blog - Nông Nguyễn Thành",
  description: "Read tech articles and insights about AI, automation, and development.",
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("blog")
  const locale = params.locale
  const posts = await getBlogPosts(locale)

  return (
    <div className="container py-10">
      <BlogHeader 
        title={t("title")}
        description={t("description")}
      />
      
      <BlogGrid>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              excerpt={post.content.substring(0, 150) + "..."}
              slug={post.slug}
              date={post.publish_date}
              imageSrc={post.cover_image 
                ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}/assets/${post.cover_image}` 
                : "/placeholder.jpg"
              }
            />
          ))
        ) : (
          <p className="text-center col-span-full text-zinc-400">{t("no_posts")}</p>
        )}
      </BlogGrid>
    </div>
  )
}
