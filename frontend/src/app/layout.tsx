import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://peaktalk.ru"),
  title: "PeakTalk — AI-стресс-тест аргументов перед рабочей встречей",
  description:
    "Подготовьтесь к защите бюджета, инвест-питчу, QBR или клиентской эскалации: вставьте тезисы и получите неудобные вопросы, слабые места и план усиления позиции.",
  applicationName: "PeakTalk",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/logo_svg.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "PeakTalk — AI-стресс-тест аргументов перед рабочей встречей",
    description:
      "Вставьте тезисы или план разговора, получите неудобные вопросы, слабые места и план усиления позиции.",
    url: "https://peaktalk.ru",
    siteName: "PeakTalk",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PeakTalk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakTalk — AI-стресс-тест аргументов перед рабочей встречей",
    description:
      "Проверьте позицию с ИИ-оппонентом до реальной встречи.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="antialiased">
        <AuthProvider>
          <QueryProvider>
            {children}
            <Toaster richColors position="top-right" />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
