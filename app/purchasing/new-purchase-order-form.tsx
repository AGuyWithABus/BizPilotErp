"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PurchaseOrderItem = {
  id: string
  description: string
  quantity: number
  unitPrice: number
}

export function NewPurchaseOrderForm() {
  const [supplier, setSupplier] = useState("")
  const [orderDate, setOrderDate] = useState("")
  const [items, setItems] = useState<PurchaseOrderItem[]>([])
  const [newItem, setNewItem] = useState<PurchaseOrderItem>({ id: "", description: "", quantity: 0, unitPrice: 0 })

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
    // Here you would typically send the data to your backend
    console.log({ supplier, orderDate, items, total: calculateTotal() })
    // Reset form
    setSupplier("")
    setOrderDate("")
    setItems([])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Purchase Order</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="supplier">Supplier</Label>
            <Input id="supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="orderDate">Order Date</Label>
            <Input
              id="orderDate"
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              required
            />
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
                  onChange={(e) => setNewItem({ ...newItem, quantity: Number.parseInt(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="itemUnitPrice">Unit Price</Label>
                <Input
                  id="itemUnitPrice"
                  type="number"
                  step="0.01"
                  value={newItem.unitPrice || ""}
                  onChange={(e) => setNewItem({ ...newItem, unitPrice: Number.parseFloat(e.target.value) })}
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
          <Button type="submit">Create Purchase Order</Button>
        </form>
      </CardContent>
    </Card>
  )
}

