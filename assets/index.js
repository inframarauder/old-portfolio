var showMenu = false;

$(".menu-btn").on("click", () => {
  console.log("menu clicked");
  if (!showMenu) {
    $(".menu-btn").addClass("close");
    $(".menu").addClass("show");
    $(".menu-nav").addClass("show");
    $(".menu-brand").addClass("show");
    $(".nav-item").addClass("show");

    showMenu = true;
  } else {
    $(".menu-btn").removeClass("close");
    $(".menu").removeClass("show");
    $(".menu-nav").removeClass("show");
    $(".menu-brand").removeClass("show");
    $(".nav-item").removeClass("show");

    showMenu = false;
  }
});

$(".nav-link").click(() => {
  $(".menu-btn").removeClass("close");
  $(".menu").removeClass("show");
  $(".menu-nav").removeClass("show");
  $(".menu-brand").removeClass("show");
  $(".nav-item").removeClass("show");
});
