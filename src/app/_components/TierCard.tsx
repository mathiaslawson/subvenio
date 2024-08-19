import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import { Button } from '~/components/ui/button'
import convertToSubcurrency from "~/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from './CheckoutButton';

interface TierCardProps {
  name: string, 
  description: string, 
  price: number, 
  benefits: string[]
}

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function TierCard({ data }: { data: TierCardProps }) {
  


  return (
      <div className='h-[full] shadow-lg rounded-xl w-[500px] text-black p-4 bg-opacity-20 bg-neutral-100 bg-blur-lg backdrop-blur-xl backdrop-saturate-150'>
          <div>
              <p className='text-2xl'>{data.name}</p>
              <p className='font-light mt-3 text-sm'>{data.description}</p>
          </div>
          
          <div className='mt-20 flex text-2xl font-semibold'>
              <sub>$</sub>
        <p className='text-8xl font-semibold ml-2'>{ data.price }</p>
          </div>

       <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(data.price),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={data.price} />
      </Elements>
          {/* <div className='w-full mt-10'>
            <Button variant="outline" className='w-full rounded-3xl'>Subscribe</Button>
          </div> */}

          
      </div>
  )
}

export default TierCard