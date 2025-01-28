import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentSales = [
  { id: 1, customer: "John Doe", product: "Product A", amount: 1234, date: "2023-07-15" },
  { id: 2, customer: "Jane Smith", product: "Product B", amount: 5678, date: "2023-07-14" },
  { id: 3, customer: "Bob Johnson", product: "Product C", amount: 9012, date: "2023-07-13" },
  { id: 4, customer: "Alice Brown", product: "Product D", amount: 3456, date: "2023-07-12" },
  { id: 5, customer: "Charlie Davis", product: "Product E", amount: 7890, date: "2023-07-11" },
]

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${sale.customer}`} />
                    <AvatarFallback>
                      {sale.customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{sale.customer}</span>
                </TableCell>
                <TableCell>{sale.product}</TableCell>
                <TableCell>${sale.amount}</TableCell>
                <TableCell>{sale.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

