// 메인 페이지 GSAP 애니메이션
// 인트로 종료는 intro.js가 담당하므로 여기서는 인트로를 제어하지 않습니다.
document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // 메인 타이틀을 아래에서 위로 등장시킵니다.
  gsap.from('.main_text p', {
    opacity: 0,
    y: 45,
    duration: 0.9,
    stagger: 0.16,
    ease: 'power3.out',
    delay: 4.5
  });

  // 장식 이미지가 가볍게 튀어나온 뒤 천천히 떠다닙니다.
  gsap.fromTo('.deco01, .deco02, .deco03',
    { opacity: 0, scale: 0.5, rotation: -18 },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.18,
      ease: 'back.out(1.7)',
      delay: 4.5,
      onComplete: () => {
        gsap.to('.deco01, .deco02, .deco03', {
          y: -12,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.3
        });
      }
    }
  );

  // 스크롤을 내려 요소가 화면에 들어오면 한 번 나타나게 합니다.
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

  // 프로젝트 이미지에 마우스를 올리면 확대됩니다.
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
});
