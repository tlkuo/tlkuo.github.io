---
layout: page
title: About
permalink: /about/
javascript:
  - about.js
---
### 個人簡介

中央資工系與中正電機所畢業。於網站開發打滾了一些時間，喜歡學習與嘗試新技術，正在探索 mobile app 領域。有時候很安靜，不太會說話，喜歡聆聽，並不是睡著了。期待與夥伴們相遇，一同找尋屬於自己的 ONE PIECE。

-----

### 最近更新

{% raw %}
<div ng-controller="GitHubController">
  <blockquote ng-repeat="item in commits">
    {{ item.message }}
    <cite>{{ item.date | date : 'medium' }}</cite>
  </blockquote>
</div>
{% endraw %}

-----

### E-Learning

[Treehouse](https://teamtreehouse.com/tlkuo) - Change your Career. Change your Life.

[Code School](https://www.codeschool.com/users/1969044) - Learn by Doing

[Udacity](https://www.udacity.com/) - Be in demand

-----

{% include_relative README.md %}
