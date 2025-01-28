"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TransferFunds() {
  const [fromAccount, setFromAccount] = useState("")
  const [toAccount, setToAccount] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the fund transfer
    console.log({ fromAccount, toAccount, amount })
    // Reset form
    setFromAccount("")
    setToAccount("")
    setAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Funds</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="fromAccount">From Account</Label>
            <Select value={fromAccount} onValueChange={setFromAccount}>
              <SelectTrigger id="fromAccount">
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Business Checking">Business Checking</SelectItem>
                <SelectItem value="Business Savings">Business Savings</SelectItem>
                <SelectItem value="Business Credit Card">Business Credit Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="toAccount">To Account</Label>
            <Select value={toAccount} onValueChange={setToAccount}>
              <SelectTrigger id="toAccount">
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Business Checking">Business Checking</SelectItem>
                <SelectItem value="Business Savings">Business Savings</SelectItem>
                <SelectItem value="Business Credit Card">Business Credit Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>
          <Button type="submit">Transfer Funds</Button>
        </form>
      </CardContent>
    </Card>
  )
}

