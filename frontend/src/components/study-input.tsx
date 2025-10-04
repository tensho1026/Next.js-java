"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, BookOpen } from "lucide-react"

export function StudyInput() {
  return (
    <Card className="border-4 border-border bg-card p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="text-xl font-bold pixel-text text-foreground">勉強時間を記録</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="subject" className="font-mono text-sm text-muted-foreground">
              教科
            </Label>
            <Input id="subject" placeholder="例: 数学" className="border-4 border-border font-mono" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours" className="font-mono text-sm text-muted-foreground">
              時間
            </Label>
            <Input id="hours" type="number" placeholder="0" className="border-4 border-border font-mono" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="minutes" className="font-mono text-sm text-muted-foreground">
              分
            </Label>
            <Input id="minutes" type="number" placeholder="0" className="border-4 border-border font-mono" />
          </div>
        </div>

        <Button className="w-full md:w-auto border-4 border-border font-bold pixel-text">
          <Plus className="w-5 h-5 mr-2" />
          記録する
        </Button>
      </div>
    </Card>
  )
}
