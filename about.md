---
layout: page
title: About
permalink: /about/
javascript:
  - about.js
---
### E-learning

{% include treehouse.html grid=5 %}

[Treehouse](https://teamtreehouse.com/tlkuo) - Change your Career. Change your Life.

[Code School](https://www.codeschool.com/users/1969044) - Learn by Doing

[Udacity](https://www.udacity.com/) - Be in demand

-----

### Recent Updates

{% raw %}
<div ng-controller="GitHubController">
  <blockquote ng-repeat="item in commits">
    {{ item.message }}
    <cite>{{ item.date | date : 'medium' }}</cite>
  </blockquote>
</div>
{% endraw %}

-----

{% include_relative README.md %}
