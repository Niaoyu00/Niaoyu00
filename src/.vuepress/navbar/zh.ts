import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "常用工具",
    icon: "tool",
    prefix: "/zh/posts/",
    children: [
      {
        text: "字体图标",
        children: [
          { 
            text: "Iconfont 精选图标", 
            icon: "flower", 
            link: "https://vuepress-theme-hope.gitee.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87" 
          },
        ],
      },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
