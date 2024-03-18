"use client";

import WalletIcon from "@mui/icons-material/Wallet";
import { Typography, Button, Stack } from "@mui/material";
import { useSDK } from "@metamask/sdk-react";

export default function ConnectWalletButton() {
  const { sdk, account, ready } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
      console.log("::Try connect::");
    } catch (err) {
      console.warn("::No accounts found::", err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  if (!ready) {
    return (
      <Typography variant="subtitle2" color="text.secondary">
        Loading...
      </Typography>
    );
  }

  return account ? (
    <Stack
      sx={{
        alignItems: "center",
      }}
      direction="row"
      spacing={2}
    >
      <Typography variant="subtitle2" color="text.secondary">
        {account &&
          `${account.slice(0, 6)}...${account.slice(
            account.length - 4,
            account.length,
          )}`}
      </Typography>
      <Button onClick={disconnect}>Disconnect</Button>
    </Stack>
  ) : (
    <Button onClick={connect} variant="outlined" startIcon={<WalletIcon />}>
      Connect Wallet
    </Button>
  );
}
