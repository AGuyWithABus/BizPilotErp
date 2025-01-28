"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type Employee = {
  id: string
  name: string
  position: string
  department: string
  salary: number
  startDate: string
}

const initialEmployees: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    salary: 85000,
    startDate: "2022-03-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "Marketing Manager",
    department: "Marketing",
    salary: 75000,
    startDate: "2021-09-01",
  },
  {
    id: "3",
    name: "Mike Johnson",
    position: "Sales Representative",
    department: "Sales",
    salary: 65000,
    startDate: "2023-01-10",
  },
  {
    id: "4",
    name: "Emily Brown",
    position: "HR Specialist",
    department: "Human Resources",
    salary: 70000,
    startDate: "2022-07-20",
  },
  {
    id: "5",
    name: "David Lee",
    position: "Financial Analyst",
    department: "Finance",
    salary: 80000,
    startDate: "2021-11-05",
  },
]

export function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Start Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>${employee.salary.toLocaleString()}</TableCell>
                <TableCell>{employee.startDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

