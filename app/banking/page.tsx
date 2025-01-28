import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountOverview } from "./account-overview"
import { TransactionHistory } from "./transaction-history"
import { TransferFunds } from "./transfer-funds"
import { BankingAnalytics } from "./banking-analytics"

export default function BankingPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Banking</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Account Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          <TabsTrigger value="transfer">Transfer Funds</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <AccountOverview />
        </TabsContent>
        <TabsContent value="transactions">
          <TransactionHistory />
        </TabsContent>
        <TabsContent value="transfer">
          <TransferFunds />
        </TabsContent>
        <TabsContent value="analytics">
          <BankingAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  )
}

