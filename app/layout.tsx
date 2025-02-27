import "./globals.css";
import { roboto } from "@/components/shared/fonts";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
