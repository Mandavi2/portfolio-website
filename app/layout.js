
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./Main";
import { ThemeProvider } from "./context/themeContext";

const inter = Inter({
  subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Portfolio",
  description: "This is the professional protfolio website of Mandavi Sahay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
        <Main>
        <Navbar/>
        {children}
        <Footer/>
        </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
