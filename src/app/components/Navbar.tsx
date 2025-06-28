import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

export default function Navbar() {
  return (
    <div className="h-12 text-red-500 p-4 bg-white flex justify-between items-center uppercase border-b border-amber-600 md:h-2/4 lg:px-17 lx-40px ">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/Menu">Menu</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      {/* Logo */}
      <div className="text-xl font-bold font-serif flex-1 md:text-center">
        <Link href="#">Anira</Link>
      </div>
      {/* Mobile Menu*/}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Side link */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static  flex  items-center gap-1 cursor-pointer bg-orange-200 rounded-md">
          <Image src={"/phone.png"} alt="Phone" width={20} height={20} />
          <span> 123 456 789 </span>
        </div>
        <Link href="/Menu">Login</Link>
        <Link href="/Contact">Orders</Link>
        <CartIcon />
      </div>
    </div>
  );
}
