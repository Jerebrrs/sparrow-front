import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
    { name: 'Jeans', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Remeras', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Gorras', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Buzos', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Zapatillas', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function SelectButton() {
    return (
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            <span>Productos</span>
            <ChevronDownIcon aria-hidden="true" className="w-5 h-5 ml-2" />
          </PopoverButton>
    
          <PopoverPanel
            className="absolute z-10 mt-3 w-screen max-w-xs sm:max-w-sm lg:max-w-lg left-1/2 -translate-x-1/2 transform bg-white shadow-2xl ring-1 ring-gray-900/5 rounded-lg "
          >
            <div className="p-4">
              {/* Lista de soluciones */}
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  {/* <item.icon className="w-6 h-6 text-gray-400" /> */}
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900 hover:underline">
                      {item.name}
                    </a>
                    {/* <p className="text-sm text-gray-500">{item.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
      );
}