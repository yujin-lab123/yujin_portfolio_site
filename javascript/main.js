// ===============================
// 1. 스킬 아이콘 클릭하면 설명 바꾸기
// ===============================

// 스킬 정보 (이름과 설명)
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

// HTML 요소 가져오기
const skillImages = document.querySelectorAll('.skill_img img');
const skillTitle = document.querySelector('.skill_desc .skill_title');
const skillText = document.querySelector('.skill_desc .skill_text');
const skillIcon = document.querySelector('.skill_desc .skill_iconImg img');

// 아이콘을 클릭했을 때 실행할 함수
function showSkill(image) {
 

  // 그 이름에 맞는 정보를 꺼내요
  const info = skillInfo[image.alt];

  // 정보가 없으면 여기서 끝내요
  if (info === undefined) {
    return;
  }

  // 제목, 설명, 이미지를 바꿔요
  skillTitle.textContent = info.title;
  skillText.textContent = info.text;
  skillIcon.src = image.src;
  skillIcon.alt = image.alt;
}

// 모든 스킬 이미지에 클릭 기능 붙이기
for (let i = 0; i < skillImages.length; i++) {
  const img = skillImages[i];

  img.style.cursor = 'pointer';

  img.addEventListener('click', function () {
    showSkill(img);
  });
}


// ===============================
// 2. 이메일 복사하기
// ===============================

const email = document.querySelector('.myEmail');
const copyIcon = document.querySelector('.fa-clone');
const popup = document.querySelector('.copy_popup');

// 이메일 복사 함수
function copyEmail() {
  const address = email.textContent.trim();

  // 클립보드에 복사
  navigator.clipboard.writeText(address).then(function () {
    // 복사 성공하면 팝업 문구 바꾸기
    popup.textContent = 'Copied!';
    popup.style.opacity = '1';

    // 1.5초 뒤에 원래대로 되돌리기
    setTimeout(function () {
      popup.textContent = 'Click Me!';
      popup.style.opacity = '';
    }, 1500);
  });
}

// 이메일 글자와 복사 아이콘을 클릭하면 복사
email.addEventListener('click', copyEmail);
copyIcon.addEventListener('click', copyEmail);


// ===============================
// 3. 맨 위로 가는 버튼 (스크롤하면 나타남)
// ===============================

const topButton = document.querySelector('.topBtn');

function updateTopButton() {
  // 400px 넘게 스크롤했으면 보이기
  if (window.scrollY > 400) {
    topButton.style.opacity = '1';
    topButton.style.pointerEvents = 'auto';
  } else {
    // 아니면 숨기기
    topButton.style.opacity = '0';
    topButton.style.pointerEvents = 'none';
  }
}

window.addEventListener('scroll', updateTopButton);
updateTopButton();