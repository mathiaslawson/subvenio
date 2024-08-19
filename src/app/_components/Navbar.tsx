"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { toast } from "sonner"
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'


function Navbar() {

    const { isLoaded, userId, sessionId, getToken } = useAuth()

const router = useRouter()

  return (
    
      <div className='absolute top-0 flex justify-between items-center w-full h-20 bg-neutral-100 p-5 text-black sm:px-[120px] px-9 z-10'>
          <div>
              <Link href='/'>
                  <p className='text-2xl font-semibold'>Subvenio</p>
              </Link>
          </div>
          <div className='flex gap-5 items-center'>
              
              <Button onClick={() => {
                 if(userId){
                     
                     router.push("/collections")
                 } else {
                     toast.error("You need to login to Access Collections")
                     setTimeout(() => {
                         router.push("/sign-in")
                     }, 2000)
                 }
              }}>
                  Collection
             </Button>
              
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