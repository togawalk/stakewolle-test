"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";

export function Providers({ children }) {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
        },
      }}
    >
      {children}
    </MetaMaskProvider>
  );
}
