import { Navbar, Footer } from "../components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
