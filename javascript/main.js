const skillInfo = {
  html: { title: 'HTML', text: '시맨틱 마크업과 웹 표준을 고려해 구조를 설계하고, 다양한 페이지를 안정적으로 구현할 수 있습니다.' },
  css: { title: 'CSS', text: '웹 페이지의 색상과 레이아웃을 자유롭게 꾸밀 수 있으며, CSS로 구현할 수 있는 간단한 애니메이션도 구현할 수 있습니다.' },
  sass: { title: 'SASS', text: 'CSS를 바탕으로 좀 더 효율적인 SASS코드를 사용할 수 있으며, 기본적인 변수, 중첩, Mixin, 반복문을 사용할 수 있습니다.' },
  javascript: { title: 'JavaScript', text: '버튼과 메뉴처럼 동적인 기능을 만들어 낼 수 있으며 프론트엔드의 기본적인 기술인 문서 제어(DOM Control) 기능을 수행할 수 있습니다.' },
  react: { title: 'React', text: 'React의 핵심 개념을 익혔고 컴포넌트 기반으로 사용자 인터페이스를 구현할 수 있습니다.' },
  gsap: { title: 'GSAP', text: 'GSAP를 활용해 기본적인 스크롤 웹 인터랙션과 애니메이션을 구현할 수 있습니다.' },
  jquery: { title: 'jQuery', text: '웹 페이지의 DOM 조작, 이벤트 처리, 애니메이션 구현 등 기본적인 동적 기능을 구현할 수 있습니다.' },
  mysql: { title: 'MySQL', text: '웹 사이트의 데이터를 저장하고 관리해본 경험이 있으며 데이터의 생성, 수정, 삭제 등을 해본 적이 있습니다.' },
  vscode: { title: 'VS Code', text: '코드를 작성하는 주된 편집기이며 플러그인 등을 사용해 코드를 작성할 수 있습니다.' },
  github: { title: 'GitHub', text: '코드를 저장하고 버전을 관리할 수 있습니다.' },
  figma: { title: 'Figma', text: '오토레이아웃 등 피그마의 핵심 기능을 사용할 수 있으며 화면을 다지인 할 수 있습니다.' },
  photoshop: { title: 'Photoshop', text: '이미지를 편집하고 보정할 수 있으며 간단한 애니메이션 기능도 사용할 수 있습니다.' }
};

const skillImages = document.querySelectorAll('.skill_img img');
const skillTitle = document.querySelector('.skill_desc .skill_title');
const skillText = document.querySelector('.skill_desc .skill_text');
const skillIcon = document.querySelector('.skill_desc .skill_iconImg img');

function showSkill(image) {

  const info = skillInfo[image.alt];
    skillTitle.textContent = info.title;
    skillText.textContent = info.text;
    skillIcon.src = image.src;
    skillIcon.alt = image.alt;
}

for (let i = 0; i < skillImages.length; i++) {
  const img = skillImages[i];

  img.style.cursor = 'pointer';

  img.addEventListener('click', function () {
    showSkill(img);
  });
}

const email = document.querySelector('.myEmail');
const copyIcon = document.querySelector('.fa-clone');
const popup = document.querySelector('.copy_popup');

function copyEmail() {
  const address = email.textContent.trim();

  navigator.clipboard.writeText(address).then(function () {
    popup.textContent = 'Copied!';
    popup.style.opacity = '1';

    setTimeout(function () {
      popup.textContent = 'Click Me!';
      popup.style.opacity = '';
    }, 1500);
  });
}

email.addEventListener('click', copyEmail);
copyIcon.addEventListener('click', copyEmail);


const topButton = document.querySelector('.topBtn');

function updateTopButton() {
  if (window.scrollY > 400) {
    topButton.style.opacity = '1';
    topButton.style.pointerEvents = 'auto';
  } else {
    topButton.style.opacity = '0';
    topButton.style.pointerEvents = 'none';
  }
}

window.addEventListener('scroll', updateTopButton);
updateTopButton();