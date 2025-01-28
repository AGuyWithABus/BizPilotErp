import { MetricCard } from "@/components/metric-card"
import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, FileText, TrendingUp } from "lucide-react"

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between border-b bg-white px-8 py-4">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back!</h1>
          <p className="text-gray-500">Here&apos;s what&apos;s happening with your business</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button className="rounded-full">JP</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 p-8">
        <MetricCard
          title="Total Revenue"
          value="$24,500"
          change={{
            value: "12% from last month",
            type: "increase",
            period: "from last month",
          }}
          icon={<DollarSign className="h-5 w-5 text-blue-600" />}
        />
        <MetricCard
          title="Active Customers"
          value="145"
          change={{
            value: "8% from last month",
            type: "increase",
            period: "from last month",
          }}
          icon={<Users className="h-5 w-5 text-blue-600" />}
        />
        <MetricCard
          title="Pending Invoices"
          value="12"
          change={{
            value: "2 from last month",
            type: "decrease",
            period: "from last month",
          }}
          icon={<FileText className="h-5 w-5 text-blue-600" />}
        />
        <MetricCard
          title="Monthly Growth"
          value="15.2%"
          change={{
            value: "5% from last month",
            type: "increase",
            period: "from last month",
          }}
          icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
        />
      </div>

      <div className="px-8">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <div className="mt-4 rounded-lg border bg-white p-6">
          <p className="text-gray-500">No recent activity to display.</p>
        </div>
      </div>
    </div>
  )
}

