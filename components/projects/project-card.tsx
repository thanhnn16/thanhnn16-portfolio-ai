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
  githubLink?: string
  demoLink?: string
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
        <div className="text-sm text-zinc-400">
          <span className="font-medium text-zinc-300">Role: </span>
          {project.role}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t border-zinc-700 bg-zinc-800/50 px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-zinc-700 hover:bg-zinc-600">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubLink && (
            <Link href={project.githubLink} className="text-xs text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </Link>
          )}
          {project.demoLink && (
            <Link href={project.demoLink} className="text-xs text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
