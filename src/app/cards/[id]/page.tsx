import { db } from "~/server/db";
import { cards, collections } from "~/server/db/schema";
import { eq } from 'drizzle-orm';
import { FlashCards } from "~/app/_components/FlashCards";

async function getCollectionCards(id: string) {
  const cardData = await db.select()
    .from(cards)
    .where(eq(cards.collectionId, (id)))
    .execute();
  return cardData;
}

async function getCollectionName(id: string) {
  const collection = await db.select({ name: collections.name }).from(collections).where(eq(collections.id, (id))).execute();
  return collection[0]?.name ?? 'Unknown Collection';
}

export default async function CollectionCards({ params }: { params: { id: string } }) {
  const collectionCards = await getCollectionCards(params.id);
  const collectionName = await getCollectionName(params.id);

  return (
    <main className="min-h-screen pt-20 mb-20">
      <h1 className="text-center mt-10 font-semibold text-neutral-800 text-2xl">{collectionName}</h1>
      <div className="pt-10 grid grid-cols-4 gap-10">
        {collectionCards.length > 0 ? (
          collectionCards.map((card, index) => (
            <div key={index}>
              <FlashCards data={{ ...card, collection_name: collectionName, question: card.question ?? '', answer: card.answer! }} />
            </div>
          ))
        ) : (
          <p>No cards available in this collection</p>
        )}
      </div>
    </main>
  );
}