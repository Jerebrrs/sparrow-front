import { goticaFont } from "@/config/font/fonts";
import { Logo } from "../header/Logo";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-white w-full rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        href="/"
                        className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <Logo />
                        <span
                            className={`${goticaFont.className} antialiased self-center text-4xl font-semibold whitespace-nowrap`}
                        >
                            Sparrow Store
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Link href="#" className="hover:underline me-4 md:me-6">
                            Productos
                        </Link>
                        <Link href="#" className="hover:underline me-4 md:me-6">
                            Politicas de devolución
                        </Link>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex justify-center items-center">
                    <span className="text-sm text-gray-500">

                        <Link href="#" className="hover:underline">
                            © 2025 Nika Software
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};
