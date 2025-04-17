import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact | Nông Nguyễn Thành",
  description: "Get in touch with Nông Nguyễn Thành. Contact me for collaboration, questions, or project inquiries.",
  openGraph: {
    title: "Contact | Nông Nguyễn Thành",
    description: "Get in touch with Nông Nguyễn Thành. Contact me for collaboration, questions, or project inquiries.",
    url: "https://thanhnn16.vercel.app/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHeader />
      <div className="container pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  )
}
