import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  change: {
    value: string | number
    type: "increase" | "decrease"
    period: string
  }
  icon: React.ReactNode
}

export function MetricCard({ title, value, change, icon }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-500">{title}</h3>
          <div className="rounded-full bg-blue-50 p-2">{icon}</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div
            className={`flex items-center text-sm ${change.type === "increase" ? "text-green-600" : "text-red-600"}`}
          >
            {change.type === "increase" ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
            {change.value} {change.period}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

