'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { resources } from '@/data/resources'

export default function Resources() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access our curated collection of AWS learning materials and tools
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Learning Materials Section */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-8"
            >
              Learning Materials
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.learning.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="rounded-full bg-[#FF9900]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <resource.icon className="w-6 h-6 text-[#FF9900]" />
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{resource.description}</CardDescription>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={resource.link} target='_blank' >Access Resource</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tools and Utilities Section */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl font-bold mb-8"
            >
              Tools & Utilities
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="rounded-full bg-[#FF9900]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <tool.icon className="w-6 h-6 text-[#FF9900]" />
                      </div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{tool.description}</CardDescription>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={tool.link} target='_blank'>Access Tool</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Additional Resources Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-[#232F3E] text-white rounded-lg p-8 mt-12"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Resources?</h2>
              <p className="mb-6">
                Join our AWS Cloud Club to get access to exclusive resources and learning materials
              </p>
              <Button asChild className="bg-[#FF9900] text-[#232F3E] hover:bg-[#FF9900]/90">
                <Link href="/join-us">Become a Member</Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

