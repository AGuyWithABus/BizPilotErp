"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NewInvoiceForm } from "./new-invoice-form"

type Invoice = {
  id: string
  invoiceNumber: string
  customerName: string
  amount: number
  dueDate: string
  status: "Paid" | "Pending" | "Overdue"
}

const initialInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    customerName: "Acme Corp",
    amount: 1000,
    dueDate: "2023-07-15",
    status: "Pending",
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    customerName: "Globex Inc",
    amount: 1500,
    dueDate: "2023-07-10",
    status: "Paid",
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    customerName: "Umbrella LLC",
    amount: 2000,
    dueDate: "2023-07-20",
    status: "Overdue",
  },
]

export function Invoices() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices)
  const [searchTerm, setSearchTerm] = useState("")
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState(false)

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.amount.toString().includes(searchTerm) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const addInvoice = (newInvoice: Omit<Invoice, "id">) => {
    const invoice = { ...newInvoice, id: Date.now().toString() }
    setInvoices([...invoices, invoice])
    setShowNewInvoiceForm(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search invoices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={() => setShowNewInvoiceForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Invoice
        </Button>
      </div>

      {showNewInvoiceForm && <NewInvoiceForm onSubmit={addInvoice} onCancel={() => setShowNewInvoiceForm(false)} />}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.invoiceNumber}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {invoice.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

