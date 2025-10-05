"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, User, Calendar, Menu, X, Sword } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: Home, label: "ホーム", href: "/home" },
  { icon: ShoppingBag, label: "ショップ", href: "/shop" },
  { icon: User, label: "装備", href: "/equipment" },
  { icon: Calendar, label: "カレンダー", href: "/calender" },
]

export function RpgSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Hamburger Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 w-12 h-12 p-0 border-4 border-border bg-primary hover:bg-primary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
        aria-label="メニュー"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-primary-foreground" />
        )}
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r-8 border-border z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 absolute top-15">
          {/* Logo/Title */}
          {/* <div className="border-4 border-border bg-primary p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground flex items-center justify-center">
                <Sword className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold pixel-text text-primary-foreground">勉強RPG</h2>
                <p className="text-xs font-mono text-primary-foreground/80">STUDY QUEST</p>
              </div>
            </div>
          </div> */}

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-3 border-4 border-border transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${
                      isActive ? "bg-primary-foreground" : "bg-background"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-foreground"}`} />
                  </div>
                  <span className="font-bold pixel-text">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Player Info */}
          <div className="border-4 border-border bg-muted p-4 space-y-2">
            <p className="text-xs font-mono text-muted-foreground">PLAYER</p>
            <p className="text-lg font-bold pixel-text text-foreground">勉強戦士</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent animate-pulse" />
              <p className="text-xs font-mono text-muted-foreground">オンライン</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
