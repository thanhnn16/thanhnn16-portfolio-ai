import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Post {
  title: string
  description: string
  date: string
  author: string
  tags?: string[]
  coverImage: string
  slug: string
  url: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full overflow-hidden bg-zinc-800 border-zinc-700 transition-all hover:border-orange-500/50 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={`Cover image for blog post: ${post.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={false}
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author && (
            <>
              <span aria-hidden="true">•</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        <h3 className="mb-2 text-xl font-bold text-zinc-100">
          <Link href={post.url} className="hover:text-orange-500 focus:outline-none focus:underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-zinc-400">{post.description}</p>
      </CardContent>
      {post.tags && post.tags.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2 border-t border-zinc-700 bg-zinc-800/50 px-6 py-4">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}
