import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPost } from "@/lib/directus"
import { useTranslations } from "next-intl"
import Image from "next/image"

export async function generateMetadata({ params }: {
  params: { slug: string, locale: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug, params.locale)
  
  if (!post) {
    return {
      title: "Post Not Found"
    }
  }
  
  return {
    title: `${post.title} - Nông Nguyễn Thành`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: "article",
      url: `https://thanhnn16.io.vn/blog/${post.slug}`,
      images: post.cover_image 
        ? [{ url: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.cover_image}` }] 
        : [],
    },
  }
}

export default async function BlogPostPage({ params }: { 
  params: { slug: string, locale: string } 
}) {
  const post = await getBlogPost(params.slug, params.locale)
  const t = useTranslations("blog")
  
  if (!post) {
    notFound()
  }

  return (
    <article className="container py-10 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-zinc-400 text-sm mb-6">
          <time dateTime={post.publish_date}>
            {new Date(post.publish_date).toLocaleDateString(params.locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        
        {post.cover_image && (
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}/assets/${post.cover_image}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
      
      <div 
        className="prose prose-zinc dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}