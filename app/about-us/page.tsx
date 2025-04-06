'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Users, Zap, Award } from 'lucide-react'
import { teamMembers } from '@/data/team'

export default function AboutUs() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="bg-gray-50">
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-us-background.jpg"
            alt="About Us background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.h1
            className="text-5xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <br></br>About AWS Cloud Club
          </motion.h1>
          <motion.p
            className="text-xl text-center text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering the next generation of cloud computing experts at the University of Kelaniya
          </motion.p>
        </div>
      </motion.section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                The AWS Cloud Club at the University of Kelaniya is dedicated to fostering a community 
                of cloud computing enthusiasts. Our mission is to empower students with the knowledge 
                and skills needed to thrive in the ever-evolving world of cloud technology.
              </p>
              <p className="text-lg text-gray-600">
                Through workshops, seminars, and hands-on projects, we aim to bridge the gap between 
                academic learning and real-world application of AWS services.
              </p>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700"
              variants={itemVariants}
            >
              <Image 
                src="/mission-image.jpg" 
                alt="Our Mission" 
                layout="fill" 
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="py-20 bg-gradient-to-b from-white to-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cloud, title: "AWS Workshops", description: "Hands-on sessions to learn AWS services" },
              { icon: Users, title: "Networking", description: "Connect with industry professionals and peers" },
              { icon: Zap, title: "Hackathons", description: "Compete and showcase your cloud skills" },
              { icon: Award, title: "Certifications", description: "Guidance for AWS certification exams" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <item.icon className="w-12 h-12 text-[#FF9900] mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        layout="fill" 
                        objectFit="cover" 
                        className="transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold mb-2">{member.position}</p>
                    <p className="text-sm text-gray-600">{member.email}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

