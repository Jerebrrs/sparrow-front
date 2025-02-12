
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ProductMenu } from './ProductMenu';
import { Button } from '../button';
import { Menu, User, X } from 'lucide-react';
import { Logo } from './Logo';
import { Cart } from '../cart/Cart';


const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center sm:hidden'>
            <Button variant={"ghost"} size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </Button>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center sm:justify-start flex-grow sm:flex-grow-0">


            <Logo />
          </div>

          <div className="hidden sm:flex flex-grow justify-center space-x-6">
            <ProductMenu />
            <a>Preguntas Frecuentes</a>
          </div>


          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Cart />
            </Button>
          </div>

          <div className="flex items-center sm:hidden w-auto min-w-0">
            <Button variant="ghost" size="icon">
              <Cart />
            </Button>
          </div>

        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ProductMenu isMobile />
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/cuenta"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Mi Cuenta
              </Link>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Nav;