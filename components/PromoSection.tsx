import Image from 'next/image';

export default function PromoSection() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-4xl bg-black shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="relative h-64 w-full md:h-auto md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000"
              alt="Flagship Store"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-xl font-black uppercase text-white">Our Flagship</h3>
              {/* <div className="mt-2 h-0.5 w-12 bg-white" /> */}
              <p className="mt-2 max-w-xs text-xs font-medium text-gray-300">
                Experience the materials and fit in person at our Tokyo and New York locations.
              </p>
              <button className="mt-4 rounded-full border border-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
                Visit Stores
              </button>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex h-96 w-full items-center justify-center bg-black md:w-1/2">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Archive Event
              </span>
              <h2 className="mt-2 text-7xl font-black italic tracking-tighter text-white sm:text-8xl">
                50%
                <br />
                <span className="block -mt-4">OFF</span>
              </h2>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                End of Season Sale Starting Now
              </p>
              <button className="mt-8 rounded-full bg-white px-10 py-3 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                Shop Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
