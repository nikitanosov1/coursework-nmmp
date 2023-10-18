import { StoreProvider } from "@/redux/StoreProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ЧММФ Курсовая",
  description:
    "Приложение, в котором реализованы разностные схемы, а именно явная, неявная и Кранка-Николсона",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
