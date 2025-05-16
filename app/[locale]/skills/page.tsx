import type { Metadata } from "next";
import { SkillsHeader } from "@/components/skills/skills-header";
import { SkillsGrid } from "@/components/skills/skills-grid";

export const metadata: Metadata = {
  title: "Skills | Nông Nguyễn Thành",
  description:
    "Explore my technical skills in AI, automation, web and mobile development, and more. Specializing in AI integration, workflow automation, and software development.",
  openGraph: {
    title: "Skills | Nông Nguyễn Thành",
    description:
      "Explore my technical skills in AI, automation, web and mobile development, and more. Specializing in AI integration, workflow automation, and software development.",
    url: "https://thanhnn16.io.vn/skills",
    type: "website",
  },
};

export default function SkillsPage() {
  return (
    <>
      <SkillsHeader />
      <SkillsGrid />
    </>
  );
}
