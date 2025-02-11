"use client";

import { Button } from "@/components/ui/button";
import type React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href =
      "mailto:whynotnow450@gmail.com?subject=Inquiry%20about%20Ezer";
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Ezer</div>
      <nav className="space-x-4">
        <Button
          variant="outline"
          className="bg-white text-purple-900 hover:bg-gray-200"
          asChild
        >
          <a href="#" onClick={handleContactClick}>
            Contact Us
          </a>
        </Button>
        <Button
          variant="outline"
          className="bg-white text-purple-900 hover:bg-gray-200"
          asChild
        >
          <Link href="/login">Login</Link>
        </Button>
      </nav>
    </header>
  );
}
