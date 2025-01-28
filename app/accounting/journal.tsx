import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

export function Journal() {
  const entries = [
    { id: 1, date: "2023-07-01", description: "Office Supplies", debit: 150, credit: 0, account: "Expenses" },
    { id: 2, date: "2023-07-01", description: "Office Supplies", debit: 0, credit: 150, account: "Cash" },
    { id: 3, date: "2023-07-02", description: "Client Payment", debit: 1500, credit: 0, account: "Cash" },
    { id: 4, date: "2023-07-02", description: "Client Payment", debit: 0, credit: 1500, account: "Revenue" },
    { id: 5, date: "2023-07-03", description: "Utility Bill", debit: 200, credit: 0, account: "Expenses" },
    { id: 6, date: "2023-07-03", description: "Utility Bill", debit: 0, credit: 200, account: "Accounts Payable" },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Journal Entries</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Debit</TableHead>
            <TableHead>Credit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.description}</TableCell>
              <TableCell>{entry.account}</TableCell>
              <TableCell>{entry.debit > 0 ? `$${entry.debit.toFixed(2)}` : ""}</TableCell>
              <TableCell>{entry.credit > 0 ? `$${entry.credit.toFixed(2)}` : ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

