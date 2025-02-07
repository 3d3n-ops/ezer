"use client";
import * as React from "react";
import AppAppBar from "@/app/components/header";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Pricing from "./components/pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="app" id="app" data-scroll-container>
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <AppAppBar />
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
