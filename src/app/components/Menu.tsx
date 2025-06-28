"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function Menu() {
  const [open, SetOpen] = useState(false);

  return (
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
    </div>
  );
}
