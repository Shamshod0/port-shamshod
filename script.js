window.addEventListener("DOMContentLoaded", function () {
  this.window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });

  const menubtn = this.document.querySelector(".menu-btn");
  const navigation = this.document.querySelector(".navigation");
  const navigationitems = this.document.querySelectorAll(".navigation a");

  menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  navigationitems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menubtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });

  const scrollbtn = this.document.querySelector(".scrolltotop-btn");
  this.window.addEventListener("scroll", () => {
    scrollbtn.classList.toggle("active", this.window.scrollY > 500);
  });
  scrollbtn.addEventListener("click", () => {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  });

  this.window.addEventListener("scroll", () => {
    let reveals = this.document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = this.window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
