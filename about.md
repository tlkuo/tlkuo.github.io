---
layout: page
title: About
permalink: /about/
weight: 5
javascript:
  - about.js
---

### 個人簡介

從事網站開發工作超過五年的時間，這段期間深刻體會到技術的進步，不論現在還是未來都必須保持學習的狀態。總覺得學程式就跟學武功一樣，任督二脈打通之後學什麼都快。希望能兼顧知識的深度與廣度，在面對問題的時候快速找到方向。

相信教學與分享能夠讓自己學習得更多，這段時間受惠許多網路資源，這邊紀錄著生活與學習的點點滴滴分享給大家。

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

### 線上學習紀錄

[Treehouse](https://teamtreehouse.com/tlkuo) - Change your Career. Change your Life.

[Code School](https://www.codeschool.com/users/1969044) - Learn by Doing

[Udacity](https://www.udacity.com/) - Be in demand

-----

{% include_relative README.md %}
