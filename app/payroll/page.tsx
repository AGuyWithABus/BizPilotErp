import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PayrollSummary } from "./payroll-summary"
import { EmployeeList } from "./employee-list"
import { PayrollHistory } from "./payroll-history"
import { NewPayrollRun } from "./new-payroll-run"

export default function PayrollPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Payroll</h1>
      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="history">Payroll History</TabsTrigger>
          <TabsTrigger value="new-run">New Payroll Run</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <PayrollSummary />
        </TabsContent>
        <TabsContent value="employees">
          <EmployeeList />
        </TabsContent>
        <TabsContent value="history">
          <PayrollHistory />
        </TabsContent>
        <TabsContent value="new-run">
          <NewPayrollRun />
        </TabsContent>
      </Tabs>
    </div>
  )
}

