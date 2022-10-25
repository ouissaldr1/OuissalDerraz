//==========================Scroll animation =================================
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});
sr.reveal(`.containerr .content`, {
  origin: "left",
});
sr.reveal(`.images .me`, {
  origin: "right",
});
// sr.reveal(`.info img `, {
//   origin: "top",
// });
sr.reveal(`.about`, {
  origin: "right",
});
sr.reveal(`.timeline ul .first,.timeline ul .second`, {
  origin: "top",
  interval: 190,
});
sr.reveal(
  `.item1,.item2,.item3,.item4,.item5,.item6,.item7,.item8,.item9,.item10,.item11,.item12`,
  {
    origin: "left",
    interval: 200,
  }
);

sr.reveal(`.project-picture`, {
  origin: "bottom",
});
// ***************media queryies µ****************
// header
const close = document.querySelector(".close");
const btnToggle = document.querySelector(".dropleft .btn-toggler");
const spans = document.querySelectorAll(".span");
btnToggle.addEventListener("click", () => {
  close.classList.toggle("none");
  spans.forEach((elemen) => {
    elemen.classList.toggle("none");
  });
});
