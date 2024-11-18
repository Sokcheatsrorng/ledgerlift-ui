
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-navy-800 text-white py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Elevate Your Impact with</span>
          <span className="block text-orange-400">Blockchain Donations</span>
        </h1>
        <p className="mt-6 text-xl text-navy-200">
          LedgerLift empowers donors and charities with transparent, secure, and efficient blockchain-based donations.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button 
            asChild 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600"
          >
            <Link href="/donate">Start Donating</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-orange-400 text-orange-400 hover:bg-orange-400/10"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}
