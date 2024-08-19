import { generateObject } from "ai";
import { z } from "zod";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { collections } from "~/server/db/collections";
import { eq , and} from "drizzle-orm";
import { nanoid } from "~/lib/utils";
import { cards } from "~/server/db/schema";
import { db } from "~/server/db";
import { NextApiRequest, NextApiResponse } from "next";
import { currentUser, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface MessageType {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: Request, res: NextApiResponse) {
  
   const { userId } = auth();

  console.log(userId, typeof userId);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

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
           question: z
             .string()
             .describe(
               "What the users trys to figure out regarding the prompt asked ",
             ),
           answer: z.string().describe("The answer to the question"),
           collection_name: z
             .string()
             .describe(
               "The name of the collection, which is a summerization of the prompt",
             ),
         }),
       ),
     }),
   });

  const collection_name: unknown =
    result.object.notifications[0]?.collection_name;

   let collection = await db
     .select()
     .from(collections)
     .where(
       and(
         eq(collections.name, collection_name as string),
         eq(collections.userId, userId),
       ),
     )
     .limit(1);

  if (collection.length === 0) {
    const [newCollection] = await db
      .insert(collections)
      .values({
        id: nanoid(),
        name: collection_name as string,
        userId: userId,
      })
      .returning();
    collection = [newCollection] as typeof collection;
  }

  const collectionId = collection[0]?.id;

  const genCards = await db.insert(cards).values(
    result.object.notifications.map((card) => ({
      id: nanoid(),
      question: card.question,
      answer: card.answer,
      collectionId: collectionId,
      // userId: userId,
    })),
  );

  // console.log(`Inserted ${genCards.length} cards`);
 

  // return result..toJsonResponse().status(200).json(result.toJsonResponse());

  console.log((result.object.notifications));

  return Response.json(result.object.notifications);
  
  // return result.toJsonResponse();
}
