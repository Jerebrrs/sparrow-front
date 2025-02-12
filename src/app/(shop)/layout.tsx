import { Footer } from "@/components";
import Header from "@/components/ui/header/Header";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen overflow-x-hidden max-w-full">
            <Header />
            <div className="px-0 sm:px-10">
                {children}
            </div>
            <Footer />
        </main>
    );
}