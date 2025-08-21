import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSR Creations",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar /> */}
      <html lang="en">
        <head></head>
        <body
        // className={`${montserrat.variable} ${openSans.variable} antialiased`}
        >
          {children}
        </body>
      </html>
      <footer id="contact" className="dark-section bg-dark min-h-100 section">
        <div className="container">
          <h5 className="text-green-500">Get in touch with us</h5>
          <div className="grid gap-1">
            <p className="">Number: +880 1936 609 937</p>{" "}
            <p>
              Email: <span>rsrcreations@gmail.com</span>{" "}
            </p>
            <p>
              Our Facebook page:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61578550110498"
                className="text-blue-500 hover:underline"
              >
                RSR Creations
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
