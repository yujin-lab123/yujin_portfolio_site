const intro = document.querySelector('.intro');
const caret = document.querySelector('.intro .caret');
const parts = document.querySelectorAll('.intro_text span:not(.caret)');

const texts = [];
for (let i = 0; i < parts.length; i++) {
  texts.push(parts[i].textContent);
  parts[i].textContent = '';
}

intro.style.display = 'flex';
intro.style.visibility = 'visible';
intro.style.opacity = '1';

caret.style.opacity = '0';

function closeIntro() {
  startMainAnimation();
  gsap.killTweensOf(caret);
  gsap.to(intro, {
    autoAlpha: 0,
    duration: 0.8,
    onComplete: function () {
      intro.style.display = 'none';
    }
  });
}

let partNum = 0;
let letterNum = 0;
let endTimer;

const timer = setInterval(function () {
  if (partNum >= parts.length) {
    clearInterval(timer); // 타이핑 멈추기

    caret.style.opacity = '1';
    gsap.to(caret, { opacity: 0, duration: 0.45, repeat: -1, yoyo: true, ease: 'steps(1)' });

    endTimer = setTimeout(closeIntro, 1500);
    return;
  }

  parts[partNum].textContent += texts[partNum][letterNum];
  letterNum++;

  if (letterNum >= texts[partNum].length) {
    partNum++;
    letterNum = 0;
  }
}, 65);

intro.addEventListener('click', function () {
  intro.style.pointerEvents = 'none';
  clearInterval(timer);
  clearTimeout(endTimer);
  closeIntro();
});