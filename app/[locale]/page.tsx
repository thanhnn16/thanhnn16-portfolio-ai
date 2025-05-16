import { getBlogPosts, getProjects } from "@/lib/directus"
import { HeroSection } from "@/components/home/hero-section"
import { KeySkillsSection } from "@/components/home/key-skills-section"
import { AiApproachSection } from "@/components/home/ai-approach-section"
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section"
import { LatestPostsSection } from "@/components/home/latest-posts-section"

export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  
  // Get all projects, but only display featured ones in the featured section
  const allProjects = await getProjects(locale)
  const featuredProjects = allProjects.filter(project => project.featured)
  
  // Get latest blog posts (limited to 3)
  const allPosts = await getBlogPosts(locale)
  const latestPosts = allPosts.slice(0, 3)

  return (
    <div className="space-y-20 md:space-y-32 pb-10">
      <HeroSection />
      <KeySkillsSection />
      <AiApproachSection />
      
      <FeaturedProjectsSection 
        projects={featuredProjects.map(project => ({
          id: project.id,
          title: project.title,
          description: project.description,
          image: project.cover_image 
            ? `${process.env.DIRECTUS_URL || 'http://localhost:8055'}/assets/${project.cover_image}` 
            : "/placeholder.jpg",
          slug: project.slug,
          techStack: project.tech_stack || []
        }))} 
      />
      
      <LatestPostsSection 
        posts={latestPosts.map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.content.substring(0, 150) + "...",
          date: post.publish_date,
          slug: post.slug,
          image: post.cover_image 
            ? `${process.env.DIRECTUS_URL || 'http://localhost:8055'}/assets/${post.cover_image}` 
            : "/placeholder.jpg"
        }))}
      />
    </div>
  )
}
