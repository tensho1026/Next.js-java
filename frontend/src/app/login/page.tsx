"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sword } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schema/auth/auth-form";


export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    const res = await fetch("http://localhost:8080");
    const data = await res.text();
    console.log("送信", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="pixel-panel w-full max-w-md p-8 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary mx-auto flex items-center justify-center pixel-badge border-2 border-border">
              <Sword className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold pixel-text text-foreground">
              STUDY QUEST
            </h1>
            <p className="text-sm font-mono text-muted-foreground">
              勉強でレベルアップしよう！
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="font-mono text-sm text-muted-foreground"
              >
                メールアドレス
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="border-4 border-border font-mono"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email?.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="font-mono text-sm text-muted-foreground"
              >
                パスワード
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-4 border-border font-mono"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <Button className="w-full border-4 border-border font-bold pixel-text text-lg py-6">
              ログイン
            </Button>

            <div className="text-center text-sm font-mono text-muted-foreground">
              まだの方は
              <Link
                href="/register"
                className="ml-2 font-bold text-primary underline-offset-4 hover:underline"
              >
                新規登録
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
}
