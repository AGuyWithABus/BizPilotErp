"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const monthlyData = [
  { month: "Jan", income: 10000, expenses: 8000 },
  { month: "Feb", income: 12000, expenses: 9000 },
  { month: "Mar", income: 15000, expenses: 10000 },
  { month: "Apr", income: 14000, expenses: 11000 },
  { month: "May", income: 16000, expenses: 10500 },
  { month: "Jun", income: 18000, expenses: 12000 },
]

export function BankingAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Total Income</h3>
              <p className="text-2xl font-bold">
                ${monthlyData.reduce((sum, data) => sum + data.income, 0).toLocaleString()}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Expenses</h3>
              <p className="text-2xl font-bold">
                ${monthlyData.reduce((sum, data) => sum + data.expenses, 0).toLocaleString()}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Net Profit</h3>
              <p className="text-2xl font-bold">
                $
                {(
                  monthlyData.reduce((sum, data) => sum + data.income, 0) -
                  monthlyData.reduce((sum, data) => sum + data.expenses, 0)
                ).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

