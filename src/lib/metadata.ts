import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function constructMetadata({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = "/portfolio/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: `${SITE_CONFIG.author} | ${title}`,
      template: `%s | ${SITE_CONFIG.author}`,
    },
    description,
    openGraph: {
      title: `${SITE_CONFIG.author} | ${title}`,
      description,
      images: [{ url: image }],
      type: "website",
      siteName: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_CONFIG.author} | ${title}`,
      description,
      images: [image],
      creator: `@${SITE_CONFIG.author}`,
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
