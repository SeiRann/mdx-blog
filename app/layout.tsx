import type { Metadata } from "next";
import "./globals.css";
import { switchTheme, Theme } from "@/components/themeSwitcher";
import NavBar from "@/components/navbar.mdx";

export const metadata: Metadata = {
  title: "My little corner",
  description: "Blog made in Next but overly simplified with MDX",
  icons: {
    icon: "/capybara.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={switchTheme(Theme.dark)}>
      <body
        className={
          "flex-col min-h-screen  antialiased bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground"
        }
      >
        <div className="flex flex-row justify-around bg-dark-foreground-2 dark:bg-dark-background-0h p-3">
          <NavBar />
        </div>
        <div className="flex flex-col items-center mt-5">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
