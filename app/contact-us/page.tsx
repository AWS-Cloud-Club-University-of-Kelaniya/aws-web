'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactForm from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'
import { contacts } from '@/data/contact-us'

export default function ContactUs() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero.jpg"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{`Do you have any questions?`}</h1>
          <p className="text-xl opacity-90">{`We're here to help and answer any question you might have`}</p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto rounded-full bg-[#FF9900]/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-[#FF9900]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{item?.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 whitespace-pre-line">{item?.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{`Let's Talk`}</h2>
            <p className="text-xl text-gray-600">Send us your feedback</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.7845032280488!2d79.91473789512455!3d6.97419502281288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581cbe3d06f5%3A0x17c98045f95e4fe2!2sFaculty%20of%20Science%20University%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1735723482327!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-[#FF9900]" />
                    <CardTitle>Send us a Message</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#232F3E] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg opacity-90 mb-8">
              Check out our FAQ section or reach out to us on social media
            </p>
            <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#FF9900] rounded-lg text-[#FF9900] hover:bg-[#FF9900] hover:text-white transition-colors duration-300 cursor-pointer">
              Visit FAQ Page
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

