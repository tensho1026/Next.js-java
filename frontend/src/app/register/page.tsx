"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import { registerSchemaRaw } from "@/schema/auth/auth-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchemaRaw),
  });

  const onSubmit = () => {
    console.log("送信しました");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="pixel-panel w-full max-w-md p-8 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary mx-auto flex items-center justify-center pixel-badge border-2 border-border">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold pixel-text text-foreground">
              STUDY QUEST
            </h1>
            <p className="text-sm font-mono text-muted-foreground">
              冒険の仲間に加わろう！
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="font-mono text-sm text-muted-foreground"
              >
                名前
              </Label>
              <Input
                id="name"
                placeholder="例: 勉強戦士"
                className="border-4 border-border font-mono"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name?.message}</p>
              )}
            </div>

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

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="font-mono text-sm text-muted-foreground"
              >
                確認用パスワード
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-4 border-border font-mono"
                {...register("passwordconfirm")}
              />
              {errors.passwordconfirm && (
                <p className="text-sm text-red-500">
                  {errors.passwordconfirm?.message}
                </p>
              )}
            </div>

            <Button
              className="w-full border-4 border-border font-bold pixel-text text-lg py-6"
              type="submit"
            >
              冒険に出る
            </Button>

            <div className="text-center text-sm font-mono text-muted-foreground">
              既に登録済みの方は
              <Link
                href="/login"
                className="ml-2 font-bold text-primary underline-offset-4 hover:underline"
              >
                ログイン
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
}
