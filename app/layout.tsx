import './globals.css';

import type { Metadata } from 'next';

import { CartProvider } from '@/context/CartContext';

import { WishlistProvider } from '@/context/WishlistContext';

export const metadata: Metadata = {
  title: 'Keshvique',
  description: 'Luxury Ayurvedic Haircare',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body>

        <WishlistProvider>

          <CartProvider>

            {children}

          </CartProvider>

        </WishlistProvider>

      </body>

    </html>
  );
}