"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const t = useTranslations("contact")
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Form submitted!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Gửi tin nhắn</h2>

      <Card className="bg-zinc-800 border-zinc-700">
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-200">
                Họ tên
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Nhập họ tên của bạn"
                required
                className="bg-zinc-900 border-zinc-700 text-zinc-200 focus:border-orange-500 focus:ring-orange-500"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-200">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@domain.com"
                required
                className="bg-zinc-900 border-zinc-700 text-zinc-200 focus:border-orange-500 focus:ring-orange-500"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-zinc-200">
                Tiêu đề
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Tiêu đề tin nhắn"
                required
                className="bg-zinc-900 border-zinc-700 text-zinc-200 focus:border-orange-500 focus:ring-orange-500"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-zinc-200">
                Nội dung
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Nhập nội dung tin nhắn của bạn"
                required
                rows={5}
                className="bg-zinc-900 border-zinc-700 text-zinc-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                aria-required="true"
              />
            </div>
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0">
            <Button
              type="submit"
              className="w-full bg-orange-500 text-zinc-900 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  <span>Đang gửi...</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Gửi tin nhắn</span>
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  )
}
