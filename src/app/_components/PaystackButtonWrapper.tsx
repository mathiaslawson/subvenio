'use client'

import React from 'react'
import { PaystackButton } from 'react-paystack'

interface PaystackButtonWrapperProps {
  config: {
    reference: string
    email: string
    amount: number
    publicKey: string
  }
  onSuccess: (reference: unknown) => void
  onClose: () => void
}

const PaystackButtonWrapper: React.FC<PaystackButtonWrapperProps> = ({ config, onSuccess, onClose }) => {
  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess,
    onClose,
  }

  return <PaystackButton {...componentProps} />
}

export default PaystackButtonWrapper