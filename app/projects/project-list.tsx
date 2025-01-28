"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type Project = {
  id: string
  name: string
  status: "In Progress" | "Completed" | "On Hold"
  startDate: string
  endDate: string
  budget: number
}

const initialProjects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    status: "In Progress",
    startDate: "2023-05-01",
    endDate: "2023-08-31",
    budget: 50000,
  },
  {
    id: "2",
    name: "Mobile App Development",
    status: "In Progress",
    startDate: "2023-06-15",
    endDate: "2023-12-31",
    budget: 100000,
  },
  {
    id: "3",
    name: "CRM Implementation",
    status: "Completed",
    startDate: "2023-02-01",
    endDate: "2023-05-31",
    budget: 75000,
  },
  { id: "4", name: "Data Migration", status: "On Hold", startDate: "2023-07-01", endDate: "2023-09-30", budget: 30000 },
  {
    id: "5",
    name: "Security Audit",
    status: "In Progress",
    startDate: "2023-08-01",
    endDate: "2023-10-31",
    budget: 25000,
  },
]

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Budget</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      project.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </TableCell>
                <TableCell>{project.startDate}</TableCell>
                <TableCell>{project.endDate}</TableCell>
                <TableCell>${project.budget.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

