'use client'

import React from 'react'
import { Bento } from '~/app/_components/Bento'
import dynamic from 'next/dynamic'
import TierCard from '../_components/TierCard'
import convertToSubcurrency from "~/lib/utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from '../_components/CheckoutButton'


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);




function Tiers() {

const amount = 49.99;
  
  const tiers = [
    {
      name: 'Basic',
      description: '1 month access to all feature',
      price: 1,
      benefits: [
        'Unlimited Flash Cards',
        'Unlimited Stores',
        'Unlimited Bentos',
        'Unlimited Subscriptions',
        'Unlimited Downloads',
        'Unlimited Updates',
      ],
    },
    {
      name: 'Mid',
      description: '3 month access to all features',
      price: 5,
      benefits: [
        'Unlimited Flash Cards',
        'Unlimited Stores',
        'Unlimited Bentos',
        'Unlimited Subscriptions',
        'Unlimited Downloads',
        'Unlimited Updates',
      ],
    },
    {
      name: 'Pro',
      description: '5 months access to all features',
      price: 10,
      benefits: [
        'Unlimited Flash Cards',
        'Unlimited Stores',
        'Unlimited Bentos',
        'Unlimited Subscriptions',
        'Unlimited Downloads',
        'Unlimited Updates',
      ],
    },
  ] 


  return (
     <div className='py-10 text-black w-full sm:px-20 px-10 tier-bg'>
          <div className='flex justify-center my-20'>
            <p className='text-5xl font-semibold'>Choose Your Plan </p>
          </div>
         
     
     

          <div className='flex justify-center gap-10 flex-wrap'>
        {
          tiers.map((tier, index) => {
            return (
              <TierCard key={index} data={tier} />
            )
          })
              }
              
          </div>


     </div>
  )
}

export default Tiers