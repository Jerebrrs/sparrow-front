import { IoCartOutline } from "react-icons/io5"
import { Sheet, SheetContent, SheetTrigger } from "../sheet"
import Link from "next/link"


export const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger >

                <div className="relative m-6cursor-pointer m-6">
                    <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white" >3</span>
                    <IoCartOutline className="w-5 h-5" size={40} />
                </div>
            </SheetTrigger>
            <SheetContent side={'right'} className="w-full">
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className="flex justify-center items-center h-[800px]">
                        <IoCartOutline size={80} className="mx-5" />

                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-semibold">Tu carrito esta vacio</h1>
                            <Link href={'/'}
                                className="text-blue-400 mt-2 text-4xl"
                            >
                                Regresar
                            </Link>
                        </div>
                    </div>
                </div>

            </SheetContent>
        </Sheet>

    )
}
