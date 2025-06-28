"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  {
    id: 1,
    tittle: "Home",
    url: "/",
  },
  {
    id: 2,
    tittle: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    tittle: "Working Hours",
    url: "/",
  },
  {
    id: 4,
    tittle: "Contact",
    url: "/",
  },
];

export default function Menu() {
  const [open, SetOpen] = useState(false);

  // Temporary user
  const user = false;

  return (
    <>
      <div>
        {!open ? (
          <Image
            src="/open.png"
            alt=" Open"
            width={20}
            height={20}
            onClick={() => {
              SetOpen(true);
            }}
          />
        ) : (
          <Image
            src="/close.png"
            alt=" Open"
            width={20}
            height={20}
            onClick={() => {
              SetOpen(false);
            }}
          />
        )}
        {open && (
          <div className="bg-red-500 text-white absolute w-full left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
            {links.map((items) => (
              <Link
                href={items.url}
                key={items.id}
                onClick={() => SetOpen(false)}
              >
                {items.tittle}
              </Link>
            ))}
            {!user ? (
              <Link href="/Login" onClick={() => SetOpen(false)}>
                Login
              </Link>
            ) : (
              <Link href="/Order" onClick={() => SetOpen(false)}>
                Orders
              </Link>
            )}
            <CartIcon />
          </div>
        )}
      </div>
    </>
  );
}
