import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanySettings } from "./company-settings"
import { UserSettings } from "./user-settings"
import { NotificationSettings } from "./notification-settings"
import { SecuritySettings } from "./security-settings"

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Tabs defaultValue="company" className="space-y-4">
        <TabsList>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="company">
          <CompanySettings />
        </TabsContent>
        <TabsContent value="user">
          <UserSettings />
        </TabsContent>
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

