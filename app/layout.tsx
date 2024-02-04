import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/AuthProvider";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Theme>
            <Navbar />
            
            <Container>{children}</Container>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
