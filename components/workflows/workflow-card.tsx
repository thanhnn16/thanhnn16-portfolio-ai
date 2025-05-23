"use client"

import { Workflow } from "@/lib/directus/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Workflow as WorkflowIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

interface WorkflowCardProps {
  workflow: Workflow
  locale: string
}

export function WorkflowCard({ workflow, locale }: WorkflowCardProps) {
  const t = useTranslations("workflows.card")
  
  return (
    <Card className="h-full flex flex-col group overflow-hidden bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-all duration-300">
      <CardHeader className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mb-4">
            <WorkflowIcon className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
            n8n
          </Badge>
        </div>
        <Link href={`/${locale}/workflows/${workflow.id}`} className="block">
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-orange-500 transition-colors">
            {workflow.name}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-zinc-400 line-clamp-3">
          {workflow.description}
        </p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-6 pt-0 border-t border-zinc-800 mt-auto">
        <span className="text-xl font-bold text-orange-500">${workflow.price.toFixed(2)}</span>
        <Button asChild variant="ghost" size="sm" className="text-zinc-300 hover:text-orange-500 hover:bg-orange-500/10">
          <Link href={`/${locale}/workflows/${workflow.id}`}>
            {t("view_details")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
