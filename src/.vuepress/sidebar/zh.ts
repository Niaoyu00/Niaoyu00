import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // {
    //   text: "主要功能与配置演示",
    //   icon: "creative",
    //   prefix: "demo/",
    //   link: "demo/README.md",
    //   children: "structure",
    // },
    {
      text: "文章目录",
      icon: "note",
      prefix: "posts/",//显示post下的文章目录
      children: "structure",
    },
    //"intro",//关于我
    //"slides",//幻灯片页,都在zh文件夹下,也就是根目录下的md文件
  ],
});
