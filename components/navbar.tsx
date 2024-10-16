import React from "react";
import { FcFlashOn, FcShop } from "react-icons/fc";
import { BsCart2 } from "react-icons/bs";
import { FcFile } from "react-icons/fc";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-white px-10 py-4 rounded-2xl shadow-md mx-3 my-3 ">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex gap-8 flex-1">
          <Link href="/#Drops" className="flex items-center gap-1 font-medium">
            New Drops <FcFlashOn />
          </Link>
          <Link href="/catlog" className="flex items-center gap-1 font-medium">
            Catalog <FcShop />
          </Link>
          <Link href="/policies" className="flex items-center gap-1 font-medium">
            Policies <FcFile />
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex justify-center">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <Link href='/'>ANIME CANVAS</Link>
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <Link href="/checkout" className="flex items-center p-2 rounded-full">
            <BsCart2 className="text-xl" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
