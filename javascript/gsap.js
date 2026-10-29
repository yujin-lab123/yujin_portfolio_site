gsap.set('.main_text p', { opacity: 0, y: 45 });
gsap.set('.deco01, .deco02, .deco03', { opacity: 0, scale: 0.5, rotation: -18 });

function startMainAnimation() {
  gsap.to('.main_text p', {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.16,
    ease: 'power3.out',
    delay: 0.3
  });
 
  gsap.to('.deco01, .deco02, .deco03', {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    stagger: 0.18,
    ease: 'back.out(1.7)',
    delay: 0.3,
    onComplete: function () {
      gsap.to('.deco01', {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.deco02', {
        x: 15,
        rotation: 10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.deco03', {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: 'none'
      });
    }
  });
}

/*---------------/메인 화면----------------------*/

document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll(
    '.profile_title, .profile_box, .skill_desc, .project_box, .together_text'
  );

  revealItems.forEach((item) => gsap.set(item, { opacity: 0, y: 35 }));

  function revealOnScroll() {
    revealItems.forEach((item) => {
      if (item.dataset.revealed === 'true') return;
      if (item.getBoundingClientRect().top < window.innerHeight * 0.88) {
        item.dataset.revealed = 'true';
        gsap.to(item, { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' });
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  document.querySelectorAll('.project_box').forEach((card) => {
    const image = card.querySelector('.project_thumbnail img');
    if (!image) return;

    card.addEventListener('mouseenter', () => {
      gsap.to(image, { scale: 1.06, duration: 0.45, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(image, { scale: 1, duration: 0.45, ease: 'power2.out' });
    });
  });

/*--------------------------------*/

  gsap.to(".profile_bg", {
    xPercent: -50,
    duration: 60,
    ease: "none",
    repeat: -1
  });

});/*--end--*/
