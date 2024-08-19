import Link from "next/link";
import CollectionCard from "../_components/CollectionCard";
import { Button } from "~/components/ui/button";
import { auth, currentUser } from '@clerk/nextjs/server'
import { collections } from "~/server/db/schema";
import { eq , and} from "drizzle-orm";
import { db } from "~/server/db";
import { IconMoodSmileBeam } from "@tabler/icons-react";




export default async function Home() {

  const { userId } = auth()

  async function fetchCards() {
    try {
      // const cardData = await db.select().from(collections).execute();
      const cardData = await db.select().from(collections).where(
        eq(collections.userId, userId ?? '')).execute();
      console.log('Card Data:', cardData);
      return cardData;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  }

  const cards = await fetchCards();

  return (
    <main className="min-h-screen pt-20 mb-20">
      <div className="mt-5 mb-5 px-20">
        <Link href={"/chat"}>
          <Button className="rounded-2xl shadow-md">Generate Flash Cards</Button>
        </Link>
      </div>
      <div className="px-10 flex flex-row gap-10 flex-wrap justify-center">
        {cards.length > 0 ? (
              cards.map((card, index) => (
                 <Link href={`/cards/${card.id}`}  key={index}>
                    <CollectionCard card={{ ...card, name: card.name ?? '' }} />
                 </Link>
          
          ))
        ) : (
            <div className="mt-[200px]">
              <div className="flex flex-col items-center justify-center">
                 <IconMoodSmileBeam stroke={1} className="text-gray-700" height={100} width={100} />
                </div>
                
              <p className="text-sm mt-9">Generate Your Personalized Flashcards to get started.</p>
                <p className="text-sm mt-2 font-semibold text-center">No Cards</p>
            </div>
        )}
      </div>
    </main>
  );
}
