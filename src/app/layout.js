import { Orbitron, Space_Grotesk, IBM_Plex_Mono, Handjet, Ruslan_Display } from "next/font/google";
import "./globals.css";





const orbitron = Orbitron({ subsets: ["latin"], weight: "800", variable: '--font-orbitron' });
const space = Space_Grotesk({ subsets: ["latin"], weight: "700", variable: '--font-space' });
const ruslan = Ruslan_Display({ subsets: ["latin"], weight: "400", variable: '--font-ruslan' });
const handjet = Handjet({ subsets: ["latin"], weight: "500", variable: '--font-handjet' });
const plexmono = IBM_Plex_Mono({ subsets: ["latin"], weight: "500", variable: '--font-plexmono' });

export const metadata = {
  title: "Dyana Design",
  description: "web developer, designer, artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${space.variable} ${ruslan.variable} ${handjet.variable} ${plexmono.variable}`}>
      <body>{children}
        
      </body>
    </html>
  );
}
