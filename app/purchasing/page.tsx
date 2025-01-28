import { PurchaseOrderList } from "./purchase-order-list"
import { NewPurchaseOrderForm } from "./new-purchase-order-form"
import { PurchasingSummary } from "./purchasing-summary"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PurchasingPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Purchasing</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
          <TabsTrigger value="new">New Purchase Order</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <PurchasingSummary />
        </TabsContent>
        <TabsContent value="orders">
          <PurchaseOrderList />
        </TabsContent>
        <TabsContent value="new">
          <NewPurchaseOrderForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

