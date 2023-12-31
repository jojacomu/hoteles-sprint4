'use client'
import { MenuMain } from "../../componets/molecules/menu/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import { CurrentPageProvider } from "./store/CurrentProvider";
import ProviderReservation from "./store/ProviderReservation";

const fonts = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800", "900"],
});

const metadata = {
    title: "Hotels - JC",
    description: "Sitio para reservas de hoteles",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <ProviderReservation>
            <CurrentPageProvider>
                <body className={fonts.className}>
                    <MenuMain />
                    {children}
                </body>
            </CurrentPageProvider>
        </ProviderReservation>
        </html>
    );
}
