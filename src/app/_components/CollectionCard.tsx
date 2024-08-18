import React from 'react'

interface Card {
 name: string
}


function CollectionCard({ card }: { card: Card }) {
  return (
      <div>
          <div className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm mx-auto p-4 relative h-[30rem] rounded-2xl hover:cursor-pointer hover:shadow-md w-[370px]'>
              <div>
          <p className='font-bold text-xl'>{card.name}</p>
             </div>
          </div>
    </div>
  )
}

export default CollectionCard