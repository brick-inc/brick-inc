import type { Metadata } from "next";
import { Inter, Tinos } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const tinos = Tinos({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Brick",
  description: "Brick is a technology lab focused on creating intuitive, reliable applications that help people move through the world with the little things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${tinos.className}`}>{children}</body>
    </html>
  );
}
