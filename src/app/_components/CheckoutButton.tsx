"use client";

import React, { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubcurrency from "~/lib/utils";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayButtonClick = () => {
    setShowPaymentForm(true);
  };

  useEffect(() => {
    if (showPaymentForm) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      })
        .then((res) => res.json())
        .then((data: { clientSecret: string }) => setClientSecret(data.clientSecret))
        .catch((error) => {
          console.error("Error fetching client secret:", error);
          setErrorMessage("Failed to initialize payment. Please try again.");
        });
    }
  }, [showPaymentForm, amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message ?? "An error occurred");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message ?? "An error occurred");
    }

    setLoading(false);
  };

  if (!showPaymentForm) {
    return (
      <button
        onClick={handlePayButtonClick}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold"
      >
        Pay ${amount}
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutPage;