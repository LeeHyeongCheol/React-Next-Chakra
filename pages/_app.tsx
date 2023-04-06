import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const queryClient = new QueryClient();

const theme = extendTheme({
  
  // デフォルトのフォント
  // https://chakra-ui.com/docs/theming/theme#typography
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  // デフォルトのカラーモード
  // https://chakra-ui.com/docs/theming/theme#config
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />;
      </ChakraProvider>
    </QueryClientProvider>
  );
}
