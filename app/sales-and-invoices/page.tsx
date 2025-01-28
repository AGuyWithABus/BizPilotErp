import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalesOverview } from "./sales-overview"
import { SalesChart } from "./sales-chart"
import { TopProducts } from "./top-products"
import { RecentSales } from "./recent-sales"
import { SalesTeamPerformance } from "./sales-team-performance"
import { Invoices } from "./invoices"
import { NewInvoiceForm } from "./new-invoice-form"

export default function SalesAndInvoicesPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Sales and Invoices</h1>
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales Dashboard</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="space-y-4">
          <SalesOverview />
          <div className="grid gap-4 md:grid-cols-2">
            <SalesChart />
            <TopProducts />
          </div>
          <RecentSales />
          <SalesTeamPerformance />
        </TabsContent>
        <TabsContent value="invoices" className="space-y-4">
          <NewInvoiceForm onSubmit={(invoice) => console.log("New invoice:", invoice)} />
          <Invoices />
        </TabsContent>
      </Tabs>
    </div>
  )
}

