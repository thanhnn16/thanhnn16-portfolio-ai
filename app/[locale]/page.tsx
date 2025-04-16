import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/home/hero-section"
import { AiApproachSection } from "@/components/home/ai-approach-section"
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section"
import { LatestPostsSection } from "@/components/home/latest-posts-section"
import { KeySkillsSection } from "@/components/home/key-skills-section"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AiApproachSection />
      <FeaturedProjectsSection />
      <LatestPostsSection />
      <KeySkillsSection />
    </MainLayout>
  )
}
