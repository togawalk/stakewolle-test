export interface Network {
  chainId: string;
  chainName: string;
  blockExplorerUrls: string[];
  nativeCurrency: {
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
}

export interface Networks {
  [key: string]: Network;
}

export const networks: Networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon",
    blockExplorerUrls: ["https://polygonscan.com"],
    nativeCurrency: { symbol: "MATIC", decimals: 18 },
    rpcUrls: ["https://polygon-rpc.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance",
    nativeCurrency: {
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};
