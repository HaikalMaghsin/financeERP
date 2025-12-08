import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Finance ERP",
  description: "Mini ERP built in 30 days",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex">
          <Sidebar />
          
          <div className="flex-1 flex flex-col">
            <Navbar />
            
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
