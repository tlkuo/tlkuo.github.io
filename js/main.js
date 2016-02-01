(function () {
	'use strict';

  $("img[avatar]").attr("src", function () {
    var email = $(this).attr("avatar").trim().toLowerCase(),
        hash = md5(email),
        width = $(this).width(),
        height = $(this).height(),
        size = width <= height ? width : height;

    return "//www.gravatar.com/avatar/" + hash + "?size=" + size;
  });

	$(document).foundation();
})();
