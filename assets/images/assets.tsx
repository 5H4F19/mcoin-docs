import Nextjs from "@/assets/images/frameworks/nextjs.svg"
import Shadcn from "@/assets/images/frameworks/shadcn.svg"
import Tailwindcss from "@/assets/images/frameworks/tailwindcss.svg"
import Browser from "@/assets/images/frameworks/browser.svg"
import { Theme } from "@/context";


interface Assets {
  [key: string]: any;
}

export const assets: Assets = {
  orange: {
    nextjs: Nextjs,
    shadcn: Shadcn,
    tailwind: Tailwindcss,
    browser: Browser
  },
  cyan: {
    nextjs: Nextjs,
    shadcn: Shadcn,
    tailwind: Tailwindcss,
    browser: Browser
  },
  purple: {
    nextjs: Nextjs,
    shadcn: Shadcn,
    tailwind: Tailwindcss,
    browser: Browser
  },
};

export function getImage(name: string, theme: Theme) {
  return assets[theme]?.[name];
}
