import "./globals.css";
import { Inter } from "next/font/google";

const fonts = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800", "900"],
});

export const metadata = {
    title: "Hotels - JC",
    description: "Sitio para reservas de hoteles",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={fonts.className}>{children}</body>
        </html>
    );
}
