import { useState } from 'react';
import { AlignJustify } from 'lucide-react';

import { Logo } from './Logo';
import Nav from './Nav';
import { Sheet, SheetContent, SheetTrigger } from '../sheet';

const MobileNav = () => {
    const [isProductOpen, setIsProductOpen] = useState(false);

    const toggleProductMenu = () => {
        setIsProductOpen((prev) => !prev);
    };

    return (
        <Sheet>
            <SheetTrigger>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-5">
                        <Logo />
                        {/* <Nav containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" /> */}
                        <div className="space-y-2 py-6">
                            <div className="-mx-3">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    aria-controls="product-menu"
                                    aria-expanded={isProductOpen}
                                    onClick={toggleProductMenu}
                                >
                                    Productos
                                    <svg
                                        className={`h-5 w-5 flex-none transition-transform ${isProductOpen ? 'rotate-180' : ''}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {isProductOpen && (
                                    <div className="mt-2 space-y-2" id="product-menu">
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                            Jeans
                                        </a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                            Remeras
                                        </a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                            Gorras
                                        </a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                            Buzos
                                        </a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                            Zapatillas
                                        </a>

                                    </div>
                                )}
                            </div>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                Informacion
                            </a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                Blog
                            </a>

                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
