import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSession } from "@/components/utils/CacheSession";
import LoginPage from "@/features/auth/LoginPage";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { SidebarLeft } from "@/features/sidebarLeft/SidebarLeft";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  if(!session){
    return <>
      <html lang="en">
        <body>
          <LoginPage />
        </body>
      </html>
    </>
  }

  return (
    <html lang="en">
      <body className={"max-w-[1700px] mx-auto " + inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <div className="flex">
              <ReactQueryProvider>
                <SidebarLeft />
                {children}
              </ReactQueryProvider>
              </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
