"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PayrollRun = {
  id: string
  date: string
  totalAmount: number
  employeeCount: number
  status: "Completed" | "Pending" | "Failed"
}

const initialPayrollRuns: PayrollRun[] = [
  { id: "1", date: "2023-06-30", totalAmount: 250000, employeeCount: 50, status: "Completed" },
  { id: "2", date: "2023-05-31", totalAmount: 245000, employeeCount: 49, status: "Completed" },
  { id: "3", date: "2023-04-30", totalAmount: 240000, employeeCount: 48, status: "Completed" },
  { id: "4", date: "2023-03-31", totalAmount: 235000, employeeCount: 47, status: "Completed" },
  { id: "5", date: "2023-02-28", totalAmount: 230000, employeeCount: 46, status: "Completed" },
]

export function PayrollHistory() {
  const [payrollRuns, setPayrollRuns] = useState<PayrollRun[]>(initialPayrollRuns)
  const [selectedYear, setSelectedYear] = useState<string>("2023")

  const filteredPayrollRuns = payrollRuns.filter((run) => run.date.startsWith(selectedYear))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payroll History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end mb-4">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Employee Count</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayrollRuns.map((run) => (
              <TableRow key={run.id}>
                <TableCell>{run.date}</TableCell>
                <TableCell>${run.totalAmount.toLocaleString()}</TableCell>
                <TableCell>{run.employeeCount}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      run.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : run.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {run.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

