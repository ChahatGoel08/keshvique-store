'use client';

import Link from 'next/link';
import { useState } from 'react';

import { useWishlist } from '@/context/WishlistContext';

export default function Products() {

  const [search, setSearch] = useState('');

  const [filter, setFilter] =
    useState('all');

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const products = [
    {
      id: 'hair-growth-oil',

      name: 'Hair Growth Oil',

      image: '/images/product1.png',

      price: 'From ₹799',

      concern: 'Hair Growth',
    },

    {
      id: 'scalp-detox-oil',

      name: 'Scalp Detox Oil',

      image: '/images/product2.png',

      price: 'From ₹899',

      concern: 'Scalp Care',
    },

    {
      id: 'shine-hair-oil',

      name: 'Shine Hair Oil',

      image: '/images/product3.png',

      price: 'From ₹999',

      concern: 'Hair Shine',
    },
  ];

  const filteredProducts = products.filter(
    (product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === 'all'
          ? true
          : product.concern === filter;

      return (
        matchesSearch && matchesFilter
      );
    }
  );

  return (
    <section className="py-24 px-6 bg-[#081510]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Featured Collection
          </p>

          <h2 className="text-5xl text-white font-light mb-10">
            Signature Hair Oils
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full max-w-xl bg-[#13271f] border border-[#d4af3720] rounded-full px-6 py-4 text-white outline-none mb-8"
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">

            {[
              'All',
              'Hair Growth',
              'Scalp Care',
              'Hair Shine',
            ].map((item) => (

              <button
                key={item}
                onClick={() =>
                  setFilter(item)
                }
                className={`px-6 py-3 rounded-full border transition ${
                  filter === item
                    ? 'bg-[#d4af37] text-black'
                    : 'border-[#d4af3720] text-white'
                }`}
              >

                {item}

              </button>

            ))}

          </div>

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-10">

          {filteredProducts.map((product) => (

            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="relative bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720] hover:scale-[1.02] transition"
            >

              {/* Wishlist Button */}
              <button
                onClick={(e) => {

                  e.preventDefault();

                  toggleWishlist({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                  });

                }}
                className="absolute top-5 right-5 z-20 text-3xl"
              >

                {isWishlisted(product.id)
                  ? '❤️'
                  : '🤍'}

              </button>

              {/* Product Image */}
              <img
                src={product.image}
                className="w-full h-[420px] object-cover"
              />

              {/* Product Info */}
              <div className="p-8">

                <p className="text-[#d4af37] text-sm uppercase tracking-widest mb-2">
                  {product.concern}
                </p>

                <h3 className="text-2xl text-[#f3deb0] mb-3">
                  {product.name}
                </h3>

                <p className="text-[#d4af37] text-xl">
                  {product.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}