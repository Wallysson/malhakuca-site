"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X, Menu } from "react-feather";
import { Button } from "./Buttom";
import { Text } from "./Text";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-4 md:px-6 lg:px-14 ">
      <div className="md:hidden flex justify-between w-full">
        <div className="flex items-center gap-4">
          <button className=" text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={36} /> : <Menu size={36} color="#FE3B00" />}
          </button>
          <a href="#">
            <div className="flex items-center justify-center gap-2">
              <Image src="/logo-inam2.png" alt="Logo" width={32} height={24} />
              <Text size="h5-bold" children={"INAM"} variant="secondary" />
            </div>
          </a>
        </div>
        <Button size="small" variant="default" children="Doe" />
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 px-4 py-4 md:static md:inset-y-0 md:flex md:items-center md:justify-end bg-secondary-500 h-screen">
          <button className="md:hidden text-neutral-50" onClick={toggleMenu}>
            <X size={36} />
          </button>
          <ul className="flex flex-col justify-center items-center md:flex-row md:space-x-6 md:py-0 h-full">
            <li className="py-2 md:py-0">
              <a href="#" className="block md:hidden ">
                <Text size="h5-bold" children={"Início"} variant="neutral" />
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className=" md:hidden ">
                <Text
                  size="h5-normal"
                  children={"História"}
                  variant="neutral"
                />
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className=" md:hidden ">
                <Text
                  size="h5-normal"
                  children={"Bumeranguedesign"}
                  variant="neutral"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="md:flex items-center justify-between md:gap-4 lg:gap-14 hidden">
        <a href="#">
          <Image src="/logo-inam2.png" alt="Logo" width={72} height={56} />
        </a>
        <a href="#" className="hidden md:block text-white font-bold text-xl">
          <Text size="h4-bold" children={"Início"} />
        </a>
        <a href="#" className="hidden md:block text-white font-bold text-xl">
          <Text size="h4-normal" children={"História"} />
        </a>
        <a href="#" className="hidden md:block text-white font-bold text-xl">
          <Text size="h4-normal" children={"Bumeranguedesign"} />
        </a>
      </div>
      <div className="text-white font-bold text-xl hidden md:block">
        <Button
          size="medium"
          variant="default"
          onClick={() => {}}
          children={"Doe agora"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
