import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sword } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-4 border-border bg-card p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary mx-auto flex items-center justify-center">
            <Sword className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold pixel-text text-foreground">STUDY QUEST</h1>
          <p className="text-sm font-mono text-muted-foreground">勉強でレベルアップしよう！</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-mono text-sm text-muted-foreground">
              メールアドレス
            </Label>
            <Input id="email" type="email" placeholder="your@email.com" className="border-4 border-border font-mono" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-mono text-sm text-muted-foreground">
              パスワード
            </Label>
            <Input id="password" type="password" placeholder="••••••••" className="border-4 border-border font-mono" />
          </div>

          <Button className="w-full border-4 border-border font-bold pixel-text text-lg py-6">ログイン</Button>

          <Button variant="outline" className="w-full border-4 border-border font-bold pixel-text bg-transparent">
            新規登録
          </Button>
        </div>
      </Card>
    </div>
  )
}
