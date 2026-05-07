'use client';

import Link from 'next/link';

import { useCart } from '@/context/CartContext';

export default function Bundles() {

  const { addToCart } = useCart();

  const bundles = [
    {
      id: 'hair-growth-bundle',

      name: 'Hair Growth Bundle',

      image:
        '/images/bundles/bundle-hair-growth-main.webp',

      price: '₹999',

      description:
        'Hair Growth Oil + Scalp Detox Ritual',
    },

    {
      id: 'complete-hair-ritual',

      name: 'Complete Hair Ritual',

      image:
        '/images/bundles/bundle-complete-ritual-main.webp',

      price: '₹1599',

      description:
        'Complete Ayurvedic luxury haircare routine',
    },

    {
      id: 'scalp-care-bundle',

      name: 'Scalp Care Bundle',

      image:
        '/images/bundles/bundle-scalp-care-main.webp',

      price: '₹1799',

      description:
        'Deep scalp nourishment & detox',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#10211a]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Luxury Bundles
          </p>

          <h2 className="text-5xl font-light text-white">
            Curated Hair Rituals
          </h2>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {bundles.map((bundle) => (

            <div
              key={bundle.id}
              className="bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720]"
            >

              {/* Clickable Image */}
              <Link
                href={`/bundle/${bundle.id}`}
              >

                <img
                  src={bundle.image}
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                />

              </Link>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl text-[#f3deb0] mb-4">
                  {bundle.name}
                </h3>

                <p className="text-gray-400 mb-6">
                  {bundle.description}
                </p>

                <p className="text-[#d4af37] text-3xl mb-8">
                  {bundle.price}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-4">

                  {/* Add To Cart */}
                  <button
                    onClick={() =>
                      addToCart({
                        name: bundle.name,
                        image: bundle.image,
                        price: bundle.price,
                      })
                    }
                    className="bg-[#d4af37] text-black py-4 rounded-full font-semibold hover:scale-105 transition"
                  >

                    Add To Cart

                  </button>

                  {/* View Bundle */}
                  <Link
                    href={`/bundle/${bundle.id}`}
                    className="border border-[#d4af3720] text-center py-4 rounded-full hover:border-[#d4af37] transition"
                  >

                    View Bundle

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
