import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  FileText,
  LogOut,
  Calculator,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  FolderKanban,
  Settings,
} from "lucide-react"

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-60 bg-[#2B47B5] text-white">
      <div className="p-4 text-2xl font-bold">BizPilot</div>
      <nav className="mt-8 space-y-1 px-2">
        <Link href="/" className="flex items-center space-x-3 rounded-lg bg-white/10 px-4 py-3 text-white">
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/contacts"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <Users className="h-5 w-5" />
          <span>Contacts</span>
        </Link>
        <Link
          href="/sales-and-invoices"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <FileText className="h-5 w-5" />
          <span>Sales & Invoices</span>
        </Link>
        <Link
          href="/accounting"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <Calculator className="h-5 w-5" />
          <span>Accounting</span>
        </Link>
        <Link
          href="/purchasing"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Purchasing</span>
        </Link>
        <Link
          href="/payroll"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <DollarSign className="h-5 w-5" />
          <span>Payroll</span>
        </Link>
        <Link
          href="/projects"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <FolderKanban className="h-5 w-5" />
          <span>Projects</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
      <div className="absolute bottom-8 w-full px-2">
        <button className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-white/70 hover:bg-white/10">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

