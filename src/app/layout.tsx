import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "@/assets/css/vendor/fontawesome.css";
// import "@/assets/css/plugins/swiper.css";
// import "@/assets/css/plugins/cursor.css";
// import "@/assets/css/vendor/animate.min.css";
// import "@/assets/css/vendor/metismenu.css";
import "@/assets/vendor/bootstrap.min.css";
import "@/assets/scss/style.scss";

export const metadata: Metadata = {
    title: "Redeemed Christian Fellowship, FUTA Chapter",
    description: "A place where good things never cease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
