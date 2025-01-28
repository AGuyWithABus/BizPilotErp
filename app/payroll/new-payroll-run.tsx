"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NewPayrollRun() {
  const [payPeriod, setPayPeriod] = useState("")
  const [payDate, setPayDate] = useState("")
  const [payType, setPayType] = useState("regular")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payroll run
    console.log({ payPeriod, payDate, payType })
    // Reset form
    setPayPeriod("")
    setPayDate("")
    setPayType("regular")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Payroll Run</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="payPeriod">Pay Period</Label>
            <Input
              id="payPeriod"
              value={payPeriod}
              onChange={(e) => setPayPeriod(e.target.value)}
              placeholder="e.g., June 1-15, 2023"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="payDate">Pay Date</Label>
            <Input id="payDate" type="date" value={payDate} onChange={(e) => setPayDate(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="payType">Pay Type</Label>
            <Select value={payType} onValueChange={setPayType}>
              <SelectTrigger id="payType">
                <SelectValue placeholder="Select pay type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular</SelectItem>
                <SelectItem value="bonus">Bonus</SelectItem>
                <SelectItem value="commission">Commission</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Process Payroll Run</Button>
        </form>
      </CardContent>
    </Card>
  )
}

