import "./reset.css";
import { Jura } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APPTITLE } from "../constants";

const jura = Jura({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: { APPTITLE },
  description: "Page about tofu and Tofcio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jura.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
