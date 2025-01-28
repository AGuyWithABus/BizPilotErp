import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

export function Ledger() {
  const accounts = [
    {
      name: "Cash",
      transactions: [
        { date: "2023-07-01", description: "Office Supplies", debit: 0, credit: 150, balance: 9850 },
        { date: "2023-07-02", description: "Client Payment", debit: 1500, credit: 0, balance: 11350 },
      ],
    },
    {
      name: "Accounts Receivable",
      transactions: [
        { date: "2023-07-02", description: "Invoice Issued", debit: 2000, credit: 0, balance: 7000 },
        { date: "2023-07-05", description: "Payment Received", debit: 0, credit: 1000, balance: 6000 },
      ],
    },
    // Add more accounts as needed
  ]

  return (
    <div className="space-y-6">
      {accounts.map((account) => (
        <Card key={account.name} className="p-6">
          <h2 className="text-lg font-semibold mb-4">{account.name}</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Debit</TableHead>
                <TableHead>Credit</TableHead>
                <TableHead>Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {account.transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.debit > 0 ? `$${transaction.debit.toFixed(2)}` : ""}</TableCell>
                  <TableCell>{transaction.credit > 0 ? `$${transaction.credit.toFixed(2)}` : ""}</TableCell>
                  <TableCell>${transaction.balance.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ))}
    </div>
  )
}

