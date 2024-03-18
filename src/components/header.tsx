"use client";
import * as React from "react";
import { Container, Toolbar, Box, AppBar, Typography } from "@mui/material";
import ConnectWalletButton from "@/components/connect-wallet-button";
import { NetworkList } from "./network-list";

function Header() {
  return (
    <AppBar sx={{ boxShadow: 0 }} color="transparent" position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <NetworkList />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ConnectWalletButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
