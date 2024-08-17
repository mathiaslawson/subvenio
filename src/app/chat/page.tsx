import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { CanvasRevealEffect } from "~/components/ui/canvas-reveal-effect";
import { FlashCards } from "../_components/FlashCards";
import CollectionCard from "../_components/CollectionCard";
import { Button } from "~/components/ui/button";
import Chat from "~/components/Chat";


export default async function Home() {
 
  return (
  
    <main className="min-h-screen pt-20 mb-20">
      
      <div className="">
       
        <Chat />
      </div>
      </main>
  
  );
}
