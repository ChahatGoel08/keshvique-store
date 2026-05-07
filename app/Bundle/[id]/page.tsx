'use client';

import { useParams } from 'next/navigation';

import { useCart } from '@/context/CartContext';

export default function BundlePage() {

  const params = useParams();

  const { addToCart } = useCart();

  const bundles = [
    {
      id: 'hair-growth-bundle',

      name: 'Hair Growth Bundle',

      price: '₹1999',

      description:
        'A complete Ayurvedic ritual designed to reduce hair fall and stimulate healthy hair growth.',

      images: [
        '/images/bundles/bundle-hair-growth-main.webp',
        '/images/bundles/bundle-hair-growth-products.webp',
        '/images/bundles/bundle-hair-growth-lifestyle.webp',
      ],

      includes: [
        'Hair Growth Oil',
        'Scalp Detox Oil',
        'Wooden Massage Comb',
      ],
    },

    {
      id: 'complete-hair-ritual',

      name: 'Complete Hair Ritual',

      price: '₹3499',

      description:
        'The ultimate luxury self-care routine for stronger, shinier and healthier hair.',

      images: [
        '/images/bundles/bundle-complete-ritual-main.webp',
        '/images/bundles/bundle-complete-ritual-box.webp',
        '/images/bundles/bundle-complete-ritual-products.webp',
      ],

      includes: [
        'Hair Growth Oil',
        'Scalp Detox Oil',
        'Shine Hair Oil',
        'Luxury Gift Box',
      ],
    },

    {
      id: 'scalp-care-bundle',

      name: 'Scalp Care Bundle',

      price: '₹2499',

      description:
        'Deep scalp detox and nourishment ritual inspired by Ayurvedic wellness.',

      images: [
        '/images/bundles/bundle-scalp-care-main.webp',
        '/images/bundles/bundle-scalp-care-unboxing.webp',
        '/images/bundles/bundle-scalp-care-texture.webp',
      ],

      includes: [
        'Scalp Detox Oil',
        'Ayurvedic Scalp Brush',
      ],
    },
  ];

  const bundle = bundles.find(
    (item) => item.id === params.id
  );

  if (!bundle) {

    return (
      <div className="min-h-screen bg-[#081510] text-white flex items-center justify-center">

        Bundle not found.

      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#081510] text-white py-32 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-6">

          {bundle.images.map(
            (image, index) => (

              <img
                key={index}
                src={image}
                className="rounded-[2rem] border border-[#d4af3720]"
              />

            )
          )}

        </div>

        {/* RIGHT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Luxury Bundle
          </p>

          <h1 className="text-6xl font-light mb-8">
            {bundle.name}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {bundle.description}
          </p>

          <div className="text-5xl text-[#d4af37] font-bold mb-10">
            {bundle.price}
          </div>

          {/* Includes */}
          <div className="mb-12">

            <h2 className="text-2xl text-[#f3deb0] mb-6">
              Bundle Includes
            </h2>

            <div className="space-y-4">

              {bundle.includes.map(
                (item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 text-lg"
                  >

                    <span className="text-[#d4af37]">
                      ✦
                    </span>

                    {item}

                  </div>

                )
              )}

            </div>

          </div>

          {/* Add To Cart */}
          <button
            onClick={() =>
              addToCart({
                name: bundle.name,
                image: bundle.images[0],
                price: bundle.price,
              })
            }
            className="bg-[#d4af37] text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition"
          >

            Add Bundle To Cart

          </button>

        </div>

      </div>

    </main>
  );
}