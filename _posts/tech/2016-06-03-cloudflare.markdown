---
categories: alphacamp
title: tech
---

tlkuo's blog 終於在今天開始支援 https 連線了，其實 GitHub Pages 早已支援，但是僅限於預設的 domain，也就是 xxx.github.io，如果使用 custom domain 會因為憑證的關係看到紅色的警告。一開始不以為意想說 http 就夠用了，後來發現 Google 調整 SEO 演算法，優先搜尋 https 網頁，又發現 AlphaCamp 星球部落格出現了 "Mixed Content" 的紅色錯誤訊息，錯誤居然來自於我 blog 的內容，這件事非同小可，馬上研究看看怎麼在 custom domain 情況下支援 https 連線。

拜讀 Google 大神很快找到解決方法，也聽 web 班同學推薦 [CloudFlare](https://www.cloudflare.com/) 平台，幾個簡單的步驟就大功告成，還可以設定頁面規則強制使用 https。一開始還在想說要自己申請個憑證，然後架個 server 透過 proxy 的方式指到 GitHub pages，這些工作原來可以不用再自己做，直接站在巨人的肩膀上感覺真好。
