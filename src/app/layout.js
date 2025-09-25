import Navbar from "@/components/layout/navbar";
import "./style/globals.css";


export const metadata = {
  title: "Title here",
  description: "Write meta description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-background h-full w-full'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
