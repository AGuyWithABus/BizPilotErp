"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type PurchaseOrder = {
  id: string
  orderNumber: string
  supplier: string
  totalAmount: number
  orderDate: string
  status: "Pending" | "Approved" | "Received" | "Cancelled"
}

const initialPurchaseOrders: PurchaseOrder[] = [
  {
    id: "1",
    orderNumber: "PO-001",
    supplier: "Tech Supplies Inc.",
    totalAmount: 5000,
    orderDate: "2023-07-01",
    status: "Approved",
  },
  {
    id: "2",
    orderNumber: "PO-002",
    supplier: "Office Furniture Co.",
    totalAmount: 3500,
    orderDate: "2023-07-05",
    status: "Pending",
  },
  {
    id: "3",
    orderNumber: "PO-003",
    supplier: "Marketing Materials Ltd.",
    totalAmount: 1200,
    orderDate: "2023-07-10",
    status: "Received",
  },
  {
    id: "4",
    orderNumber: "PO-004",
    supplier: "IT Solutions Corp.",
    totalAmount: 8000,
    orderDate: "2023-07-15",
    status: "Approved",
  },
  {
    id: "5",
    orderNumber: "PO-005",
    supplier: "Stationery Wholesale",
    totalAmount: 500,
    orderDate: "2023-07-20",
    status: "Cancelled",
  },
]

export function PurchaseOrderList() {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>(initialPurchaseOrders)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPurchaseOrders = purchaseOrders.filter(
    (po) =>
      po.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      po.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      po.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search purchase orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order Number</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPurchaseOrders.map((po) => (
              <TableRow key={po.id}>
                <TableCell>{po.orderNumber}</TableCell>
                <TableCell>{po.supplier}</TableCell>
                <TableCell>${po.totalAmount.toFixed(2)}</TableCell>
                <TableCell>{po.orderDate}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      po.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : po.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : po.status === "Received"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                    }`}
                  >
                    {po.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

