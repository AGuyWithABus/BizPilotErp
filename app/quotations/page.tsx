import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuotationList } from "./quotation-list"
import { NewQuotation } from "./new-quotation"
import { QuotationAnalytics } from "./quotation-analytics"

export default function QuotationsPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Quotations</h1>
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Quotation List</TabsTrigger>
          <TabsTrigger value="new">New Quotation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <QuotationList />
        </TabsContent>
        <TabsContent value="new">
          <NewQuotation />
        </TabsContent>
        <TabsContent value="analytics">
          <QuotationAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  )
}

