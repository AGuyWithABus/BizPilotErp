"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type NewInvoiceFormProps = {
  onSubmit: (invoice: {
    invoiceNumber: string
    customerName: string
    amount: number
    dueDate: string
    status: "Paid" | "Pending" | "Overdue"
  }) => void
}

export function NewInvoiceForm({ onSubmit }: NewInvoiceFormProps) {
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [amount, setAmount] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [status, setStatus] = useState<"Paid" | "Pending" | "Overdue">("Pending")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      invoiceNumber,
      customerName,
      amount: Number.parseFloat(amount),
      dueDate,
      status,
    })
    setInvoiceNumber("")
    setCustomerName("")
    setAmount("")
    setDueDate("")
    setStatus("Pending")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Invoice</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="invoiceNumber">Invoice Number</Label>
            <Input
              id="invoiceNumber"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="customerName">Customer Name</Label>
            <Input id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input id="dueDate" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={(value: "Paid" | "Pending" | "Overdue") => setStatus(value)}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Create Invoice</Button>
        </form>
      </CardContent>
    </Card>
  )
}

