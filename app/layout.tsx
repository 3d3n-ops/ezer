import "./globals.css";
import { Manrope } from "next/font/google";
import type React from "react"; // Import React
import { AuthProvider } from "./contexts/auth-context";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Ezer - Personal AI Assistant for Students",
  description: "Do school on EZ-mode with Ezer, your personal AI assistant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
