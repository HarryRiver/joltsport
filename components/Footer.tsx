import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter */}
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
            Access the inner circle
          </h2>
          <div className="mt-8 flex w-full max-w-md items-center rounded-full bg-white/10 p-1.5 backdrop-blur-sm">
             <input 
               type="email" 
               placeholder="ENTER YOUR EMAIL" 
               className="w-full bg-transparent px-4 py-2 text-xs font-bold uppercase text-white placeholder-gray-500 outline-none"
             />
             <button className="flex items-center gap-2 rounded-full bg-white px-8 py-2.5 text-xs font-black uppercase text-black transition-colors hover:bg-gray-200">
               Join
             </button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-16 md:grid-cols-4 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
             <h3 className="mb-6 text-xl font-black italic">JOLT.</h3>
             <p className="max-w-xs text-xs leading-relaxed text-gray-500">
               Technical performance apparel for the modern era. Designed for durability and minimal aesthetics.
             </p>
          </div>
          
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Support</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns Portal</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><a href="#" className="hover:text-white">About Jolt</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Stockists</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-white hover:text-black transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-white hover:text-black transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-white hover:text-black transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-wider text-gray-600 md:flex-row">
           <p>&copy; 2024 Jolt Apparel Inc. All Rights Reserved.</p>
           <div className="flex gap-6">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Cookies</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
