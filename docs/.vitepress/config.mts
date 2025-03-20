import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mario's Blog",
  description: "lijiale.mario blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "iOS", link: "/ios/ios" },
    ],

    sidebar: [
      {
        text: "动画",
        items: [
          { text: "Core Animation", link: "/ios/animation/core-animation" },
          { text: "UIView Animation", link: "/ios/animation/uiview-animation" },
        ],
      },
      {
        text: "调试工具",
        items: [
          { text: "LLDB", link: "/ios/debug/lldb" },
          { text: "Instruments", link: "/ios/debug/instruments" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
