"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

const projectTimeline = [
  { name: "Website Redesign", start: new Date(2023, 4, 1), end: new Date(2023, 7, 31) },
  { name: "Mobile App Development", start: new Date(2023, 5, 15), end: new Date(2023, 11, 31) },
  { name: "CRM Implementation", start: new Date(2023, 1, 1), end: new Date(2023, 4, 31) },
  { name: "Data Migration", start: new Date(2023, 6, 1), end: new Date(2023, 8, 30) },
  { name: "Security Audit", start: new Date(2023, 7, 1), end: new Date(2023, 9, 31) },
]

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
}

const chartData = projectTimeline.map((project) => ({
  name: project.name,
  start: formatDate(project.start),
  end: formatDate(project.end),
}))

export function ProjectTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} layout="vertical" barSize={20}>
            <XAxis type="category" dataKey="start" />
            <YAxis type="category" dataKey="name" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="start" stackId="a" fill="#8884d8" name="Start Date" />
            <Bar dataKey="end" stackId="a" fill="#82ca9d" name="End Date" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

