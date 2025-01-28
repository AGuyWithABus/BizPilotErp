import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartOfAccounts } from "./chart-of-accounts"
import { Journal } from "./journal"
import { Ledger } from "./ledger"

export default function AccountingPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Accounting</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Transaction
        </Button>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="chart-of-accounts">Chart of Accounts</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
          <TabsTrigger value="ledger">Ledger</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Entry</h2>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" id="date" />
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input type="number" id="amount" placeholder="0.00" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Enter transaction description" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="Select or enter category" />
                </div>
                <Button className="w-full">Add Transaction</Button>
              </form>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-07-01</TableCell>
                    <TableCell>Office Supplies</TableCell>
                    <TableCell>Expenses</TableCell>
                    <TableCell>-$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-07-02</TableCell>
                    <TableCell>Client Payment</TableCell>
                    <TableCell>Income</TableCell>
                    <TableCell>$1,500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-07-03</TableCell>
                    <TableCell>Utility Bill</TableCell>
                    <TableCell>Expenses</TableCell>
                    <TableCell>-$200.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="chart-of-accounts">
          <ChartOfAccounts />
        </TabsContent>
        <TabsContent value="journal">
          <Journal />
        </TabsContent>
        <TabsContent value="ledger">
          <Ledger />
        </TabsContent>
      </Tabs>
    </div>
  )
}

