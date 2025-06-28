import React from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-12 text-red-500 p-4 bg-white flex justify-between items-center uppercase">
            {/* Logo */}
            <div className="text-xl font-bold font-serif">
                <Link href ="#">Anira</Link>
            </div>
            {/* Mobile Menu*/}
            <div>
                <Menu/>
            </div>
        </div>
    );
}