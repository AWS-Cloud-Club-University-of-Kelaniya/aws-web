'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Users, Zap, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) => {
    return `${pos * 50}% 50%`
  })

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        ref={targetRef}
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ backgroundPosition: position }}
        >
          <Image 
            src="/hero-background2.jpg" 
            alt="Cloud computing background" 
            layout="fill" 
            objectFit="cover"
            quality={100} 
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </motion.div>
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to{' '}
              <span className="gradient-text">AWS Cloud Club</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Empowering students with cloud computing skills at the University of Kelaniya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#FF9900] text-[#232F3E] hover:bg-[#FF9900]/90"
              >
                <Link href="#about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[#232F3E]"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Link href="#about" className="text-white animate-bounce block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose AWS Cloud Club?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a community of cloud enthusiasts and future tech leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Learn AWS Services",
                description: "Get hands-on experience with the latest AWS technologies and services.",
                delay: 0.2
              },
              {
                icon: Users,
                title: "Network with Experts",
                description: "Connect with AWS professionals and like-minded students.",
                delay: 0.4
              },
              {
                icon: Award,
                title: "Earn Certifications",
                description: "Get support in achieving AWS certifications and advancing your career.",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.6 }}
              >
                <Card className="card-hover text-center h-full">
                  <CardHeader>
                    <div className="mx-auto rounded-full bg-[#FF9900]/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-[#FF9900]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600">
                AWS Cloud Club Captains are student leaders passionate about sharing their knowledge
                with the cloud computing community on campus. Join us to unlock opportunities in:
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Cloud, text: "Organizing and leading AWS-focused events" },
                  { icon: Users, text: "Growing your network with AWS experts" },
                  { icon: Zap, text: "Gaining hands-on experience with AWS" },
                  { icon: Award, text: "Receiving AWS credits and swag" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="rounded-full bg-[#FF9900]/10 p-2">
                      <item.icon className="w-5 h-5 text-[#FF9900]" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/team-photo.jpg"
                alt="AWS Cloud Club Team"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#232F3E]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Cloud Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join AWS Cloud Club today and take your first step towards becoming a cloud expert!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#232F3E] hover:bg-white/90"
            >
              <Link href="/join-us">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

