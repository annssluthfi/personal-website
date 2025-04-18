import "./globals.css";
import Navbar from "@/app/ui/dashboard/navbar";
import {poppins} from "@/app/ui/fonts"

export const metadata = {
  title: 'Annisa Personal Webiste',
  description: 'Personal Protofolio by Annisa Luthfi Fadillah',
  viewport: 'width=device-width, initial-scale=1',
};

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
          <div className="mx-2 md:mx-20">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
