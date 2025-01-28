"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

const projectData = [
  { name: "In Progress", value: 3 },
  { name: "Completed", value: 1 },
  { name: "On Hold", value: 1 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function ProjectAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Project Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectData.map((entry, index) => (
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
          <CardTitle>Project Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Total Projects</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Average Project Duration</h3>
              <p className="text-2xl font-bold">4.2 months</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Budget</h3>
              <p className="text-2xl font-bold">$280,000</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

