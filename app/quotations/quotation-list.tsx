"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

type Quotation = {
  id: string
  date: string
  customer: string
  amount: number
  status: "Pending" | "Accepted" | "Rejected"
}

const initialQuotations: Quotation[] = [
  { id: "Q001", date: "2023-07-01", customer: "Acme Corp", amount: 5000, status: "Pending" },
  { id: "Q002", date: "2023-07-02", customer: "TechSolutions Inc", amount: 7500, status: "Accepted" },
  { id: "Q003", date: "2023-07-03", customer: "Global Enterprises", amount: 10000, status: "Rejected" },
  { id: "Q004", date: "2023-07-04", customer: "Local Business LLC", amount: 3000, status: "Pending" },
  { id: "Q005", date: "2023-07-05", customer: "Innovative Startups", amount: 6000, status: "Accepted" },
]

export function QuotationList() {
  const [quotations, setQuotations] = useState<Quotation[]>(initialQuotations)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredQuotations = quotations.filter(
    (quotation) =>
      (quotation.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quotation.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || quotation.status === statusFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quotation List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search quotations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Accepted">Accepted</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quotation ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredQuotations.map((quotation) => (
              <TableRow key={quotation.id}>
                <TableCell>{quotation.id}</TableCell>
                <TableCell>{quotation.date}</TableCell>
                <TableCell>{quotation.customer}</TableCell>
                <TableCell>${quotation.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      quotation.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : quotation.status === "Accepted"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {quotation.status}
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

