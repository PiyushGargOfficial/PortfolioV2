const menuBtn = document.querySelector(".menuBar")
const menu = document.querySelector(".menu")
let menuOpen = false

menuBtn.addEventListener("click", menuAnimate)

function menuAnimate() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    // menu.style.display = "flex";
    menu.classList.add("active");
    unloadScrollBars();
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    // menu.style.display = "none";
    menu.classList.remove("active");
    reloadScrollBars();
    menuOpen = false;
  }
}

function reloadScrollBars() {
  document.documentElement.style.overflow = "auto" // firefox, chrome
  document.body.scroll = "yes" // ie only
}

function unloadScrollBars() {
  document.documentElement.style.overflow = "hidden" // firefox, chrome
  document.body.scroll = "no" // ie only
}
$(".menu-item").on("click", function (e) {
  var targetSec = $(this).attr("href")
  if (targetSec === "#resume") {
    return false
  } else {
    menuOpen = false
    menuBtn.classList.remove("open")
    reloadScrollBars()
    menu.classList.remove("active")

    $("html, body").animate({
        scrollTop: $(targetSec).offset().top
      },
      2500
    )
  }
})

$(".scrollBarText").on("click", function (e) {
  var targetSec = $(this).attr("data-loc");
  $("html, body").animate({
      scrollTop: $(targetSec).offset().top
    },
    1000
  )

})