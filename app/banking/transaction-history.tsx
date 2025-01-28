"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

type Transaction = {
  id: string
  date: string
  description: string
  amount: number
  type: "Credit" | "Debit"
  account: string
}

const initialTransactions: Transaction[] = [
  {
    id: "1",
    date: "2023-07-01",
    description: "Client Payment",
    amount: 5000,
    type: "Credit",
    account: "Business Checking",
  },
  {
    id: "2",
    date: "2023-07-02",
    description: "Office Rent",
    amount: 2000,
    type: "Debit",
    account: "Business Checking",
  },
  {
    id: "3",
    date: "2023-07-03",
    description: "Interest Earned",
    amount: 50,
    type: "Credit",
    account: "Business Savings",
  },
  {
    id: "4",
    date: "2023-07-04",
    description: "Utility Bill",
    amount: 200,
    type: "Debit",
    account: "Business Credit Card",
  },
  {
    id: "5",
    date: "2023-07-05",
    description: "Equipment Purchase",
    amount: 1000,
    type: "Debit",
    account: "Business Checking",
  },
]

export function TransactionHistory() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)
  const [searchTerm, setSearchTerm] = useState("")
  const [accountFilter, setAccountFilter] = useState("All")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(searchTerm)) &&
      (accountFilter === "All" || transaction.account === accountFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={accountFilter} onValueChange={setAccountFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Accounts</SelectItem>
              <SelectItem value="Business Checking">Business Checking</SelectItem>
              <SelectItem value="Business Savings">Business Savings</SelectItem>
              <SelectItem value="Business Credit Card">Business Credit Card</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Account</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <span className={transaction.type === "Credit" ? "text-green-600" : "text-red-600"}>
                    {transaction.type}
                  </span>
                </TableCell>
                <TableCell>{transaction.account}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

