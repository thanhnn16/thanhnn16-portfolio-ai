import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  role: string
  technologies: string[]
  category: string
  mainImage: string
  slug: string
  url: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Determine badge color based on category
  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "AI & Automation":
        return "default"
      case "Mobile App":
        return "secondary"
      case "Web App":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <Card className="h-full overflow-hidden bg-zinc-800 border-zinc-700 transition-all hover:border-orange-500/50 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.mainImage || "/placeholder.svg"}
          alt={`Screenshot or illustration of ${project.title} project`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={false}
        />
      </div>
      <CardContent className="p-6">
        <Badge variant={getBadgeVariant(project.category)} className="mb-2">
          {project.category}
        </Badge>
        <h3 className="mb-2 text-xl font-bold text-zinc-100">
          <Link href={project.url} className="hover:text-orange-500 focus:outline-none focus:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mb-4 text-zinc-400">{project.description}</p>
        <p className="text-sm text-zinc-500">
          <span className="font-medium">Role:</span> {project.role}
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t border-zinc-700 bg-zinc-800/50 px-6 py-4">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <Badge key={index} variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">
            +{project.technologies.length - 4}
          </Badge>
        )}
      </CardFooter>
    </Card>
  )
}
