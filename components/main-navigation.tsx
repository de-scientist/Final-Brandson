"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag, 
  Eye, 
  Info, 
  Phone,
  Mail,
  ChevronDown
} from "lucide-react"

interface NavigationItem {
  title: string
  href: string
  icon: React.ReactNode
  badge?: string
  description?: string
}

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const navigationItems: NavigationItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
      description: "Return to homepage"
    },
    {
      title: "Services",
      href: "/services",
      icon: <ShoppingBag className="h-4 w-4" />,
      description: "Browse our printing services"
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: <Eye className="h-4 w-4" />,
      description: "View our work"
    },
    {
      title: "About",
      href: "/about",
      icon: <Info className="h-4 w-4" />,
      description: "Learn about us"
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <Phone className="h-4 w-4" />,
      description: "Get in touch"
    }
  ]

  const renderNavigationItems = (items: NavigationItem[]) => {
    return items.map((item) => {
      const isActive = pathname === item.href
      return (
        <Button
          key={item.href}
          asChild
          variant={isActive ? "secondary" : "ghost"}
          size="sm"
          className="w-full justify-start text-left hover:bg-primary hover:text-primary-foreground"
        >
          <Link href={item.href} className="flex items-center gap-3">
            {item.icon}
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              {item.badge && (
                <Badge variant="secondary" className="text-xs ml-2">
                  {item.badge}
                </Badge>
              )}
            </div>
          </Link>
        </Button>
      )
    })
  }

  if (!isClient) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">Brandson Media</span>
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-xl">Brandson Media</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground ${
                pathname === item.href ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
              {item.badge && (
                <Badge variant="secondary" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2">
              {renderNavigationItems(navigationItems)}
            </div>
            
            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+254 701 869 821</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>brandsonmedia@gmail.com</span>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="https://wa.me/254701869821" target="_blank">
                    WhatsApp Chat
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
