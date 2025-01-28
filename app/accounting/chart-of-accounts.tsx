import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

export function ChartOfAccounts() {
  const accounts = [
    { id: "1000", name: "Cash", type: "Asset", balance: 10000 },
    { id: "1100", name: "Accounts Receivable", type: "Asset", balance: 5000 },
    { id: "2000", name: "Accounts Payable", type: "Liability", balance: 3000 },
    { id: "3000", name: "Owner's Equity", type: "Equity", balance: 12000 },
    { id: "4000", name: "Revenue", type: "Income", balance: 20000 },
    { id: "5000", name: "Expenses", type: "Expense", balance: 15000 },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Chart of Accounts</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Account ID</TableHead>
            <TableHead>Account Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell>{account.id}</TableCell>
              <TableCell>{account.name}</TableCell>
              <TableCell>{account.type}</TableCell>
              <TableCell>${account.balance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

