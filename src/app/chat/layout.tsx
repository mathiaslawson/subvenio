import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Subvenio . Chat",
  description: "Built The Subvenio Team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <div>
          <TRPCReactProvider>
        
          {children}
         
          </TRPCReactProvider>
      </div>
    
      
    
  
  );
}
