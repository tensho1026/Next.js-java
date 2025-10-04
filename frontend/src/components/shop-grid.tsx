import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sword, Shield, Sparkles, Coins } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const weapons = [
  { id: 1, name: "数学の剣", level: 1, price: 100, icon: "📐" },
  { id: 2, name: "英語の剣", level: 1, price: 100, icon: "📖" },
  { id: 3, name: "理科の剣", level: 1, price: 100, icon: "🔬" },
  { id: 4, name: "歴史の剣", level: 2, price: 250, icon: "📜" },
  { id: 5, name: "プログラミングの剣", level: 3, price: 500, icon: "💻" },
]

const armors = [
  { id: 1, name: "集中の盾", level: 1, price: 150, icon: "🛡️" },
  { id: 2, name: "忍耐の鎧", level: 2, price: 300, icon: "🦺" },
  { id: 3, name: "知恵の兜", level: 2, price: 300, icon: "⛑️" },
]

const accessories = [
  { id: 1, name: "集中のお守り", level: 1, price: 80, icon: "🔮" },
  { id: 2, name: "記憶のリング", level: 1, price: 120, icon: "💍" },
  { id: 3, name: "速読のメガネ", level: 2, price: 200, icon: "👓" },
]

export function ShopGrid() {
  return (
    <Tabs defaultValue="weapons" className="space-y-6">
      <TabsList className="border-4 border-border bg-muted">
        <TabsTrigger value="weapons" className="font-bold pixel-text">
          <Sword className="w-4 h-4 mr-2" />
          武器
        </TabsTrigger>
        <TabsTrigger value="armors" className="font-bold pixel-text">
          <Shield className="w-4 h-4 mr-2" />
          防具
        </TabsTrigger>
        <TabsTrigger value="accessories" className="font-bold pixel-text">
          <Sparkles className="w-4 h-4 mr-2" />
          アクセサリー
        </TabsTrigger>
      </TabsList>

      <TabsContent value="weapons">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weapons.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="armors">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {armors.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="accessories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessories.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ShopItem({
  item,
}: {
  item: { id: number; name: string; level: number; price: number; icon: string }
}) {
  return (
    <Card className="border-4 border-border bg-card p-4 space-y-4">
      <div className="aspect-square bg-muted border-4 border-border flex items-center justify-center">
        <span className="text-6xl">{item.icon}</span>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold pixel-text text-foreground">{item.name}</h3>
        <p className="text-sm font-mono text-muted-foreground">Lv.{item.level}</p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <Coins className="w-5 h-5 text-primary" />
            <span className="text-xl font-bold pixel-text text-foreground">{item.price}</span>
          </div>
          <Button size="sm" className="border-2 border-border font-bold pixel-text">
            購入
          </Button>
        </div>
      </div>
    </Card>
  )
}
