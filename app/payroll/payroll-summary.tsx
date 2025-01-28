import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

const payrollData = [
  { name: "Salaries", value: 150000 },
  { name: "Taxes", value: 45000 },
  { name: "Benefits", value: 30000 },
  { name: "Bonuses", value: 20000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function PayrollSummary() {
  const totalPayroll = payrollData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Payroll Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={payrollData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {payrollData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payroll Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Total Payroll</h3>
              <p className="text-2xl font-bold">${totalPayroll.toLocaleString()}</p>
            </div>
            {payrollData.map((item, index) => (
              <div key={index}>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-lg">
                  ${item.value.toLocaleString()} ({((item.value / totalPayroll) * 100).toFixed(1)}%)
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

