'use client';

import { useChat } from 'ai/react';
import { useCompletion } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data , isLoading} =  useChat({
    onResponse: async (response) => {
      if (response.ok) {
        try {
          const data: unknown = await response.json(); 
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
      {/* {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))} */}

      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit}>
        <input
          className="border border-neutral-200 shadow-md p-2 rounded-md w-[500px]"
          value={input}
          placeholder="Ask me to Generate Flash cards on any topic for you..."
          onChange={handleInputChange}
        />
      </form>
      </div>

      <div>
        {
          isLoading && <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-500 border-solid">
              
            </div>
          
          </div>        
 }
      </div>
      
    </div>
  );
}