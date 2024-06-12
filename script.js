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