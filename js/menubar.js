const menuBtn = document.querySelector(".menuBar")
const menu = document.querySelector(".menu")
let menuOpen = false

const titleBar = document.querySelector('.titleBar');
const menuBar = document.querySelector('.menuBar');
const socialBar = document.querySelector('.socialBar');
const loader = document.querySelector('.loaderCont');

function init() {
  titleBar.style.display = "none";
  menuBar.style.display = "none";
  socialBar.style.display = "none";
  unloadScrollBars();
}

init();

function inStart() {
  setInterval(function () {
    afterLoading();
  }, 5000);
}
inStart();

function afterLoading() {
  titleBar.style.display = "block";
  menuBar.style.display = "flex";
  socialBar.style.display = "block";
  loader.classList.add("vanish");
  reloadScrollBars();
}

menuBtn.addEventListener("click", menuAnimate)

function menuAnimate() {
  if (!menuOpen) {
    menuBtn.classList.add("open")
    menu.classList.add("active")
    unloadScrollBars()
    menuOpen = true
  } else {
    menuBtn.classList.remove("open")
    menu.classList.remove("active")
    reloadScrollBars()
    menuOpen = false
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
  var targetSec = $(this).attr("data-loc")
  $("html, body").animate({
      scrollTop: $(targetSec).offset().top
    },
    1000
  )
})
