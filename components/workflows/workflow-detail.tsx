"use client"

import { useState } from "react"
import { Workflow } from "@/lib/directus/types"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ShoppingCart, Info, Code, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WorkflowDetailProps {
  workflow: Workflow
}

export function WorkflowDetail({ workflow }: WorkflowDetailProps) {
  const t = useTranslations("workflows")
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <div className="space-y-8">
      <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
              n8n
            </Badge>
            {workflow.published && (
              <Badge className="bg-green-500/20 text-green-500 border-green-500/20">
                <CheckCircle className="mr-1 h-3 w-3" /> Active
              </Badge>
            )}
          </div>
          <span className="text-2xl font-bold text-orange-500">${workflow.price.toFixed(2)}</span>
        </div>
        
        <Tabs defaultValue="overview" className="mt-6" onValueChange={setActiveTab}>
          <TabsList className="bg-zinc-900/50 w-full grid grid-cols-3">
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900">
              <Info className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900">
              <Code className="mr-2 h-4 w-4" />
              Details
            </TabsTrigger>
            <TabsTrigger value="purchase" className="data-[state=active]:bg-orange-500 data-[state=active]:text-zinc-900">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Purchase
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="pt-6">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardHeader>
                <h3 className="text-xl font-semibold">About this workflow</h3>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">{workflow.description}</p>
                
                <div className="mt-6 space-y-4">
                  <h4 className="font-medium text-zinc-200">What you'll get:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complete n8n workflow configuration file</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Documentation with setup instructions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>30 days of email support</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="details" className="pt-6">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardHeader>
                <h3 className="text-xl font-semibold">Technical Details</h3>
              </CardHeader>
              <CardContent>
                {workflow.file_content && (
                  <div className="bg-zinc-800 p-4 rounded-md overflow-auto max-h-96">
                    <pre className="text-sm text-zinc-300">
                      <code>{JSON.stringify(workflow.file_content, null, 2)}</code>
                    </pre>
                  </div>
                )}
                
                <div className="mt-6">
                  <h4 className="font-medium text-zinc-200 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="mr-2 h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>n8n version 0.214.0 or higher</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="mr-2 h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Node.js 16 or higher</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-zinc-200 mb-2">Last updated:</h4>
                  <p className="text-zinc-400">{new Date(workflow.updated_at).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="purchase" className="pt-6">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardHeader>
                <h3 className="text-xl font-semibold">Purchase Options</h3>
              </CardHeader>
              <CardContent>
                <div className="bg-zinc-800 p-6 rounded-md border border-orange-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">Standard License</h4>
                    <span className="text-2xl font-bold text-orange-500">${workflow.price.toFixed(2)}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Single installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>30 days support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Documentation included</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-col gap-4">
                    <Button className="bg-orange-500 text-zinc-900 hover:bg-orange-600" size="lg">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {t("buy_now")}
                    </Button>
                    
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      {t("download_demo")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
