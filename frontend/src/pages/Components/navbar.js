"use client";
import { useState } from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* NavBar */}
      <div className=" px-[100px] py-[40px] flex justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="hidden sm:text-[#b2b0c6] sm:flex justify-center cursor-pointer gap-5">
          <h1>Home</h1>
          <h1>Dashboard</h1>
          <h1>Features</h1>
        </div>

        <div className="hidden sm:grid">
          <h1>Connect wallet</h1>
        </div>

        <div className="md:hidden mb-4 ">
          <button className="text-dark" onClick={toggleMenu}>
            {isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
          </button>
        </div>


      </div>

      {isOpen && (
        <div
          className="fixed z-20 top-0 bg-[#010922]
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center"
        >
          <button
            className="text-white absolute top-[60px] right-[40px]"
            onClick={toggleMenu}
          >
            <Cross2Icon className="text-2xl" />
          </button>

          <h3 className="text-white text-sm font-normal leading-none">
            <Link href="/">Home</Link>
          </h3>
          

          <h3 className="text-white text-sm font-normal leading-none">
          <Link href="/explore">
                  <button>Dashboard</button>
                </Link>
          </h3>
          
          <h3 className="text-white text-sm font-normal leading-none">
                <Link href="/about-us">
                  <button>Features</button>
                </Link>
          </h3>


          <Link href="/SignIn">
            <div className="flex">
              <button className="">
                Connect Wallet
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
