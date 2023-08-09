import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "@wagmi/chains";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";

import * as Toast from "@radix-ui/react-toast";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { publicProvider } from "wagmi/providers/public";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const queryClient = new QueryClient();

const { chains } = configureChains([goerli], [publicProvider()]);

// const config = createConfig({
//   autoConnect: true,
//   publicClient: createPublicClient({
//     chain: goerli,
//     transport: http()
//   }),
//   connectors: [
//     new InjectedConnector({
//       chains,
//       options: {
//         name: "Injected",
//         shimDisconnect: true
//       }
//     }),
//     new MetaMaskConnector({ chains }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId: "5d33f0689d3a5b2b54836b30032fc6e3"
//       }
//     })
//   ]
// });

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    // alchemyId: process.env.ALCHEMY_ID, // or infuraId
    autoConnect: true,
    walletConnectProjectId: "5d33f0689d3a5b2b54836b30032fc6e3",

    // Required
    appName: "Adscendo",
    chains,

    // Optional
    appDescription: "Adscendo Protocol",
    appUrl: "https://adscendo.xyz/", // your app's url
    appIcon: "https://adscendo.xyz/adscendo.svg" // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toast.Provider swipeDirection={"right"}>
      <RadixTooltip.Provider delayDuration={0}>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig config={config}>
            <ConnectKitProvider>
              <App />
            </ConnectKitProvider>
            <ToastPrimitive.Viewport className="[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
          </WagmiConfig>
        </QueryClientProvider>
      </RadixTooltip.Provider>
    </Toast.Provider>
  </React.StrictMode>
);
