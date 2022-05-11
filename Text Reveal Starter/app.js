const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.out" },
});

tl.fromTo(
  ".hero-img",
  { scale: 1.3, borderRadius: "0.4rem" },
  { scale: 1, borderRadius: "2rem", duration: 2.5, ease: "elastic.out(1.5,1)" }
);

tl.fromTo(".cta1", { x: -110, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: -110, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: 110, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: -110, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: 110, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: 110, opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(
  ".cta-button",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, ease: "elastic.out(1.5,1)", duration: 1 },
  "<"
);
