// 인트로 타자 효과
// TextPlugin 없이 JavaScript로 글자를 하나씩 표시합니다.
document.addEventListener('DOMContentLoaded', async () => {
  const intro = document.querySelector('.intro');
  if (!intro) return;

  const textParts = Array.from(intro.querySelectorAll('.intro_text span:not(.caret)'));
  const caret = intro.querySelector('.caret');
  if (textParts.length === 0) return;

  // HTML에 적힌 문구를 기억한 다음, 화면에서는 잠시 비웁니다.
  const fullTexts = textParts.map((part) => part.textContent);
  textParts.forEach((part) => { part.textContent = ''; });

  intro.style.display = 'flex';
  intro.style.visibility = 'visible';
  intro.style.opacity = '1';

  // 타이핑이 끝날 때까지 커서를 숨겨 둡니다.
  let cursorAnimation;
  if (caret) {
    caret.style.opacity = '0';
  }

  const wait = (milliseconds) => new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

  for (let partIndex = 0; partIndex < textParts.length; partIndex += 1) {
    const part = textParts[partIndex];
    const letters = Array.from(fullTexts[partIndex]);

    for (const letter of letters) {
      part.textContent += letter;
      await wait(65);
    }

    await wait(100);
  }

  // 닫는 중괄호까지 다 쓴 다음 커서를 보여주고 깜빡이게 합니다.
  if (caret) {
    caret.style.opacity = '1';
    if (window.gsap) {
      cursorAnimation = gsap.to(caret, {
        opacity: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)'
      });
    }
  }

  // 완성된 코드와 깜빡이는 커서를 잠시 보여준 뒤 인트로를 닫습니다.
  await wait(1500);
  cursorAnimation?.kill();

  if (window.gsap) {
    gsap.to(intro, {
      autoAlpha: 0,
      duration: 0.8,
      onComplete: () => { intro.style.display = 'none'; }
    });
  } else {
    intro.style.opacity = '0';
    window.setTimeout(() => { intro.style.display = 'none'; }, 800);
  }
});

