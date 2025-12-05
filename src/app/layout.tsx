import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Background layers */}
          <div className="fixed inset-0 bg-mesh pointer-events-none" />
          <div className="fixed inset-0 bg-grid pointer-events-none opacity-30" />
          <div className="fixed inset-0 bg-noise pointer-events-none" />
          
          {/* Main content */}
          <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
