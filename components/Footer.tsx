export default function Footer() {
  return (
    <footer className="bg-[#06110d] border-t border-[#d4af3720] py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <img
            src="/images/logo.png"
            alt="Keshvique"
            className="h-16 mb-6"
          />

          <p className="text-gray-400 leading-relaxed">
            Luxury Ayurvedic haircare rituals crafted with
            botanical ingredients for healthier and shinier hair.
          </p>

        </div>

        {/* Shop */}
        <div>

          <h3 className="text-[#d4af37] text-xl mb-6">
            Shop
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li><a href="#">Hair Growth Oil</a></li>
            <li><a href="#">Scalp Detox Oil</a></li>
            <li><a href="#">Bundle Offers</a></li>
            <li><a href="#">Luxury Rituals</a></li>
          </ul>

        </div>

        {/* Support */}
        <div>

          <h3 className="text-[#d4af37] text-xl mb-6">
            Support
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-[#d4af37] text-xl mb-6">
            Contact
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>79 Alipur Delhi - 110036</li>
            <li>+91 9599754202</li>
            <li>hello@keshvique.com</li>
          </ul>

        </div>

      </div>

      <div className="border-t border-[#d4af3720] mt-16 pt-8 text-center text-gray-500">
        © 2026 KESHVIQUE. All rights reserved.
      </div>

    </footer>
  );
}