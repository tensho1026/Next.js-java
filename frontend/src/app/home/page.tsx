import { DashboardHeader } from "@/components/dashboard-header"
import { StatsPanel } from "@/components/stats-panel"
import { AvatarDisplay } from "@/components/avatar-display"

import { RpgSidebar } from "@/components/rpg-sidebar"
import { StudyInput } from "@/components/study-input"
import { StudyCalendar } from "@/components/study-calendar"

export default function HomePage() {

   




  return (
    <div className="min-h-screen bg-background">
      <RpgSidebar />

      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-6 md:pl-20">
        {/* Top Section: Stats and Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StatsPanel />
          </div>
          <div>
            <AvatarDisplay />
          </div>
        </div>

        {/* Study Input */}
        <StudyInput />

        {/* Calendar */}
        <StudyCalendar />
      </main>
    </div>
  )
}