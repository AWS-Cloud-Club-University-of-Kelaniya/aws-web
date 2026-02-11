import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWS Cloud Club - University of Kelaniya",
  description:
    "Official website of the AWS Cloud Club at the University of Kelaniya",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
        <body
        suppressHydrationWarning
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </body>
    </html>
  );
}
