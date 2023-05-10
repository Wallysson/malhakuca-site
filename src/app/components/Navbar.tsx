"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X, Menu } from "react-feather";
import { Button } from "./Buttom";
import { Text } from "./Text";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-4 md:px-6 lg:px-14">
      <div className="md:hidden flex justify-between w-full">
        <div className="flex items-center gap-4">
          <button className=" text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={36} /> : <Menu size={36} color="#FE3B00" />}
          </button>
          <a href="#">
            <div className="flex items-center justify-center gap-2">
              <Image src="/logo-inam2.png" alt="Logo" width={32} height={24} />
              <Text size="h5-bold" variant="secondary">
                INAM
              </Text>
            </div>
          </a>
        </div>
        <Button size="small" variant="default">
          Doe
        </Button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 px-4 py-4 md:static md:inset-y-0 md:flex md:items-center md:justify-end bg-secondary-500 h-full md:h-auto vh-100 md:vh-auto z-50">
          <button className="md:hidden text-neutral-50" onClick={toggleMenu}>
            <X size={36} />
          </button>
          <ul className="flex flex-col justify-center items-center md:flex-row md:space-x-6 md:py-0 h-full">
            <li className="py-2 md:py-0">
              <a href="#" className="block md:hidden ">
                <Link href="/" onClick={closeMenu}>
                  <Text size="h5-bold" variant="neutral">
                    Início
                  </Text>
                </Link>
              </a>
            </li>
            <li className="py-2 md:py-0">
              <Link href="historia" className=" md:hidden" onClick={closeMenu}>
                <Text size="h5-normal" variant="neutral">
                  História
                </Text>
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="bumeranguedesign" className=" md:hidden" onClick={closeMenu}>
                <Text size="h5-normal" variant="neutral">
                  Bumeranguedesign
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="md:flex items-center justify-between md:gap-4 lg:gap-14 hidden">
        <Link href="#">
          <Image src="/logo-inam2.png" alt="Logo" width={72} height={56} />
        </Link>
        <Link href="/" className="hidden md:block text-white font-bold text-xl">
          <Text size="h4-bold">Início</Text>
        </Link>
        <Link
          href="/historia"
          className="hidden md:block text-white font-bold text-xl"
        >
          <Text size="h4-normal">História</Text>
        </Link>
        <Link
          href="bumeranguedesign"
          className="hidden md:block text-white font-bold text-xl"
        >
          <Text size="h4-normal">Bumeranguedesign</Text>
        </Link>
      </div>
      <div className="text-white font-bold text-xl hidden md:block">
        <Button size="medium" variant="default" onClick={() => {}}>
          Doe agora
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
