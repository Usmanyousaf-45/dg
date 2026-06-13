import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "YourName | Digital Marketing Expert",
  description: "Performance-driven digital marketer specializing in SEO, Paid Ads, Social Media & Content Strategy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
