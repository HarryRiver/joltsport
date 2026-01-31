import Image from 'next/image';

export default function Hero() {
  return (
    <section className="px-4 pt-6 pb-12 sm:px-6 lg:px-8">
      <div className="relative h-[600px] w-full overflow-hidden rounded-4xl bg-gray-900 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/60 to-transparent mix-blend-overlay" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl drop-shadow-sm">
            Jolt Sport Project
          </h1>
          <p className="mb-8 max-w-xl text-lg font-medium text-blue-50 sm:text-xl text-shadow">
            Technical performance gear for the urban explorer. Engineered for
            movement in the harshest conditions.
          </p>
          <button className="rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105 hover:bg-gray-100 active:scale-95 shadow-xl">
            Shop The Collection
          </button>
        </div>
      </div>
    </section>
  );
}
