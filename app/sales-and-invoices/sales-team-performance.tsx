import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const salesTeam = [
  { name: "Alice Johnson", sales: 45000, target: 50000 },
  { name: "Bob Smith", sales: 38000, target: 40000 },
  { name: "Charlie Brown", sales: 52000, target: 45000 },
  { name: "Diana Davis", sales: 30000, target: 35000 },
]

export function SalesTeamPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Team Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {salesTeam.map((member, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{member.name}</span>
                <span>{Math.round((member.sales / member.target) * 100)}%</span>
              </div>
              <Progress value={(member.sales / member.target) * 100} />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>${member.sales.toLocaleString()}</span>
                <span>Target: ${member.target.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

