import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xloanx",
  description: "Portfolio Page by Abiodun Odukaye",
  keywords: [
    "Agentic AI",
    "LLM Integration",
    "CrewAI",
    "LangGraph",
    "RAG",
    "Fullstack AI Apps",
    "GPT-4o",
    "OpenAI",
    "AI Workflow Automation",
    "Low-Code Development",
    "No-Code Tools",
    "Make.com",
    "Zapier",
    "n8n",
    "Redis",
    "Pinecone",
    "Vector DBs",
    "Chatbot Memory",
    "Scalable AI Systems",
    "API Automation",
    "Knowledge Retrieval",
    "LangChain",
    "SaaS AI Builder"
  ],
  openGraph: {
    title: "Xloanx - Fullstack AI Portfolio by Abiodun Odukaye",
    description: "Explore fullstack and agentic AI innovations including CrewAI, LangGraph, LangChain, GPT-4o, and workflow automation using Make.com, Zapier, and more.",
    url: "https://ama-page.vercel.app",
    siteName: "Xloanx",
    images: [
      {
        url: "https://ama-page.vercel.app/og-image.jpg", // <-- replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Xloanx - AI Fullstack Solutions Engineer Portfolio by Abiodun Odukaye",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xloanx - AI Fullstack Solutions Engineer Portfolio by Abiodun Odukaye",
    description: "Building Agentic AI, Chatbots, and Scalable Workflow Systems. Projects with LangChain, CrewAI, GPT-4o, Zapier, Pinecone & more.",
    site: "@AOdukaye76472", 
    creator: "@AOdukaye76472", 
    images: ["https://ama-page.vercel.app/og-image.jpg"], // <-- replace with same OG image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
