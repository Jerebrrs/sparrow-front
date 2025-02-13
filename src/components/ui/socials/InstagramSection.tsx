import { Instagram } from "lucide-react"
import { Card, CardContent } from "../card"
import { Button } from "../button"
import { goticaFont } from "@/config/font/fonts"

export const InstagramSection = () => {
    return (
        <section className="w-full py-12 flex justify-center">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6">
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight">Seguinos en Instagram</h2>
                    <p className="text-gray-700 text-lg">No te pierdas el flow y las últimas tendencias en moda.</p>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-center text-white">
                        <Instagram className="mr-2 h-5 w-5" size={20} />
                        <span
                            className={`${goticaFont.className} text-center antialiased self-center text-2xl font-semibold whitespace-nowrap`}
                        >
                            Sparrowtienda
                        </span>
                    </Button>
                </div>
                <div className="w-full md:w-[400px] flex justify-center mt-6 md:mt-0">
                    <Card className="w-full overflow-hidden shadow-lg">
                        <CardContent className="p-0 overflow-hidden">
                            <iframe
                                src="https://www.instagram.com/p/C3RETwBrK_q/embed"
                                className="w-full min-h-[600px] h-auto"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                            ></iframe>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
