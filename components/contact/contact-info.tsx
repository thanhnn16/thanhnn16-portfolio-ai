"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  const t = useTranslations("contact")

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: "Email",
      value: "thanhnn16.work@gmail.com",
      href: "mailto:thanhnn16.work@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Phone",
      value: "+84 879 159 499",
      href: "tel:+84879159499",
    },
    {
      icon: <Github className="h-6 w-6 text-orange-500" />,
      title: "GitHub",
      value: "github.com/thanhnn16",
      href: "https://github.com/thanhnn16",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-orange-500" />,
      title: "LinkedIn",
      value: "linkedin.com/in/thanhnn16",
      href: "https://linkedin.com/in/thanhnn16",
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Location",
      value: "Go Vap, HCM City, Vietnam",
      href: "https://maps.google.com/?q=Go+Vap,+Ho+Chi+Minh+City,+Vietnam",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Thông tin liên hệ</h2>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-orange-500/10 p-2">{method.icon}</div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-400">{method.title}</h3>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-zinc-100 hover:text-orange-500 focus:outline-none focus:text-orange-500"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-zinc-100 mb-4">Zalo QR Code</h2>
        <div className="bg-white p-4 rounded-lg inline-block">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Zalo QR Code"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </motion.div>
  )
}
