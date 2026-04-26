// import { inter, syne } from "../fonts";
// // Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

// // react modal video css
// import "react-modal-video/css/modal-video.css";

// // fonts
// import "../../public/css/fontawesome.css";
// import "../../public/css/icomoon.css";

// //  Swiper styles
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/mousewheel";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import ImportBsJS from "@/components/BootstrapClient";
// import Footer from "@/components/home-one/footer";
// import Header from "@/components/home-one/header";

// // main css
// import "../../public/css/app.css";
// import "../../public/css/main.css";
// import "../../public/css/mobile-nav.css";

// export const metadata = {
// 	title: "Aximo || Responsive Next.js Template",
// 	description: "Aximo || Responsive Next.js Template",
// };

// export default function HomeOneLayout({ children }) {
// 	return (
// 		<html lang="en">
// 			<body className={`${syne.variable} ${inter.variable}`}>
// 				<ImportBsJS />
// 				<Header />
// 				{children}
// 				<Footer />
// 			</body>
// 		</html>
// 	);
// }
import { inter, syne } from "./fonts";

export const metadata = {
  metadataBase: new URL("https://the8verse.com"),

  title: {
    default: "The 8 Verse | Brand Growth Studio for Startups & Businesses",
    template: "%s | The 8 Verse",
  },

  description:
    "The 8 Verse is a full-service brand growth studio helping startups and businesses scale through branding, web development, SEO, marketing, and media production—all in one place.",

  keywords: [
    "brand growth studio",
    "digital marketing agency",
    "web development company",
    "SEO services",
    "branding agency",
    "startup growth",
    "creative production",
  ],

  authors: [{ name: "The 8 Verse" }],
  creator: "The 8 Verse",
  publisher: "The 8 Verse",

  openGraph: {
    title: "The 8 Verse | Brand Growth Studio",
    description:
      "Scale your brand with web, SEO, marketing, and creative services from The 8 Verse.",
    url: "https://the8verse.com",
    siteName: "The 8 Verse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The 8 Verse Brand Growth Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The 8 Verse | Brand Growth Studio",
    description:
      "Helping brands grow with websites, SEO, marketing, and content production.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://the8verse.com",
  },

  manifest: "/site.webmanifest",

  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
