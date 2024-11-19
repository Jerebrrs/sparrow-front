"use client";

import React, { useState, useEffect } from "react";

import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import MobileNav from "./MobileNav";
import { Cart } from "../cart/Cart";
import { goticaFont, titleFont } from "@/config/font/fonts";


const Header = () => {
    const [header, setHeader] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header
            className={`${header
                ? "py-0 bg-white shadow-lg dark:bg-accent"
                : "py-0 dark:bg-transparent"
                } sticky top-0 z-30 transition-all ${pathName === "/" && "bg-[#ffffff]"}`}
        >
            <div className="bg-black text-center m-">
                <h1 className={` text-white`}>
                    Todo el <span className={`${goticaFont.className} text-white`}>Flow</span> en un solo lugar!
                </h1>
            </div>
            <div className="container mx-auto">


                <div className="flex justify-between items-center">
                    <div className="xl:hidden p-4">
                        <MobileNav />
                    </div>

                    <Logo />
                    <Nav
                        containerStyles="hidden xl:flex gap-x-8 items-center"
                        linkStyles="relative hover:text-primary transition-all"
                        underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                    />
                    <Cart />
                </div>
            </div>
        </header>
    );
};

export default Header;
