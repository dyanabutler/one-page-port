import { Orbitron, Space_Grotesk, IBM_Plex_Mono, Handjet, Ruslan_Display } from "next/font/google";
import "./globals.css";



const orbitron = Orbitron({ subsets: ["latin"], weight: "800" });
const space = Space_Grotesk({ subsets: ["latin"], weight: "700" });
const ruslan = Ruslan_Display({ subsets: ["latin"],  weight: "400" });
const handjet = Handjet({ subsets: ["latin"],  weight: "500" });
const plexmono = IBM_Plex_Mono({ subsets: ["latin"],  weight: "500" });

export const metadata = {
  title: "Dyana Design",
  description: "web developer, designer, artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.className}>
      <body >{children}
        <div ></div>
      </body>
    </html>
  );
}
