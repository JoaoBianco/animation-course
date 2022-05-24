const tl = gsap.timeline({
  defaults: { duration: 0.35, ease: "Power2.easeOut" },
});

const home = document.querySelector(".home");
const notification = document.querySelector(".notifications");

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
home.addEventListener("click", () => {
  gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  gsap.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.5, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
});

gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "center" });
gsap.set(".wave", { transformOrigin: "bottom" });
gsap.set(".wave", { opacity: 0 });
notification.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(5,0.2)" }
  );
  gsap.fromTo(
    ".ringer",
    { rotation: -3, x: 0.5 },
    { rotation: 0, x: 0, duration: 2, ease: "elastic.out(5,0.2)" }
  );
  gsap.fromTo(
    ".wave",
    { opacity: 1, scale: 0.7 },
    { opacity: 0, scale: 1.2, duration: 1 }
  );
});
