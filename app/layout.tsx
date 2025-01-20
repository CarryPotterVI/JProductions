import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BackToTop } from "@/components/back-to-top";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JP Productions - Modern Web Development",
  description: "Professional web development services by Jack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jost.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1 bg-background">
                <div className="mx-auto w-full max-w-[1400px]">
                  {children}
                </div>
              </main>
              <Footer />
              <BackToTop />
              <ThemeToggle />
              <LanguageSwitcher />
              <Toaster position="top-right" expand={true} richColors />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}