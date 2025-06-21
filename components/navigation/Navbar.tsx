import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="Najji Teach Logo"
            width={46}
            height={4}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <p>Home</p>
        <p>Comapanions</p>
        <p>My Journey</p>
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
