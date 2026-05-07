'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useCart } from '@/context/CartContext';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-[#081510]/95 backdrop-blur border-b border-[#d4af3720]">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Keshvique"
          className="h-14 object-contain"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#f3deb0]">

          <a href="#home">Home</a>

          <a href="#shop">Shop</a>

          <a href="#bundles">Bundles</a>

          <a href="#testimonials">Reviews</a>

          <a href="#faq">FAQ</a>

          <Link href="/wishlist">
  Wishlist
</Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            href="/checkout"
            className="bg-[#d4af37] text-black px-5 py-2 rounded-full font-semibold"
          >
            Cart ({cart.length})
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#d4af37] text-3xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (

        <div className="md:hidden bg-[#081510] border-t border-[#d4af3720] px-6 py-6 flex flex-col gap-6 uppercase tracking-widest text-[#f3deb0]">

          <a href="#home">Home</a>

          <a href="#shop">Shop</a>

          <a href="#bundles">Bundles</a>

          <a href="#testimonials">Reviews</a>

          <a href="#faq">FAQ</a>

        </div>

      )}

    </header>
  );
}