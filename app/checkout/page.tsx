'use client';

import {
  useEffect,
  useState,
} from 'react';

import { useCart } from '@/context/CartContext';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {

  const {
    cart,
    coupon,
    discount,
    applyCoupon,
  } = useCart();

  const [couponInput, setCouponInput] =
    useState('');

  const subtotal = cart.reduce(
    (acc, item) => {

      return (
        acc +
        Number(
          item.price.replace(
            '₹',
            ''
          )
        ) *
          item.quantity
      );

    },
    0
  );

  const finalTotal =
    subtotal -
    (subtotal * discount) / 100;

  /* LOAD RAZORPAY */
  useEffect(() => {

    const script =
      document.createElement(
        'script'
      );

    script.src =
      'https://checkout.razorpay.com/v1/checkout.js';

    script.async = true;

    document.body.appendChild(
      script
    );

  }, []);

  const handlePayment = () => {

    if (!window.Razorpay) {

      alert(
        'Razorpay SDK failed to load.'
      );

      return;
    }

    const options = {

      key:
        process.env
          .NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount:
        finalTotal * 100,

      currency: 'INR',

      name: 'Keshvique',

      description:
        'Luxury Ayurvedic Haircare',

      image:
        '/images/logo.png',

      handler: function () {

        localStorage.removeItem(
          'keshvique-cart'
        );

        window.location.href =
          '/success';

      },

      theme: {
        color: '#d4af37',
      },

    };

    const razorpay =
      new window.Razorpay(
        options
      );

    razorpay.open();
  };

  return (
    <main className="min-h-screen bg-[#081510] text-white py-32 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Checkout
          </p>

          <h1 className="text-5xl font-light mb-12">
            Shipping Details
          </h1>

          <div className="space-y-6">

            <input
              placeholder="Full Name"
              className="w-full bg-[#13271f] border border-[#d4af3720] p-5 rounded-2xl outline-none"
            />

            <input
              placeholder="Email Address"
              className="w-full bg-[#13271f] border border-[#d4af3720] p-5 rounded-2xl outline-none"
            />

            <input
              placeholder="Phone Number"
              className="w-full bg-[#13271f] border border-[#d4af3720] p-5 rounded-2xl outline-none"
            />

            <textarea
              placeholder="Shipping Address"
              rows={5}
              className="w-full bg-[#13271f] border border-[#d4af3720] p-5 rounded-2xl outline-none"
            />

            {/* Coupon */}
            <div className="flex gap-4">

              <input
                placeholder="Coupon Code"
                value={couponInput}
                onChange={(e) =>
                  setCouponInput(
                    e.target.value
                  )
                }
                className="flex-1 bg-[#13271f] border border-[#d4af3720] p-5 rounded-2xl outline-none"
              />

              <button
                onClick={() =>
                  applyCoupon(
                    couponInput
                  )
                }
                className="bg-[#d4af37] text-black px-8 rounded-2xl font-semibold"
              >
                Apply
              </button>

            </div>

            {/* Applied */}
            {coupon && (

              <p className="text-green-400">

                Coupon Applied:
                {' '}
                {coupon}
                {' '}
                ({discount}% OFF)

              </p>

            )}

            {/* Pay */}
            <button
              onClick={
                handlePayment
              }
              className="w-full bg-[#d4af37] text-black py-5 rounded-full text-lg font-semibold hover:scale-105 transition cursor-pointer"
            >

              Pay ₹{finalTotal}

            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-[#10211a] border border-[#d4af3720] rounded-[2rem] p-10 h-fit">

          <h2 className="text-4xl font-light mb-10">
            Order Summary
          </h2>

          <div className="space-y-6">

            {cart.map((item) => (

              <div
                key={item.name}
                className="flex gap-4 border-b border-[#d4af3720] pb-6"
              >

                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <h3 className="text-[#f3deb0] text-lg mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 mb-2">
                    Quantity:
                    {' '}
                    {item.quantity}
                  </p>

                  <p className="text-[#d4af37] text-xl">
                    {item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Total */}
          <div className="border-t border-[#d4af3720] mt-10 pt-8">

            <div className="flex justify-between items-center mb-4">

              <span className="text-xl text-gray-300">
                Subtotal
              </span>

              <span className="text-xl">
                ₹{subtotal}
              </span>

            </div>

            {discount > 0 && (

              <div className="flex justify-between items-center mb-4">

                <span className="text-xl text-green-400">
                  Discount
                </span>

                <span className="text-xl text-green-400">
                  -{discount}%
                </span>

              </div>

            )}

            <div className="flex justify-between items-center mb-8">

              <span className="text-xl text-gray-300">
                Shipping
              </span>

              <span className="text-xl">
                Free
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-3xl text-[#f3deb0]">
                Total
              </span>

              <span className="text-4xl text-[#d4af37] font-bold">
                ₹{finalTotal}
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}