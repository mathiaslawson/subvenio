'use client';
import { useState } from 'react';
import { useChat } from 'ai/react';
import { FlashCards } from '~/app/_components/FlashCards';
import { Laugh } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';


export default function Chat() {
  interface Card {
    id: string;
    question: string;
    answer: string;
    collection_name: string
  }

  interface FlashCard {
    notifications?: Card[];
  }



  const [flashcards, setFlashCards] = useState<FlashCard | null>(null);

  const { messages, input, handleInputChange, handleSubmit, data, isLoading } = useChat({
    onResponse: async (response) => {
      if (response.ok) {
        try {
          const data: unknown = await response.json(); 
          setFlashCards(data as FlashCard);
          console.log('Received data:', data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else {
        console.error('Error with response:', response.statusText);
      }
    }
  });

  return (
    <div className="">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <input
            className="border border-neutral-200 shadow-md p-2 rounded-md sm:w-[500px] w-[300px]"
            value={input}
            placeholder="Ask me to Generate Flash cards on any topic for you..."
            onChange={handleInputChange}
          />
        </form>
      </div>

       

      <div className="flex justify-center mt-10">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-500 border-solid"></div>
        ) : flashcards?.notifications && flashcards.notifications.length > 0 ? (
            <>
             
            <div className='flex justify-center flex-wrap'>
             
            {flashcards?.notifications.map((item: Card) => (
              <div key={item.id} className='flex justify-center'>
             
                <FlashCards data={item} />
              </div>
            ))}
              </div>
            </>
        ) : (
          <div className="text-center mt-20">
            <svg className="mx-auto h-40 w-40 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No flashcards</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new set of flashcards.</p>
              
                <Link href="/collections">
                <Button className='mt-10 rounded-2xl shadow-md' >Go to Collections</Button></Link>
               
          </div>
        )}
      </div>
    </div>
  );
}