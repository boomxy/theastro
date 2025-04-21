// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [preact()],
  build: { // 修复 github pages 访问 _astro 404 的问题，最简单的解决方案是在你的项目根目录创建一个名为 .nojekyll 的空文件。这会告诉 GitHub Pages 不要使用 Jekyll 处理你的网站，从而允许访问以下划线开头的文件和目录。
    assets: 'astro-assets' // 将 _astro 改为 astro-assets
  }
});