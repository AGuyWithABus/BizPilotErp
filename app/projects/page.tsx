import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectList } from "./project-list"
import { ProjectTimeline } from "./project-timeline"
import { NewProject } from "./new-project"
import { ProjectAnalytics } from "./project-analytics"

export default function ProjectsPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Project List</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="new">New Project</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <ProjectList />
        </TabsContent>
        <TabsContent value="timeline">
          <ProjectTimeline />
        </TabsContent>
        <TabsContent value="new">
          <NewProject />
        </TabsContent>
        <TabsContent value="analytics">
          <ProjectAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  )
}

