import type React from "react"
import { Card } from "@/components/ui/card"
import { Trophy, Coins, Calendar, Clock, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function StatsPanel() {
  return (
    <Card className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
      <div className="space-y-6">
        {/* Level and XP */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                <Trophy className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">LEVEL</p>
                <p className="text-3xl font-bold pixel-text text-foreground">15</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                <Coins className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">COINS</p>
                <p className="text-3xl font-bold pixel-text text-foreground">1,250</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-mono">
              <span className="text-muted-foreground">XP: 2,450 / 3,000</span>
              <span className="text-accent font-bold">82%</span>
            </div>
            <Progress value={82} className="h-4 border-2 border-border" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard
            icon={<Calendar className="w-5 h-5" />}
            label="勉強日数"
            value="45"
            unit="日"
            color="bg-secondary"
          />
          <StatCard icon={<Clock className="w-5 h-5" />} label="総合時間" value="127" unit="時間" color="bg-accent" />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="週時間"
            value="18"
            unit="時間"
            color="bg-primary"
          />
        </div>
      </div>
    </Card>
  )
}

function StatCard({
  icon,
  label,
  value,
  unit,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  unit: string
  color: string
}) {
  return (
    <div className="border-4 border-border bg-muted p-4 space-y-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
      <div
        className={`w-8 h-8 ${color} flex items-center justify-center text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]`}
      >
        {icon}
      </div>
      <p className="text-xs text-muted-foreground font-mono">{label}</p>
      <p className="text-2xl font-bold pixel-text text-foreground">
        {value}
        <span className="text-sm ml-1">{unit}</span>
      </p>
    </div>
  )
}
