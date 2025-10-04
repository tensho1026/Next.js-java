import { DashboardHeader } from "@/components/dashboard-header"
import { ShopGrid } from "@/components/shop-grid"
import { Coins } from "lucide-react"
import { RpgSidebar } from "@/components/rpg-sidebar"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <RpgSidebar />

      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-6 md:pl-20">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold pixel-text text-foreground">装備ショップ</h1>
          <div className="flex items-center gap-2 bg-primary border-4 border-border px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            <Coins className="w-6 h-6 text-primary-foreground" />
            <span className="text-2xl font-bold pixel-text text-primary-foreground">1,250</span>
          </div>
        </div>

        <ShopGrid />
      </main>
    </div>
  )
}
