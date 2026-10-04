const properties = [
  {
    title: "Modern Family House",
    location: "DHA Phase 6, Lahore",
    price: "PKR 4.5 Crore",
  },
  {
    title: "Luxury Apartment",
    location: "Gulberg, Lahore",
    price: "PKR 2.2 Crore",
  },
  {
    title: "Premium Commercial Space",
    location: "DHA Phase 8, Lahore",
    price: "PKR 3.8 Crore",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <nav className="flex items-center justify-between border-b px-6 py-5">
        <h1 className="text-2xl font-bold">
          Estate<span className="text-emerald-600">Pro</span>
        </h1>

        <div className="hidden gap-6 md:flex">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-emerald-600 px-5 py-2 text-white"
        >
          Contact Us
        </a>
      </nav>

      <section id="home" className="bg-zinc-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Trusted Real Estate
          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Find a place you&apos;ll be proud to call home.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            Discover premium properties in the best locations. We make your
            property journey simple and professional.
          </p>

          <a
            href="#properties"
            className="mt-8 inline-block rounded-full bg-emerald-600 px-7 py-4 font-semibold"
          >
            Explore Properties
          </a>
        </div>
      </section>

      <section id="properties" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            Featured Properties
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Properties worth exploring
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {properties.map((property) => (
              <div
                key={property.title}
                className="overflow-hidden rounded-2xl border shadow-sm"
              >
                <div className="flex h-52 items-center justify-center bg-zinc-200 text-zinc-500">
                  Property Image
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{property.title}</h3>

                  <p className="mt-2 text-zinc-500">
                    {property.location}
                  </p>

                  <p className="mt-5 font-bold text-emerald-600">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            About Us
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Your trusted partner in real estate.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            We help individuals, families, and investors find the right
            property with confidence.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-emerald-600 p-10 text-white">
          <h2 className="text-4xl font-bold">
            Looking for your next property?
          </h2>

          <p className="mt-4">
            Contact us today and let us help you find the right property.
          </p>

          <a
            href="mailto:info@example.com"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-emerald-700"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="border-t px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 EstatePro. All rights reserved.
      </footer>
    </main>
  );
}