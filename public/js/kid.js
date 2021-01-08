console.log("testing");
const controller = new ScrollMagic.Controller();
console.log(controller);
$(".wrapper").each(function () {
  const tl = new TimelineMax();
  const cov = $(this).find(".cover");
  const img = $(this).find("img");

  tl.from(cov, 1, { scaleX: 0, transformOrigin: "left" });
  tl.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
  tl.from(img, 1, { opacity: 0 }, "reveal");

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
  });
  console.log(scene);
  // .setTween(tl)
  // .addIndicators()
  // .addTo(controller);
});

const who = {
  trigger: [...document.getElementsByClassName("wrapper")],

  init: () => {
    console.log("init");
    who.trigger.forEach.call(who.trigger, (el) => {
      el.addEventListener("mouseover", who.animateOver, false);
      el.addEventListener("touchstart", who.animateOver, false);
    });
    who.trigger.forEach.call(who.trigger, (el) => {
      el.addEventListener("mouseout", who.animateOut, false);
      el.addEventListener("touchend", who.animateOut, false);
    });
  },

  animateOver() {
    const image = this.getElementsByClassName("games");
    const heading = this.getElementsByClassName("text1");
    const subheading = this.getElementsByClassName("text2");

    // animate image
    TweenMax.to(image, 0.25, {
      yPercent: 35,
      ease: Power1.easeOut,
    });
    // animate heading
    TweenMax.to(heading, 0.75, {
      yPercent: -180,
      ease: Power1.easeOut,
    });
    // animate subheading
    TweenMax.to(subheading, 0.75, {
      yPercent: -90,
      ease: Power1.easeOut,
    });
  },

  animateOut() {
    const image = this.getElementsByClassName("games");
    const heading = this.getElementsByClassName("text1");
    const subheading = this.getElementsByClassName("text2");
    // animate image
    TweenMax.to(image, 0.75, {
      yPercent: 0,
      ease: Bounce.easeOut,
    });
    // animate heading
    TweenMax.to(heading, 0.75, {
      yPercent: 0,
      ease: Bounce.easeOut,
    });
    // animate subheading
    TweenMax.to(subheading, 0.75, {
      yPercent: 0,
      ease: Bounce.easeOut,
    });
  },
};

who.init();
