import Header from "@/components/ui/header/Header";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="px-0 sm:px-10">
                {children}
            </div>
        </main>
    );
}