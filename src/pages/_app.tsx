import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useSizeStore } from "./stores/styleStore";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { isFontSizeBig } = useSizeStore();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (isFontSizeBig) {
      htmlElement && htmlElement.classList.add("big");
    } else {
      htmlElement && htmlElement.classList.remove("big");
    }
  }, [isFontSizeBig]);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
