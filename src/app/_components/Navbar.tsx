import React from 'react'
import { Button } from '~/components/ui/button'

function Navbar() {
  return (
    
      <div className='flex justify-between items-center w-full h-20 bg-neutral-100 p-5 text-black sm:px-[120px] px-9'>
          <div>
              <p className='text-2xl font-semibold'>Subvenio</p>
          </div>
          <div className='flex gap-5 items-center'>
              <p>Collections</p>
              <Button>SignIn</Button>
          </div>
      </div>
   
  )
}

export default Navbar