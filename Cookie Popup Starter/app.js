const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

//Timeline
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.6)" }
);
tl.fromTo(
  ".cookie",
  { rotate: -60, x: -50, opacity: 0 },
  { rotate: 0, x: 0, opacity: 1 },
  "<50%"
);
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

//Cookie jump
tl.fromTo(
  ".cookie",
  { y: 0, rotation: 0 },
  { y: -10, rotation: -10, yoyo: true, repeat: -1 }
);

tl.fromTo(
  "#crumbs",
  { rotation: 0 },
  { rotation: -10, yoyo: true, repeat: -1 },
  "<"
);

tl.fromTo(
  "button",
  { scale: 1 },
  {
    scale: 1.05,
    yoyo: true,
    repeat: -1,
    delay: 10,
  }
);

//Fading the cookie out
const button = document.querySelector("button");

button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    display: "none",
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
