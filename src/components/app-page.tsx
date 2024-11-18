'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowRight, Heart, Shield, Zap, Github, Twitter, Linkedin } from 'lucide-react'

export function BlockPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
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
          <div className="flex space-x-2">
            <Button variant="outline" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-background text-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Elevate Your Impact with</span>
                <span className="block text-primary">Blockchain Donations</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                LedgerLift empowers donors and charities with transparent, secure, and efficient blockchain-based donations. 
                Make a lasting difference with every contribution.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/donate">Start Donating</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose LedgerLift?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Secure & Transparent"
                description="All transactions are recorded on the blockchain, ensuring complete transparency and security for every donation."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Instant Verification"
                description="Donations are verified instantly, allowing for immediate impact and real-time tracking of your contributions."
              />
              <FeatureCard
                icon={<Heart className="h-10 w-10 text-primary" />}
                title="Direct Impact"
                description="Your donations go directly to those in need, with minimal overhead and maximum impact on beneficiaries."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How LedgerLift Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">Create your LedgerLift account in minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Choose a Cause</h3>
                <p className="text-muted-foreground">Browse verified projects and select your cause</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Make a Donation</h3>
                <p className="text-muted-foreground">Contribute using cryptocurrency or traditional methods</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Track Impact</h3>
                <p className="text-muted-foreground">Monitor your donation's journey and impact in real-time</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-secondary-foreground/80 mb-10">
              Join thousands of donors who are changing lives through transparent, blockchain-powered donations.
            </p>
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest updates on projects, impact stories, and blockchain innovations in charitable giving.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#DDDE53" />
                  <path d="M4 12L12 16L20 12" stroke="#10293E" strokeWidth="2" />
                  <path d="M4 16L12 20L20 16" stroke="#10293E" strokeWidth="2" />
                </svg>
                <span className="text-2xl font-bold text-foreground">Ledger<span className="text-primary">Lift</span></span>
              </Link>
              <p className="mt-4 text-muted-foreground">Elevating charitable giving through blockchain technology.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} LedgerLift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}