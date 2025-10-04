import { DashboardHeader } from "@/components/dashboard-header";
import { RpgSidebar } from "@/components/rpg-sidebar";
import { StudyCalendar } from "@/components/study-calendar";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <RpgSidebar />
      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-6 md:pl-20">
        <h1 className="text-3xl font-bold pixel-text text-foreground">
          勉強カレンダー
        </h1>
        <StudyCalendar />
      </main>
    </div>
  );
}
