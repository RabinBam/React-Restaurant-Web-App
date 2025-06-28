import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartIcon() {
  return (
    <Link href={"/cart"} className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <Image src={"/cart.png"} alt={"Cart-Image"} fill />
      </div>
      <span> Cart (3) </span>
    </Link>
  );
}
