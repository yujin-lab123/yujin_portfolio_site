document.addEventListener('DOMContentLoaded', function(){

  gsap.registerPlugin(TextPlugin);

  const tl = gsap.timeline();

  tl.fromTo(".intro01",
    { text: "" },
    {
      text: "const",
      duration: 0.25,
      ease: "none"
    }
  )

  .fromTo(".intro_name01",
    { text: "" },
    {
      text: "YUJIN",
      duration: 0.5,
      ease: "none"
    }
  )

  .fromTo(".intro03",
    { text: "" },
    {
      text: "=",
      duration: 0.05,
      ease: "none"
    }
  )

  .fromTo(".intro_true",
    { text: "" },
    {
      text: "true",
      duration: 0.4,
      ease: "none"
    }
  )

  .fromTo(".intro05",
    { text: "" },
    {
      text: ";",
      duration: 0.05,
      ease: "none"
    }
  )

  .fromTo(".intro06",
    { text: "" },
    {
      text: "// 有眞",
      duration: 0.5,
      ease: "none"
    }
  )

  .fromTo(".intro07",
    { text: "" },
    {
      text: "if",
      duration: 0.25,
      ease: "none"
    }
  )

  .fromTo(".intro08_1",
    { text: "" },
    {
      text: "(",
      duration: 0.05,
      ease: "none"
    }
  )

  .fromTo(".intro_name02",
    { text: "" },
    {
      text: "YUJIN",
      duration: 0.5,
      ease: "none"
    }
  )

  .fromTo(".intro08_2",
    { text: "" },
    {
      text: ")",
      duration: 0.05,
      ease: "none"
    }
  )

  .fromTo(".intro09_1",
    { text: "" },
    {
      text: "{",
      duration: 0.05,
      ease: "none"
    }
  )

  .fromTo(".intro_create",
    { text: "" },
    {
      text: "create",
      duration: 0.5,
      ease: "none"
    }
  )

  .fromTo(".intro11",
    { text: "" },
    {
      text: "();",
      duration: 0.1,
      ease: "none"
    }
  )

  .fromTo(".intro09_2",
    { text: "" },
    {
      text: "}",
      duration: 0.05,
      ease: "none"
    }
  )

  .fromTo(".caret",
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.5,
      repeat: -1,
      ease: "steps(1)"
    }
  );
});