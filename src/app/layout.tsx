import "@/shared/styles/global.css";
import { container } from "./page.css";
import { Footer, Header } from "@/widgets";
import { Providers } from "@/shared/providers/provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className={container}>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
