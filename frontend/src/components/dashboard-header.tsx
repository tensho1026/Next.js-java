import { Sword, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="border-b-4 border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Sword className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold pixel-text text-foreground">STUDY QUEST</h1>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="pixel-border">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="pixel-border">
              <User className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
