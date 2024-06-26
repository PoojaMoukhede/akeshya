import { Raleway } from "next/font/google/index";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css"; // Ensure this path is correct

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <style jsx global>{`
          body {
            font-family: ${raleway.style.fontFamily};
          }
        `}</style>
      </Head>
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
