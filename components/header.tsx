'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  // const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className="fixed w-full z-50 bg-white transition-all duration-300 shadow-lg"
      style={{ backgroundImage: 'url(/)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      /*className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 nav-blur shadow-lg' 
          : 'bg-transparent'
      }`}*/
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/aws_logo.png"
              alt="AWS Cloud Club Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-[#232F3E] hidden md:inline-block">
              AWS Cloud Club
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About Us' },
              { href: '/events', label: 'Events' },
              { href: '/resources', label: 'Resources' },
              { href: '/contact-us', label: 'Contact' },
            ].map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <Button 
              asChild 
              variant="default" 
              className="bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] hover:opacity-90 transition-opacity"
            >
              <Link href="/join-us">Join Us</Link>
            </Button>
          </nav>

          <button 
            className="md:hidden text-[#232F3E]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 nav-blur"
          >
            <nav className="flex flex-col items-center py-6 space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/events', label: 'Events' },
                { href: '/resources', label: 'Resources' },
                { href: '/contact-us', label: 'Contact' },
              ].map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button 
                asChild 
                variant="default" 
                className="bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] hover:opacity-90 transition-opacity w-32"
              >
                <Link href="/join-us">Join Us</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link 
      href={href} 
      className="relative text-[#232F3E] hover:text-[#FF9900] transition-colors duration-200 group py-2"
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </span>
    </Link>
  )
}

