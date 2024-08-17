import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { CanvasRevealEffect } from "~/components/ui/canvas-reveal-effect";
import { FlashCards } from "../_components/FlashCards";
import CollectionCard from "../_components/CollectionCard";
import { Button } from "~/components/ui/button";


export default async function Home() {
 
  return (
  
    <main className="min-h-screen pt-20 mb-20">
      <div className="mt-5 mb-5 px-20">
        <Button className="rounded-2xl shadow-md">Generate More Flash Cards</Button>
      </div>
      <div className="pt-10 grid grid-cols-4 gap-10">
       
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>
        <div>
           <CollectionCard />
        </div>

      </div>
      </main>
  
  );
}
