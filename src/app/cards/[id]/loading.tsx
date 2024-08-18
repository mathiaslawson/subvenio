import React from 'react'

function loading() {
  return (
      <div className='flex items-center justify-center min-h-screen pt-20'>
           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-500 border-solid"></div>
    </div>
  )
}

export default loading