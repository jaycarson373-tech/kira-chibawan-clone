import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "No4000 キラ│ちばわん";
const description = "保護された犬猫の家族探し。幸せをつかんだキラのプロフィールです。";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
    openGraph: { title, description, type: "website", locale: "ja_JP", images: [{ url: image, width: 1731, height: 909 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
