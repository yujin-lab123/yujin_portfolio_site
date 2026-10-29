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

// const viewRadios = document.querySelectorAll(
//   'input[name="viewType"]'
// );

// const viewContents = document.querySelectorAll(".view_content");

// viewRadios.forEach((radio) => {
//   radio.addEventListener("change", () => {
//     const viewType = radio.value;

//     viewContents.forEach((content) => {
//       content.classList.toggle(
//         "active",
//         content.dataset.content === viewType
//       );
//     });
//   });
// });

const codeView = document.querySelector("#codeView");
const imageView = document.querySelector("#imageView");

const codeContents = document.querySelector(".codeView_contents");
const imageContents = document.querySelector(".imageView_contents");

codeContents.style.display = "block";

codeView.addEventListener("change", function () {
  if (codeView.checked) {
    codeContents.style.display = "block";
    imageContents.style.display = "none";
  }
});

imageView.addEventListener("change", function () {
  if (imageView.checked) {
    codeContents.style.display = "none";
    imageContents.style.display = "block";
  }
});














