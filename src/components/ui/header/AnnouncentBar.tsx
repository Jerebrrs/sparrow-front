"use client"

import { goticaFont } from "@/config/font/fonts"
import { useState, useEffect } from "react"

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > 0) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!isVisible) return null

    return <div className="bg-black text-center m-">
        <h1 className={` text-white`}>
            Todo el <span className={`${goticaFont.className} text-white`}>Flow</span> en un solo lugar!
        </h1>
    </div>
}

