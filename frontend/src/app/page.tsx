// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Sword, Shield, BookOpen, Trophy, Sparkles, Zap } from "lucide-react"

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <main className="container mx-auto px-4 py-12 md:py-20">
//         <div className="max-center space-y-12">
//           {/* Title */}
//           <div className="text-center space-y-6">
//             <div className="inline-block border-8 border-border bg-primary p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
//               <h1 className="text-5xl md:text-7xl font-bold pixel-text text-primary-foreground">勉強RPG</h1>
//               <p className="text-xl md:text-2xl font-mono text-primary-foreground/90 mt-2">STUDY QUEST</p>
//             </div>

//             <p className="text-xl md:text-2xl font-bold pixel-text text-foreground max-w-2xl mx-auto">
//               勉強時間でレベルアップ！
//               <br />
//               コインを集めて装備を強化しよう
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {/* Feature 1 */}
//             <div className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all">
//               <div className="w-16 h-16 bg-primary border-4 border-border flex items-center justify-center mb-4">
//                 <Zap className="w-8 h-8 text-primary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold pixel-text text-foreground mb-2">レベルアップ</h3>
//               <p className="text-sm font-mono text-muted-foreground">
//                 勉強時間に応じて経験値を獲得。レベルが上がるとステータスも強化！
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all">
//               <div className="w-16 h-16 bg-accent border-4 border-border flex items-center justify-center mb-4">
//                 <Sparkles className="w-8 h-8 text-accent-foreground" />
//               </div>
//               <h3 className="text-xl font-bold pixel-text text-foreground mb-2">コイン獲得</h3>
//               <p className="text-sm font-mono text-muted-foreground">
//                 勉強するとコインをゲット。ショップで装備を購入できる！
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all">
//               <div className="w-16 h-16 bg-secondary border-4 border-border flex items-center justify-center mb-4">
//                 <Sword className="w-8 h-8 text-secondary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold pixel-text text-foreground mb-2">装備システム</h3>
//               <p className="text-sm font-mono text-muted-foreground">
//                 武器・防具・アクセサリーを集めてアバターをカスタマイズ！
//               </p>
//             </div>

//             {/* Feature 4 */}
//             <div className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all">
//               <div className="w-16 h-16 bg-primary border-4 border-border flex items-center justify-center mb-4">
//                 <BookOpen className="w-8 h-8 text-primary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold pixel-text text-foreground mb-2">教科別管理</h3>
//               <p className="text-sm font-mono text-muted-foreground">
//                 数学、英語、理科など教科ごとに勉強時間を記録できる！
//               </p>
//             </div>

//             {/* Feature 5 */}
//             <div className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all">
//               <div className="w-16 h-16 bg-accent border-4 border-border flex items-center justify-center mb-4">
//                 <Trophy className="w-8 h-8 text-accent-foreground" />
//               </div>
//               <h3 className="text-xl font-bold pixel-text text-foreground mb-2">カレンダー</h3>
//               <p className="text-sm font-mono text-muted-foreground">
//                 GitHubの草のように勉強履歴を視覚化。継続が見える！
//               </p>
//             </div>

//             {/* Feature 6 */}
//             <div className="border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all">
//               <div className="w-16 h-16 bg-secondary border-4 border-border flex items-center justify-center mb-4">
//                 <Shield className="w-8 h-8 text-secondary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold pixel-text text-foreground mb-2">アバター</h3>
//               <p className="text-sm font-mono text-muted-foreground">自分だけの勉強戦士を育成。装備で見た目も変化！</p>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
//             <Link href="/register">
//               <Button
//                 size="lg"
//                 className="w-full sm:w-auto text-xl px-8 py-6 border-4 border-border bg-primary hover:bg-primary/90 text-primary-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all pixel-text"
//               >
//                 新規登録
//               </Button>
//             </Link>
//             <Link href="/login">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="w-full sm:w-auto text-xl px-8 py-6 border-4 border-border bg-card hover:bg-muted text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all pixel-text"
//               >
//                 ログイン
//               </Button>
//             </Link>
//           </div>

//           {/* Demo Info */}
//           <div className="text-center border-4 border-border bg-muted p-6 max-w-2xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
//             <p className="text-sm font-mono text-muted-foreground">
//               💡 勉強時間を記録するだけで自動的にレベルアップ！
//               <br />
//               ゲーム感覚で楽しく学習習慣を身につけよう
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
// app/todo/page.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue(""); // 入力欄をクリア
  };
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            ToDo リスト
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* 入力欄と追加ボタン */}
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="新しいタスクを入力..."
              className="flex-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button variant="default" onClick={addTodo}>
              追加
            </Button>
          </div>

          {/* タスクリスト（仮のUI） */}
          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li
                className="flex items-center justify-between border rounded-md p-2"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <span>{todo}</span>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeTodo(index)}
                >
                  削除
                </Button>
                <Button variant="outline" size="sm">
                  完了
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
