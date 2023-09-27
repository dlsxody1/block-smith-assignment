import QueryProvider from "./QueryProvider";
import GNB from "./components/GNB";
import "./globals.css";
import type { LayoutProps } from "./types/LayoutProps";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GNB />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
