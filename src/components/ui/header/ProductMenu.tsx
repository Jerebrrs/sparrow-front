"use client"

import { initialData } from "@/seed/seed";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProductMenuProps {
    isMobile?: boolean;
}

const categories = initialData.categories;

export const ProductMenu = ({ isMobile }: ProductMenuProps) => {
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [searchTeam, setSearchTeam] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);

    const toggleCategory = (categoryName: string) => {
        setOpenCategory(openCategory === categoryName ? null : categoryName)
    };

    const filteredCategories = categories.filter(
        (category) =>
            category.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
            category.subcategories?.some((sub) => sub.toLowerCase().includes(searchTeam.toLowerCase()))
    );

    useEffect(() => {
        if (!isMobile && searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [isMobile]);

    if (isMobile) {
        return (
            <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="px-3 py-2">
                    <input
                        type="text"
                        placeholder="Buscar categorías..."
                        className="w-full px-3 py-2 border rounded-md"
                        value={searchTeam}
                        onChange={(e) => setSearchTeam(e.target.value)}
                    />
                    {filteredCategories.map((category) => (
                        <div key={category.name}>
                            <button
                                onClick={() => toggleCategory(category.name)}
                                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                {category.name}
                                {category.subcategories && (
                                    <ChevronRightIcon
                                        className={`ml-2 h-5 w-5 inline-block transform transition-transform ${openCategory === category.name ? "rotate-90" : ""
                                            }`}
                                    />
                                )}
                            </button>
                            <AnimatePresence>
                                {category.subcategories && openCategory === category.name && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="pl-6 space-y-1 overflow-hidden"
                                    >
                                        {category.subcategories.map((subcategory) => (
                                            <motion.a
                                                key={subcategory}
                                                href={`/productos/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {subcategory}
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                        <span>Productos</span>
                        <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
                    </PopoverButton>

                    <PopoverPanel className={"absolute z-10 mt-3 w-screen max-w-md left-1/2 -translate-x-1/2 transform bg-white shadow-2xl ring-1 ring-gray-900/5 rounded-lg"}>
                        <div className="p-4">
                            <div className="mb-4 relative">
                                <input ref={searchInputRef} type="text" placeholder="Buscar Categorias.. ." value={searchTeam} className="w-full px-3 py-2 pl-10 border rounded-md" onChange={(e) => setSearchTeam(e.target.value)} />
                                <ChevronDownIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {filteredCategories.map((category) => (
                                    <div key={category.name} className="mb-4">
                                        <Link href={`/productos/${category.name.toLowerCase()}`} className="font-semibold text-gray-900 hover:underline">{category.name}</Link>
                                        {category.subcategories && (
                                            <ul className="mt-2 ml-4 space-y-2">
                                                {category.subcategories.map((subcategory) => (
                                                    <li key={subcategory}>
                                                        <a
                                                            href={`/productos/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                                                            className="text-sm text-gray-500 hover:text-gray-900 hover:underline"
                                                        >
                                                            {subcategory}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </PopoverPanel>
                </>
            )}

        </Popover>
    )
}
