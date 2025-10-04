import type React from "react"
import { Card } from "@/components/ui/card"
import { Sword, Shield, Sparkles } from "lucide-react"

export function AvatarDisplay() {
  return (
    <Card className="border-4 border-border bg-card p-6 h-full">
      <div className="space-y-4">
        <h3 className="text-lg font-bold pixel-text text-foreground">アバター</h3>

        {/* Avatar Display */}
        <div className="aspect-square bg-muted border-4 border-border flex items-center justify-center relative overflow-hidden">
          <div className="w-32 h-32 bg-secondary/20 border-4 border-secondary flex items-center justify-center">
            <span className="text-6xl">📚</span>
          </div>

          {/* Equipment indicators */}
          <div className="absolute top-2 right-2 w-8 h-8 bg-primary border-2 border-border flex items-center justify-center">
            <Sword className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-accent border-2 border-border flex items-center justify-center">
            <Shield className="w-5 h-5 text-accent-foreground" />
          </div>
        </div>

        {/* Equipment List */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold font-mono text-muted-foreground">装備中</h4>
          <div className="space-y-1">
            <EquipmentItem icon={<Sword className="w-4 h-4" />} name="数学の剣 Lv.3" />
            <EquipmentItem icon={<Shield className="w-4 h-4" />} name="英語の盾 Lv.2" />
            <EquipmentItem icon={<Sparkles className="w-4 h-4" />} name="集中のお守り" />
          </div>
        </div>
      </div>
    </Card>
  )
}

function EquipmentItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-2 bg-muted border-2 border-border p-2">
      <div className="w-6 h-6 bg-primary flex items-center justify-center text-primary-foreground">{icon}</div>
      <span className="text-sm font-mono text-foreground">{name}</span>
    </div>
  )
}
