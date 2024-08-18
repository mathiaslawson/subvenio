import Link from "next/link";
import CollectionCard from "../_components/CollectionCard";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { collections } from "~/server/db/schema";

export default async function Home() {
  async function fetchCards() {
    try {
      const cardData = await db.select().from(collections).execute();
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
          <Button className="rounded-2xl shadow-md">Generate More Flash Cards</Button>
        </Link>
      </div>
      <div className="pt-10 grid grid-cols-4 gap-10">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <CollectionCard key={index} card={{ ...card, name: card.name ?? '' }} />
          ))
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </main>
  );
}
