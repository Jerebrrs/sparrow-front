import { AlignJustify, Leaf } from 'lucide-react'

import { Logo } from './Logo'
import Nav from './Nav'
import { Sheet, SheetContent, SheetTrigger } from '../sheet'
// import Socials from './Socials'


const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger >
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent side={'left'}>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-5'>
                        <Logo />
                        <Nav containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl' />
                    </div>
                    {/* <Socials containerStyles='flex gap-x-4' iconStyles='text-2xl' /> */}
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav