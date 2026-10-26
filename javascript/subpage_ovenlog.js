const tabBtns = document.querySelectorAll(".d_btn_content .tab_btn");
const tabContents = document.querySelectorAll(".d_btn_content .tab_content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    tabBtns.forEach((item) => {
      item.classList.remove("active");
    });

    btn.classList.add("active");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    const targetId = btn.dataset.tab;
    const targetContent = document.getElementById(targetId);

    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});

/*-----------------Frontend Point_tab-------------------*/
















