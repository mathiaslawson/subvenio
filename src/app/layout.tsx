import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "~/components/ui/sonner"

export const metadata: Metadata = {
  title: "Subvenio",
  description: "Introducing our cutting-edge web app that makes studying smarter and more efficient! Whether you're a student preparing for exams or just someone looking to learn new topics, our AI-powered flashcard generator has you covered",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
       <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
          </TRPCReactProvider>
          <Toaster />
      </body>
    </html>
    </ClerkProvider>
   
  );
}
