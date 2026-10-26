// 일반 JavaScript: 스킬 설명, 이메일 복사, TOP 버튼

document.addEventListener('DOMContentLoaded', () => {
  // 스킬 아이콘을 누르면 오른쪽 설명 카드가 바뀝니다.
  const skillInfo = {
    html: ['HTML', '구조가 잘 잡힌 웹 페이지를 만들 수 있어요.'],
    css: ['CSS', '레이아웃과 스타일을 구성할 수 있어요.'],
    sass: ['SASS', '변수를 사용해 CSS를 편리하게 관리해요.'],
    javascript: ['JavaScript', '사용자와 상호작용하는 기능을 만들어요.'],
    react: ['React', '컴포넌트 기반으로 화면을 구성해요.'],
    gsap: ['GSAP', '움직임이 자연스러운 애니메이션을 만들어요.'],
    jquery: ['jQuery', '간단한 DOM 조작과 이벤트를 처리해요.'],
    mysql: ['MySQL', '데이터를 저장하고 조회할 수 있어요.'],
    vscode: ['VS Code', '코드를 작성하고 관리하는 편집기예요.'],
    github: ['GitHub', '코드 버전을 관리하고 공유해요.'],
    figma: ['Figma', '화면을 디자인하고 프로토타입을 만들어요.'],
    photoshop: ['Photoshop', '이미지 편집과 그래픽 작업을 해요.']
  };

  const skillImages = document.querySelectorAll('.skill_img img');
  const skillTitle = document.querySelector('.skill_desc .skill_title');
  const skillText = document.querySelector('.skill_desc .skill_text');
  const skillDescriptionImage = document.querySelector('.skill_desc .skill_iconImg img');

  skillImages.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt} 설명 보기`);

    const showSkill = () => {
      const key = image.alt.toLowerCase();
      const info = skillInfo[key];
      if (!info || !skillTitle || !skillText) return;

      skillTitle.textContent = info[0];
      skillText.textContent = info[1];
      if (skillDescriptionImage) {
        skillDescriptionImage.src = image.src;
        skillDescriptionImage.alt = image.alt;
      }
    };

    image.addEventListener('click', showSkill);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showSkill();
      }
    });
  });

  // 이메일 주소나 복사 아이콘을 누르면 주소를 복사합니다.
  const email = document.querySelector('.myEmail');
  const copyIcon = document.querySelector('.fa-clone');
  const popup = document.querySelector('.copy_popup');

  const copyEmail = async () => {
    if (!email) return;
    const address = email.textContent.trim();
    try {
      await navigator.clipboard.writeText(address);
      if (popup) {
        popup.textContent = 'Copied!';
        popup.classList.add('is-visible');
        window.setTimeout(() => {
          popup.classList.remove('is-visible');
          popup.textContent = 'Click Me!';
        }, 1600);
      }
    } catch (error) {
      // 로컬 파일(file://)이나 보안 연결이 아닌 경우 브라우저가 복사를 막을 수 있습니다.
      window.prompt('이메일 주소를 복사해 주세요.', address);
    }
  };

  email?.addEventListener('click', copyEmail);
  copyIcon?.addEventListener('click', copyEmail);
  copyIcon?.setAttribute('role', 'button');
  copyIcon?.setAttribute('tabindex', '0');
  copyIcon?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      copyEmail();
    }
  });

  // 스크롤을 내렸을 때만 TOP 버튼을 보여줍니다.
  const topButton = document.querySelector('.topBtn');
  const updateTopButton = () => {
    if (topButton) topButton.classList.toggle('is-visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();
});
