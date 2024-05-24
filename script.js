$(document).ready(function()
{
  // navigation bar active link start
  var navigationItem = document.querySelectorAll(".navlink");
  for (var i = 0; i < navigationItem.length; i++) {
    navigationItem[i].addEventListener("click", function (event) {
      navigationItem.forEach(function (link) {
        link.classList.remove("active");
      });
      navigationItem[i].classList.add("active");
    });
  }

  //   Navigation bar active link ends
//   var lastScrollTop = 0;

//   $(window).scroll(function (event) {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop) {
//       // Scroll down
//       $("#navbar").addClass("navbar-hidden");
//     } else {
//       // Scroll up
//       $("#navbar").removeClass("navbar-hidden");
//     }
//     lastScrollTop = st;
//   });

  var allSection = document.querySelectorAll("section"); //selecting all section
  window.addEventListener("scroll", function () {
    var scrollPosition = document.documentElement.scrollTop;

    for (let i = 0; i < navigationItem.length; i++) {
      var sectionTop = allSection[i].offsetTop-80;
      var sectionBottom = sectionTop + allSection[i].offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navigationItem.forEach(function (link) {
          link.classList.remove("active");
        });
        navigationItem[i].classList.add("active");
      }
    }
  });
});