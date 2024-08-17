import React from 'react'

function CollectionCard() {
  return (
      <div>
          <div className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-2xl hover:cursor-pointer hover:shadow-md'>
              <div>
                  <p className='font-bold text-xl'>Collection Name</p>
             </div>
          </div>
    </div>
  )
}

export default CollectionCard