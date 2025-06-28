import react from "react";
import Link from "next/link";

export default function Footing() {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link href={"/"} className="font-bold font-serif text-xl">
        {" "}
        ANIRA{" "}
      </Link>

      <p>
        {" "}
        <b>&copy;</b> ALL RIGHTS ARE RESERVED
      </p>
    </div>
  );
}
