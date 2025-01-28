import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react"

export function SalesOverview() {
  const stats = [
    { title: "Total Revenue", value: "$54,231", change: 12.5, icon: DollarSign },
    { title: "Sales", value: "345", change: -2.4, icon: ShoppingCart },
    { title: "New Customers", value: "42", change: 8.2, icon: Users },
    { title: "Growth Rate", value: "15.2%", change: 3.1, icon: TrendingUp },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.change > 0 ? "text-green-500" : "text-red-500"} flex items-center`}>
              {stat.change > 0 ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              {Math.abs(stat.change)}%
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

