import React from "react";

const URLParams = new URL(window.location.href);

const { hostname, searchParams, pathname } = URLParams;

export const appURL = "https://app.adscendo.xyz";

export const appURLHost = "app.adscendo.xyz";

export const landingPageURL = "https://adscendo.xyz";

export const landingPageURLHost = "adscendo.xyz";

export const isLocalhost = hostname === "localhost";
export const isApp =
  searchParams.get("domain") === "app" || hostname === appURLHost;
export const isLandingPage =
  searchParams.get("domain") === "landing" || hostname === landingPageURLHost;

export const WeedPaperURL = "https://docs.zestprotocol.xyz/";

export const MotivationURL = "https://docs.adscendo.xyz/motivation";

export const MediumURL = "https://medium.com/@Adscendo";

export const DocsURL = "https://docs.adscendo.xyz/";

export const TwitterURL = "https://twitter.com/Zest_Blast";

export const isPublicSalePage = pathname.startsWith("/public-sale");

export const routeConfigs: {
  path: string;
  name: string;
  external?: boolean;
  disabled?: boolean;
  newPage?: boolean;
  icon?: React.ReactNode;
}[] = [
  {
    path: isApp ? "/" : "/mint-redeem",
    name: "Mint&Redeem",
    disabled: isLandingPage,
  },
  {
    path: "/mint-redeem",
    name: "Mint&Redeem",
    disabled: true,
  },
  {
    path: "/earn",
    name: "Earn",
    disabled: true,
  },
  {
    path: "/esADO",
    name: "esADO",
    disabled: true,
    newPage: false,
  },
  {
    path: "/public-sale",
    name: "Token Sale",
    disabled: true,
  },
  {
    path: WeedPaperURL,
    name: "WeedPaper",
    external: true,
    disabled: isApp,
  },
  {
    path: MediumURL,
    name: "Medium",
    external: true,
    disabled: true,
  },
  {
    path: DocsURL,
    name: "Docs",
    external: true,
    disabled: true,
  },
  {
    path: TwitterURL,
    name: "Twitter",
    external: true,
    disabled: isApp,
    icon: <span className={"text-2xl"}>𝕏</span>,
  },
];
