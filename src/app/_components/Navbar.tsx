import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

function Navbar() {
  return (
    
      <div className='absolute top-0 flex justify-between items-center w-full h-20 bg-neutral-100 p-5 text-black sm:px-[120px] px-9 z-10'>
          <div>
              <p className='text-2xl font-semibold'>Subvenio</p>
          </div>
          <div className='flex gap-5 items-center'>
              <Link href='/collections'>
              <p>Collections</p>
              </Link>
              <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          </div>
      </div>
   
  )
}

export default Navbar