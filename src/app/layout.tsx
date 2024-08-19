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
  description: "Built The Subvenio Team",
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
