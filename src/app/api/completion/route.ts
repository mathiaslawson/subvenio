import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToCoreMessages, streamText, tool } from "ai";
import { z } from "zod";
import { nanoid } from "~/lib/utils";

// Allow streaming responses up to 30 seconds
export const maxDuration = 5;

const cache = new Map<string, string>();

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

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system: `You are a helpful assistant that creates flash cards. Generate flash cards based on the user's input. Each flashcard should have a question and an answer. Format your response as JSON with the following structure: [{"question": "...", "answer": "...", "collection_name": "...", "collection_id": ${nanoid()}}]. Please links each generated flash card to the corresponding collection.`,
    messages: convertToCoreMessages(messages),
  });

  console.log(result);

  console.log("result", result.toDataStreamResponse());

  return result.toDataStreamResponse();
}
