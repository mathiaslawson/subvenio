import React from 'react'
import { Bento } from '~/app/_components/Bento'
import TierCard from '../_components/TierCard'

function Tiers() {


  const tiers = [
    {
      name: 'Basic',
      description: 'A 5 day free trial service',
      price: '0',
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
      description: '1 month access to all features',
      price: '5',
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
      price: '10',
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