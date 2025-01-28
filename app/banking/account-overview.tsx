import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, Wallet } from "lucide-react"

const accounts = [
  { name: "Business Checking", balance: 25000, type: "Checking", icon: Wallet },
  { name: "Business Savings", balance: 100000, type: "Savings", icon: DollarSign },
  { name: "Business Credit Card", balance: -5000, type: "Credit", icon: CreditCard },
]

export function AccountOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {accounts.map((account, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{account.name}</CardTitle>
            <account.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${Math.abs(account.balance).toLocaleString()}
              {account.balance < 0 && <span className="text-red-500"> (Owed)</span>}
            </div>
            <p className="text-xs text-muted-foreground">{account.type} Account</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

