import type { Metadata } from "next";
// import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "H.A.T. (Psychotherapie) – Workshop",
    description: "Heart Assisted Therapy — Workshop en opleiding voor psychotherapeuten",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="nl">
            <body>{children}</body>
        </html>
    );
}
