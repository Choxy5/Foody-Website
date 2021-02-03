/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  `.nav,
    .section__title, .services__data,
    .shop__data,
    .footer__logo, .footer__heading, .footer__socials, .social__links, .footer__end
    `,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(
  `.hero__title,
    .about__img,
    .contact__title`,

  {
    origin: "left",
  }
);
sr.reveal(
  `.about__data,
    .contact__data,`,

  {
    origin: "right",
  }
);
