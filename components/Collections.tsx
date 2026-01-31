import Image from 'next/image';
import Link from 'next/link';

const collections = [
  { name: 'Outerwear', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800', className: 'md:row-span-2' },
  { name: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800', className: '' },
  { name: 'Gear', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800', className: '' },
  { name: 'Essentials', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800', className: '' },
];

export default function Collections() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <h3 className="mb-8 text-2xl font-black uppercase tracking-tighter text-black">
        Browse Collections
      </h3>
      
      <div className="grid h-[1200px] grid-cols-1 gap-4 md:h-[600px] md:grid-cols-2 lg:grid-cols-3">
        {/* Outerwear - Main Left */}
        <div className="group relative h-full w-full overflow-hidden rounded-2xl md:col-span-1 lg:col-span-1">
          <Image
             src={collections[0].image}
             alt={collections[0].name}
             fill 
             className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
           <div className="absolute bottom-6 left-6">
             <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white">{collections[0].name}</h4>
           </div>
        </div>

        {/* Right Side */}
        <div className="flex h-full flex-col gap-4 md:col-span-1 lg:col-span-2">
            {/* Footwear - Top Wide */}
            <div className="group relative h-1/2 w-full overflow-hidden rounded-2xl">
                 <Image
                    src={collections[1].image}
                    alt={collections[1].name}
                    fill 
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                 <div className="absolute bottom-6 left-6">
                   <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white">{collections[1].name}</h4>
                 </div>
            </div>

            {/* Bottom Row */}
            <div className="grid h-1/2 w-full grid-cols-2 gap-4">
                 <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                     <Image
                        src={collections[2].image}
                        alt={collections[2].name}
                        fill 
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                       <h4 className="text-xl font-black uppercase italic tracking-tighter text-white">{collections[2].name}</h4>
                     </div>
                 </div>
                 <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                     <Image
                        src={collections[3].image}
                        alt={collections[3].name}
                        fill 
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                       <h4 className="text-xl font-black uppercase italic tracking-tighter text-white">{collections[3].name}</h4>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
