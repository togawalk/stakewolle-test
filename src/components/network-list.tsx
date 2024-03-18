"use client";

import { Button, Stack } from "@mui/material";
import { useSDK } from "@metamask/sdk-react";
import { Network, networks } from "@/shared/config/networks";

export function NetworkList() {
  const { provider, chainId } = useSDK();

  const changeNetwork = async ({ networkName }: { networkName: string }) => {
    if (!provider) {
      throw new Error(`invalid ethereum provider`);
    }
    const network: Network = networks[networkName];
    console.log(network);

    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [network],
      });
    } catch (error) {
      console.log("wallet_addEthereumChain", error);
    }
  };

  const handleNetworkSwitch = async (networkName: string) => {
    await changeNetwork({ networkName });
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
      }}
      direction="row"
      spacing={2}
    >
      <Button
        disabled={chainId === networks["bsc"].chainId}
        variant="text"
        onClick={() => handleNetworkSwitch("bsc")}
      >
        BSC
      </Button>
      <Button
        variant="text"
        disabled={chainId === networks["polygon"].chainId}
        onClick={() => handleNetworkSwitch("polygon")}
      >
        Polygon
      </Button>
    </Stack>
  );
}
