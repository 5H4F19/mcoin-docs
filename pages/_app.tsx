import { AppProps } from "next/app";
import "./styles.css";
import { cn } from "@/lib/utils";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component className={cn("")} {...pageProps} />
    );
}
