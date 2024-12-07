import "./globals.css";
import '@radix-ui/themes/styles.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
