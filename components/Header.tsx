"use client";
import { useState } from "react";
import {Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


const navLinks = [
  { name: "Tours", href: "#" },
  { name: "Popular tours", href: "#" },
  { name: "News", href: "#" },
  { name: "About us", href: "#" },
  { name: "Blog", href: "#" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const handleClick = (name: string) => {
    setActiveLink(name); // Set the clicked link as active
  };
  const pathname = usePathname();

  return (
    <div className="bg-white h-[75px] sticky sm:top-0 font-subtext font-semibold    md:shadow-none z-50 ">
      {/* DESKTOP */}

      <div className=" hidden w-full h-full sm:flex justify-between  items-stretch  px-2 md:px-6 ">
        <div className=" flex pt-[27px] items-center ml-[93px] mt-[24px]">
          <Link href="/">
            <Image
              src={"/logo-africa.png"}
              alt="Logo"
              width={150}
              height={150}
              className="w-[144.04px]h-[108px] "
            />
          </Link>
        </div>

        <div className=" flex h-full pt-[56px] ">
          <div className="flex gap-2 font-subtext xl:gap-[30px] leading-[18.27px] sm:text-[14px] md:text-[14px] ">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name; // Check if this link is active
              return (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.name)}
                  className={`px-5  transition-all ${
                    isActive
                      ? "font-bold border-lightGreen border-2  rounded-2xl bg-slate-100/20"
                      : "font-normal"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          <Menu className="ml-3 font-bold" />
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={` block sm:hidden  fixed top-0 w-full z-[999]   py-6 animate-in fade-in zoom-in  ${
          menu ? "bg-white text-black  py-2" : "bg-white"
        } `}
      >
        <div className="flex justify-between  mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Link href="/">
              <Image
                src={"/logo-africa.png"}
                alt="Logo"
                width={150}
                height={150}
                className="w-[100px] "
              />
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src={"/menu-alt.svg"}
                alt="logo"
                className="cursor-pointer w-[50px]  animate-in fade-in zoom-in"
                width={100}
                height={100}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] font-header xl:gap-[50px] text-[16px] flex-col select-none ">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      onClick={closeMenu}
                      href={link.href}
                      key={link.name}
                      className={
                        isActive
                          ? "font-bold text-lightGreen "
                          : "font-semibold"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center pt-[20px]  gap-1 md:gap-1 lg:gap-2"></div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
