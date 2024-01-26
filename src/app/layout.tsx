import "./globals.css";
import "react-vertical-timeline-component/style.min.css";

import { ActiveSectionContextProvider } from "./context/ActiveSectionContextProvider";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayuresh | Personal Portfolio",
  description: "Mayuresh is a full-stack developer with 5 years of experience",
};

const LightRedBg = (
  <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
);
const LightBlueBg = (
  <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {LightRedBg}
        {LightBlueBg}
        <ActiveSectionContextProvider>
          <Header />
          {children}

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
