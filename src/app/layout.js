import { Inter } from "next/font/google";
import "./reset.css";

import { APPTITLE } from "../constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { APPTITLE },
  description: "Page about Tofcio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
