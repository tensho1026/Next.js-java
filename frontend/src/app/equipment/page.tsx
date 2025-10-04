import { DashboardHeader } from "@/components/dashboard-header"
import { RpgSidebar } from "@/components/rpg-sidebar"
import { Card } from "@/components/ui/card"
import { Sword, Shield, Gem } from "lucide-react"

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <RpgSidebar />
      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-6 md:pl-20">
        <h1 className="text-3xl font-bold pixel-text text-foreground">装備管理</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weapon Slot */}
          <Card className="border-4 border-border bg-card p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-destructive flex items-center justify-center">
                  <Sword className="w-7 h-7 text-destructive-foreground" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">WEAPON</p>
                  <p className="text-xl font-bold pixel-text text-foreground">武器</p>
                </div>
              </div>
              <div className="border-4 border-border bg-muted p-6 min-h-[200px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-destructive mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                    <Sword className="w-10 h-10 text-destructive-foreground" />
                  </div>
                  <p className="font-bold pixel-text text-foreground">数学の剣</p>
                  <p className="text-xs font-mono text-muted-foreground">ATK +15</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Armor Slot */}
          <Card className="border-4 border-border bg-card p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Shield className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">ARMOR</p>
                  <p className="text-xl font-bold pixel-text text-foreground">防具</p>
                </div>
              </div>
              <div className="border-4 border-border bg-muted p-6 min-h-[200px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-secondary mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                    <Shield className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <p className="font-bold pixel-text text-foreground">英語の盾</p>
                  <p className="text-xs font-mono text-muted-foreground">DEF +12</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Accessory Slot */}
          <Card className="border-4 border-border bg-card p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent flex items-center justify-center">
                  <Gem className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">ACCESSORY</p>
                  <p className="text-xl font-bold pixel-text text-foreground">アクセサリー</p>
                </div>
              </div>
              <div className="border-4 border-border bg-muted p-6 min-h-[200px] flex items-center justify-center">
                <p className="text-sm font-mono text-muted-foreground">装備なし</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Summary */}
        <Card className="border-4 border-border bg-card p-6">
          <h2 className="text-xl font-bold pixel-text text-foreground mb-4">ステータス</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-4 border-border bg-muted p-4">
              <p className="text-xs font-mono text-muted-foreground">ATK</p>
              <p className="text-2xl font-bold pixel-text text-destructive">15</p>
            </div>
            <div className="border-4 border-border bg-muted p-4">
              <p className="text-xs font-mono text-muted-foreground">DEF</p>
              <p className="text-2xl font-bold pixel-text text-secondary">12</p>
            </div>
            <div className="border-4 border-border bg-muted p-4">
              <p className="text-xs font-mono text-muted-foreground">SPD</p>
              <p className="text-2xl font-bold pixel-text text-accent">8</p>
            </div>
            <div className="border-4 border-border bg-muted p-4">
              <p className="text-xs font-mono text-muted-foreground">LUK</p>
              <p className="text-2xl font-bold pixel-text text-primary">10</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
