"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const t = useTranslations("common.nav")

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900 py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-orange-500">thanhnn16</span>
          </Link>
          <p className="mt-2 text-sm text-zinc-400">AI Application & Workflow Automation Specialist</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-zinc-100">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-zinc-400 hover:text-orange-500">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-zinc-400 hover:text-orange-500">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-zinc-400 hover:text-orange-500">
                {t("projects")}
              </Link>
            </li>            <li>
              <Link href="/skills" className="text-zinc-400 hover:text-orange-500">
                {t("skills")}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-zinc-400 hover:text-orange-500">
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link href="/workflows" className="text-zinc-400 hover:text-orange-500">
                {t("workflows")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-400 hover:text-orange-500">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-zinc-100">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-zinc-400">
              <Mail className="h-4 w-4" />
              <a href="mailto:thanhnn16.work@gmail.com" className="hover:text-orange-500">
                thanhnn16.work@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-zinc-400">
              <Phone className="h-4 w-4" />
              <a href="tel:+84879159499" className="hover:text-orange-500">
                +84 879 159 499
              </a>
            </li>
            <li className="flex items-center gap-2 text-zinc-400">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/thanhnn16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                github.com/thanhnn16
              </a>
            </li>
            <li className="flex items-center gap-2 text-zinc-400">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com/in/thanhnn16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                linkedin.com/in/thanhnn16
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-zinc-100">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-zinc-400 hover:text-orange-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-zinc-400 hover:text-orange-500">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 border-t border-zinc-800 pt-6">
        <p className="text-center text-sm text-zinc-400">© {currentYear} Nông Nguyễn Thành. All rights reserved.</p>
      </div>
    </footer>
  )
}
