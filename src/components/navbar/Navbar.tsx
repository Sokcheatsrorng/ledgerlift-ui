import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export default function Navbar() {
  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#DDDE53" />
                <path d="M4 12L12 16L20 12" stroke="#10293E" strokeWidth="2" />
                <path d="M4 16L12 20L20 16" stroke="#10293E" strokeWidth="2" />
              </svg>
          <span className="text-2xl font-bold text-foreground">Ledger<span className="text-primary">Lift</span></span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link href="/projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
