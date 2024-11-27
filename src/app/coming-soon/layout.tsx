import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Coming Soon | Redeemed Christian Fellowship, FUTA Chapter",
    description: "Our New Home is Coming Soon!",
};

export default function ComingSoonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
