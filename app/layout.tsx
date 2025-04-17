import "./globals.css";
import Navbar from "@/app/ui/dashboard/navbar";
import {poppins} from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${poppins.className}`}>
          <div>
            <Navbar/>
          </div>
          <div className="mt-30">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
