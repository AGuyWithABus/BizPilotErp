"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const monthlyPurchases = [
  { month: "Jan", amount: 4000 },
  { month: "Feb", amount: 3000 },
  { month: "Mar", amount: 5000 },
  { month: "Apr", amount: 4500 },
  { month: "May", amount: 3500 },
  { month: "Jun", amount: 4200 },
]

const topSuppliers = [
  { name: "Tech Supplies Inc.", amount: 15000 },
  { name: "Office Furniture Co.", amount: 12000 },
  { name: "IT Solutions Corp.", amount: 10000 },
  { name: "Marketing Materials Ltd.", amount: 8000 },
  { name: "Stationery Wholesale", amount: 5000 },
]

export function PurchasingSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Purchases</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyPurchases}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Suppliers</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {topSuppliers.map((supplier, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{supplier.name}</span>
                <span className="font-semibold">${supplier.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

