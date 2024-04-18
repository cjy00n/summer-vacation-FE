import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "여름방학 | AI 그림일기",
  description:
    "기록은 남기고 싶지만 일기는 귀찮았던 어른이에게, AI 그림일기 '여름방학'",
  openGraph: {
    title: "어른이를 위한 AI 그림일기, '여름방학'",
    description:
      "기록은 남기고 싶지만 일기는 귀찮았던 어른이에게, AI 그림일기 '여름방학'",
    url: "https://summer-vacation.site",
    siteName: "여름방학 | AI 그림일기",
    images: [{ url: "/logo_og.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCLP494K"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
