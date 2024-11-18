// import Footer from "@/components/navbar/Footer";
// import Navbar from "@/components/navbar/Navbar";
// import HeroSection from "@/components/sections/HeroSection";


// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <HeroSection />
//         {/* <FeaturesSection />
//         <HowItWorksSection />
//         <CtaSection />
//         <NewsletterSection /> */}
//       </main>
//       <Footer />
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ArrowRight, Shield, Zap, BarChart } from 'lucide-react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('darkMode', (!isDarkMode).toString())
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (

    <div className={`min-h-screen bg-navy-50 dark:bg-navy-900 text-navy-900 dark:text-white transition-colors duration-300`}>
      <header className="sticky top-0 z-50 bg-transparent backdrop-blur-lg dark:bg-navy-800 shadow-md transition-colors duration-300">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <span className="text-xl font-bold">LedgerLift</span>
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              {['About', 'How It Works', 'Donatioins'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-navy-100 dark:bg-navy-700 text-navy-600 dark:text-gray-300 hover:bg-navy-200 dark:hover:bg-navy-600 transition-colors"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/login" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                  Log In
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/signup" className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-medium transition-all duration-200">
                  Sign Up
                </Link>
              </motion.div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-navy-600 dark:text-gray-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-navy-800"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {['About', 'How It Works', 'Projects'].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    {item}
                  </Link>
                ))}
                <Link href="/login" className="block text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                  Log In
                </Link>
                <Link href="/signup" className="block text-orange-500 hover:text-orange-600 transition-colors">
                  Sign Up
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="py-20 sm:py-32 bg-gradient-to-r from-navy-200 to-orange-100 dark:from-navy-100 dark:to-orange-100 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 dark:text-orange-500 text-navy-800 ">
                <span className='mb-4'>
                   Revolutionize Giving with{" "}
                </span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 dark:text-orange-500 text-navy-800 ">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-orange-600 bg-clip-text dark:text-navy-800 mt-5">
                  Blockchain Donations
                </span>
              </h1>

              <p className="text-xl text-navy-600 dark:text-gray-700 mb-10">
                LedgerLift leverages blockchain technology to create a transparent, secure, and efficient donation ecosystem. Empower global change with cryptocurrency giving.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/donate" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-medium transition-all duration-200 flex items-center justify-center">
                    Start Donating <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/learn-more" className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-navy-300 dark:border-navy-600 hover:border-orange-500 dark:hover:border-orange-500 text-navy-600 dark:text-gray-700 font-medium transition-all duration-200 flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-32  dark:bg-navy-800 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Blockchain Donations?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Enhanced Security", description: "Blockchain technology ensures your donations are secure and tamper-proof." },
                { icon: Zap, title: "Instant Transactions", description: "Experience near-instantaneous cross-border transfers with minimal fees." },
                { icon: BarChart, title: "Full Transparency", description: "Track your donations in real-time and see their impact on the blockchain." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-orange-200 dark:bg-navy-700 flex items-center justify-center text-orange-500 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-navy-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-navy-50 dark:bg-navy-900 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">How LedgerLift Works</h2>
              <p className="text-lg text-navy-600 dark:text-gray-300">Our platform simplifies the process of making impactful donations using blockchain technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Choose a Cause", description: "Browse through our curated list of verified charitable projects and select the cause you're passionate about." },
                { title: "Make a Crypto Donation", description: "Contribute using popular cryptocurrencies. Our platform supports Bitcoin, Ethereum, and more." },
                { title: "Track Your Impact", description: "Follow your donation's journey on the blockchain and see real-time updates on how it's making a difference." },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-navy-700 rounded-lg shadow-md p-6"
                >
                  <div className="text-2xl font-bold text-orange-500 mb-4">{`0${index + 1}`}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-navy-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-white dark:bg-navy-800 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Blockchain Donation Revolution</h2>
              <p className="text-lg text-navy-600 dark:text-gray-300 mb-8">Be part of a global community leveraging cryptocurrency for positive change. Start your journey with LedgerLift today.</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/signup" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-medium transition-all duration-200">
                  Create Your Account
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-100 dark:bg-navy-800 border-t border-navy-200 dark:border-navy-700 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <span className="text-xl font-bold">LedgerLift</span>
              </Link>
              <p className="text-navy-600 dark:text-gray-300">
                Elevating charitable giving through blockchain technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link href="/how-it-works" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">How It Works</Link></li>
                <li><Link href="/projects" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Projects</Link></li>
                <li><Link href="/faq" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'LinkedIn'].map((social) => (
                  <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="text-navy-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}