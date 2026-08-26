"use client";
import NavbarApple from "./NavbarApple";
import NavbarApple2 from "./NavbarApple2";
import NavbarApple3 from "./NavbarApple3";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col gap-6 pt-4 pointer-events-none">
      
      {/* Variant 1: Current Apple Design */}
      <div className="pointer-events-auto flex flex-col items-center w-full">
         <div className="bg-white/10 text-white/70 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold mb-2 border border-white/5 shadow-xl">
           Variant 1: Classic Dark Apple
         </div>
         <NavbarApple />
      </div>
      
      {/* Variant 2: Dark Apple with Subtitle */}
      <div className="pointer-events-auto flex flex-col items-center w-full">
         <div className="bg-white/10 text-white/70 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold mb-2 border border-white/5 shadow-xl">
           Variant 2: Two-Line Header (Dark)
         </div>
         <NavbarApple2 />
      </div>

      {/* Variant 3: Light Glass with Dark Logo & Subtitle */}
      <div className="pointer-events-auto flex flex-col items-center w-full">
         <div className="bg-black/40 text-white backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold mb-2 border border-white/10 shadow-xl">
           Variant 3: Light Material & Dark Logo
         </div>
         <NavbarApple3 />
      </div>

    </div>
  );
}
