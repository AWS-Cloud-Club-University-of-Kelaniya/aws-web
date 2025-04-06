import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#232F3E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AWS Cloud Club</h3>
            <p className="text-sm">University of Kelaniya</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF9900]">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#FF9900]">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#FF9900]">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://community.aws/" target='_blank' className="hover:text-[#FF9900]">AWS Community</a></li>
              <li><a href="https://www.awseducate.com/" target='_blank' className="hover:text-[#FF9900]">AWS Educate</a></li>
              <li><a href="https://www.awsacademy.com/" target='_blank' className="hover:text-[#FF9900]">AWS Academy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/AWS-Cloud-Club-of-University-of-Kelaniya/61568175273436/" target='_blank' className="hover:text-[#FF9900]"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#FF9900]"><Twitter size={24} /></a>
              <a href="https://www.linkedin.com/company/aws-cloud-club-of-university-of-kelaniya" target='_blank' className="hover:text-[#FF9900]"><Linkedin size={24} /></a>
              <a href="https://youtube.com/@awscloudclubkelaniya?si=iIQeppQfq_Hd2fNM" target='_blank' className="hover:text-[#FF9900]"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 AWS Cloud Club - University of Kelaniya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

