export default function Bundles() {
  const bundles = [
    {
      title: "Hair Growth Combo",
      image: "/images/bundle1.png",
      price: "₹999",
      oldPrice: "₹1999",
    },
    {
      title: "Luxury Shine Ritual",
      image: "/images/bundle2.png",
      price: "₹1599",
      oldPrice: "₹2999",
    },
    {
      title: "Ultimate Hair Combo",
      image: "/images/bundle3.png",
      price: "₹1999",
      oldPrice: "₹3999",
    },
    
  ];

  return (
    <section className="py-24 px-6 bg-[#10211a]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Bundle Offers
          </p>

          <h2 className="text-5xl font-light text-white">
            Luxury Hair Ritual Bundles
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {bundles.map((bundle, index) => (
            <div
              key={index}
              className="bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720] hover:-translate-y-3 transition duration-300"
            >

              <img
                src={bundle.image}
                className="w-full h-[500px] object-cover"
              />

              <div className="p-8 text-center">

                <h3 className="text-3xl text-[#f3deb0] mb-4">
                  {bundle.title}
                </h3>

                <div className="flex justify-center items-center gap-4 mb-6">

                  <span className="text-3xl text-[#d4af37] font-bold">
                    {bundle.price}
                  </span>

                  <span className="text-gray-500 line-through text-xl">
                    {bundle.oldPrice}
                  </span>

                </div>

                <button className="bg-[#d4af37] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
                  Grab Bundle
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
