import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useAxiosSecure } from "../../components/hook/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // generate client secret and save in state
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      if (paymentIntent.status == "succeeded") {
        const paymentInfo = {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
          transactionId: paymentIntent.id,
          date: new Date(),
        };

        axiosSecure.post("/payment", paymentInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire(
              "Payment Successfully! Check you Email",
              `Transaction ID: ${paymentIntent.id}`,
              "Please Create Task again"
            );

            axios
              .put(`http://localhost:5000/users/${user?.email}`, {
                paid: true,
              })
              .then((res) => {
                console.log(res.data);
              });

            navigate("/dashboard/post-task");
          }
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        {/* Payment Button */}
        <div>
          <button
            disabled={!stripe}
            type="submit"
            className="bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-hover focus:outline-none focus:ring focus:ring-blue-300"
          >
            Pay Now $148
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500 mt-3">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
