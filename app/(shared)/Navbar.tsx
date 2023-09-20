import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="flex justify-between items-center gap-10 w-full">
          {/* Logo */}
          <div className="text-xl font-bold text-wh-10 flex-grow">
            <Link href="/">
              <div>PROHIBITION</div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/my-cocktails">My Bar</Link>
            <Link href="/about">About</Link>
          </div>

          {/* User Authentication */}
          <div>
            <Link href="/sign-in">
              <div className="text-wh-10 hover:text-wh-50">Sign In</div>
            </Link>
          </div>
        </div>
      </nav>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;