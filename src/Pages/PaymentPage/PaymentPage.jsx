import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function PaymentPage() {
  // Dummy data for payment options
  const paymentOptions = [
    {
      name: "Unlimited Task Creation",
      description: "Create and manage an unlimited number of tasks.",
      amount: "$99",
    },
    {
      name: "Pro Support",
      description: "Access to premium customer support 24/7.",
      amount: "$49",
    },
    // Add more payment options as needed
  ];

  const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY}`);

  const price = 148;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Payment Options */}
            <div className="p-6">
              <div className="font-bold text-primary text-2xl mb-2">
                <h2>Total: $148</h2>
              </div>
              <ul className="space-y-4">
                {paymentOptions.map((option, index) => (
                  <li key={index} className="border p-4 rounded-md">
                    <h3 className="text-lg font-semibold">{option.name}</h3>
                    <p className="text-gray-600">{option.description}</p>
                    <p className="text-lg font-semibold mt-2">
                      {option.amount}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Input and User Details */}
            <div className="bg-gray-50 p-6">
              {/* Payment Input */}
              <div className="mb-4">
                <label
                  htmlFor="card"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                {/* Checkout form */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm price={price} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
