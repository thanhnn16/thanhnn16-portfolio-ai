"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WorkflowCard } from "@/components/workflows/workflow-card"
import { Workflow } from "@/lib/directus/types"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export function WorkflowsGrid({ workflows, locale }: { workflows: Workflow[], locale: string }) {
  const t = useTranslations("workflows")
  const [selectedPrice, setSelectedPrice] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Get unique price ranges
  const priceRanges = ["All", "$0-$9", "$10-$49", "$50-$99", "$100+"]

  // Filter workflows based on selected price range and search query
  const filteredWorkflows = workflows.filter((workflow) => {
    const priceMatch = selectedPrice === "All" || matchesPriceRange(workflow.price, selectedPrice)
    const searchMatch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return priceMatch && searchMatch
  })

  function matchesPriceRange(price: number, range: string): boolean {
    switch(range) {
      case "$0-$9":
        return price >= 0 && price <= 9
      case "$10-$49":
        return price >= 10 && price <= 49
      case "$50-$99":
        return price >= 50 && price <= 99
      case "$100+":
        return price >= 100
      default:
        return true
    }
  }

  return (
    <section className="mb-16">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-80 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-200"
            />
          </div>
          
          <Tabs defaultValue="All" className="w-full sm:w-auto">
            <TabsList className="bg-zinc-800/50 p-1">
              {priceRanges.map((range) => (
                <TabsTrigger
                  key={range}
                  value={range}
                  onClick={() => setSelectedPrice(range)}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  aria-controls="workflows-grid"
                >
                  {range}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div id="workflows-grid" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="wait">
            {filteredWorkflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <WorkflowCard workflow={workflow} locale={locale} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredWorkflows.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <p className="text-zinc-400">{t("no_workflows")}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
