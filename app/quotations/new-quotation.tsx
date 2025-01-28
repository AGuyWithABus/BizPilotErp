"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type QuotationItem = {
  id: string
  description: string
  quantity: number
  unitPrice: number
}

export function NewQuotation() {
  const [customer, setCustomer] = useState("")
  const [items, setItems] = useState<QuotationItem[]>([])
  const [newItem, setNewItem] = useState<QuotationItem>({ id: "", description: "", quantity: 0, unitPrice: 0 })

  const addItem = () => {
    if (newItem.description && newItem.quantity > 0 && newItem.unitPrice > 0) {
      setItems([...items, { ...newItem, id: Date.now().toString() }])
      setNewItem({ id: "", description: "", quantity: 0, unitPrice: 0 })
    }
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the quotation data to your backend
    console.log({ customer, items, total: calculateTotal() })
    // Reset form
    setCustomer("")
    setItems([])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Quotation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="customer">Customer</Label>
            <Input id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>Items</Label>
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Input value={item.description} readOnly />
                <Input value={item.quantity} readOnly />
                <Input value={item.unitPrice} readOnly />
                <Button type="button" variant="destructive" onClick={() => removeItem(item.id)}>
                  Remove
                </Button>
              </div>
            ))}
            <div className="flex items-end space-x-2">
              <div className="flex-1">
                <Label htmlFor="itemDescription">Description</Label>
                <Input
                  id="itemDescription"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="itemQuantity">Quantity</Label>
                <Input
                  id="itemQuantity"
                  type="number"
                  value={newItem.quantity || ""}
                  onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="itemUnitPrice">Unit Price</Label>
                <Input
                  id="itemUnitPrice"
                  type="number"
                  step="0.01"
                  value={newItem.unitPrice || ""}
                  onChange={(e) => setNewItem({ ...newItem, unitPrice: Number(e.target.value) })}
                />
              </div>
              <Button type="button" onClick={addItem}>
                Add Item
              </Button>
            </div>
          </div>
          <div className="text-right">
            <strong>Total: ${calculateTotal().toFixed(2)}</strong>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Add any additional notes here..." />
          </div>
          <Button type="submit">Create Quotation</Button>
        </form>
      </CardContent>
    </Card>
  )
}

