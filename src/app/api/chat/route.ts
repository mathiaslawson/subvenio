import { generateObject } from "ai";
import { z } from "zod";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { db } from "~/server/db";
import { collections } from "~/server/db/collections";
import { eq } from "drizzle-orm";
import { nanoid } from "~/lib/utils";
import { cards } from "~/server/db/schema";

interface MessageType {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: Request) {
  const { messages }: { messages: MessageType[] } = (await req.json()) as {
    messages: MessageType[];
  };

  const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const result = await generateObject({
    model: google("models/gemini-1.5-flash-latest"),
    system:
      "You are a helpful assistant that creates flash cards. Generate flash cards based on the user's input. Each flashcard should have a question and an answer",
    messages,
    schema: z.object({
      notifications: z.array(
        z.object({
          question: z.string().describe("What the users trys to figure out regarding the prompt asked "),
          answer: z.string().describe("The answer to the question"),
          collection_name: z.string().describe("The name of the collection, which is a summerization of the prompt"),  
        }),
      ),
    }),
  });
  

  // const collection_name: unknown = result.object.notifications[0]?.collection_name;

  //  let collection = await db
  //    .select()
  //    .from(collections)
  //    .where(eq(collections.name, collection_name as string))
  //    .limit(1);
  
  // if (collection.length === 0) {
  //   const [newCollection] = await db
  //     .insert(collections)
  //     .values({
  //       id: nanoid(),
  //       name: collection_name as string,
  //     })
  //     .returning();
  //   collection = [newCollection] as typeof collection;
  // }

  // const collectionId = collection[0]?.id;

  // const genCards = await db.insert(cards).values(
  //   result.object.notifications.map(card => ({
  //      id: nanoid(),
  //      question: card.question,
  //      answer: card.answer,
  //      collectionId: collectionId,
  //   }))
    
  //  )
 
  // console.log(`Inserted ${genCards.length} cards`);
  
  return result.toJsonResponse();
}
