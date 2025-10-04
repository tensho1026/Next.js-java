import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function StudyCalendar() {
  // Generate sample data for the last 12 weeks
  const weeks = 12
  const daysPerWeek = 7

  return (
    <Card className="border-4 border-border bg-card p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center">
            <Calendar className="w-6 h-6 text-secondary-foreground" />
          </div>
          <h2 className="text-xl font-bold pixel-text text-foreground">勉強カレンダー</h2>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-2">
          <div className="flex gap-1 text-xs font-mono text-muted-foreground mb-2">
            <span className="w-8">月</span>
            <span className="w-8">火</span>
            <span className="w-8">水</span>
            <span className="w-8">木</span>
            <span className="w-8">金</span>
            <span className="w-8">土</span>
            <span className="w-8">日</span>
          </div>

          <div className="space-y-1">
            {Array.from({ length: weeks }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex gap-1">
                {Array.from({ length: daysPerWeek }).map((_, dayIndex) => {
                  const intensity = Math.random()
                  return <CalendarDay key={dayIndex} intensity={intensity} />
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 pt-4 text-xs font-mono text-muted-foreground">
            <span>少ない</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-muted border-2 border-border" />
              <div className="w-4 h-4 bg-accent/30 border-2 border-border" />
              <div className="w-4 h-4 bg-accent/60 border-2 border-border" />
              <div className="w-4 h-4 bg-accent border-2 border-border" />
            </div>
            <span>多い</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

function CalendarDay({ intensity }: { intensity: number }) {
  let bgColor = "bg-muted"

  if (intensity > 0.7) {
    bgColor = "bg-accent"
  } else if (intensity > 0.4) {
    bgColor = "bg-accent/60"
  } else if (intensity > 0.1) {
    bgColor = "bg-accent/30"
  }

  return (
    <div
      className={`w-8 h-8 ${bgColor} border-2 border-border hover:border-primary transition-colors cursor-pointer`}
      title={`${Math.floor(intensity * 5)} hours`}
    />
  )
}
