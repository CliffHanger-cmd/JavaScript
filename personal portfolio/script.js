// GSAP ScrollReveal for project cards
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: { trigger: card, start: "top 80%" },
  });
});
