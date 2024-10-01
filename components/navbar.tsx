import React from "react";
import { FcFlashOn, FcShop } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FcFile } from "react-icons/fc";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full bg-white px-10 py-4 rounded-full shadow-md mx-3 my-3 mr-3">
      <nav className="flex justify-between items-center align-middle">
        {/* Left Section */}
        <div className="flex gap-8">
          <Link href="#" className="flex items-center gap-1 font-medium">
            New Drops <FcFlashOn />
          </Link>
          <Link href="#" className="flex items-center gap-1 font-medium">
            Catalog <FcShop />
          </Link>
          <Link href="#" className="flex items-center gap-1 font-medium">
            Policies <FcFile />
          </Link>
        </div>

        {/* Center Section */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">
            ANIME <span className="text-blue-600">CANVAS</span>
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link href="#" className="flex items-center">
            <BiSearch className="text-xl" />
          </Link>
          <Link href="#" className="flex items-center">
            <BsCart2 className="text-xl" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
