import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import image_src from './images/logo.png'

const config: DocsThemeConfig = {
  logo: (
    <Image src={image_src} alt={""} width={160}/>
  ),
  nextThemes: { defaultTheme: "light", forcedTheme: "light" },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Victory Chain Docs",
    };
  },
  navigation: false,
};

export default config;
