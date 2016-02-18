(function () {
  'use strict';

  // init angular app
  angular.module("myBlog", []);

  // init avatar image
  $("img[avatar]").attr("src", function () {
    var email = $(this).attr("avatar").trim().toLowerCase(),
        hash = md5(email),
        width = $(this).width(),
        height = $(this).height(),
        size = width <= height ? width : height;

    return "//www.gravatar.com/avatar/" + hash + "?size=" + size;
  });

  // init foundation
  $(document).foundation();

  // enhance foundation tabs
  $(".tabs a").click(function () {
    this.blur();
  });

})();
