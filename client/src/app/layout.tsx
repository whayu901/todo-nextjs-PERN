import type { Metadata } from "next";
import dayjs from "dayjs";
import "dayjs/locale/id";

import "./globals.css";

// * setup day js follow indonesia time
dayjs.locale("id");

export const metadata: Metadata = {
  title: "Cahyono Wahyu Setiawan",
  description: "Cahyono wahyu setiawan - portofolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-night">{children}</body>
    </html>
  );
}
