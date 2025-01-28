import { SalesOverview } from "./sales-overview"
import { SalesChart } from "./sales-chart"
import { TopProducts } from "./top-products"
import { RecentSales } from "./recent-sales"
import { SalesTeamPerformance } from "./sales-team-performance"

export default function SalesPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>
      <SalesOverview />
      <div className="grid gap-8 md:grid-cols-2">
        <SalesChart />
        <TopProducts />
      </div>
      <RecentSales />
      <SalesTeamPerformance />
    </div>
  )
}

