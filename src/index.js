document.addEventListener("DOMContentLoaded", () => {
  function locoMotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });

    // Update ScrollTrigger on Locomotive Scroll update
    locoScroll.on("scroll", ScrollTrigger.update);

    // Setup ScrollTrigger to use Locomotive Scroll's methods
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });

    // Refresh ScrollTrigger and Locomotive Scroll after setup
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }

  function cursorMovement() {
    const page1 = document.querySelector(".page1");
    const cursor = document.querySelector(".cursor");

    page1.addEventListener("mousemove", (event) => {
      gsap.to(cursor, { x: event.x, y: event.y });
    });
    page1.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1, opacity: 1 });
    });
    page1.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 0, opacity: 0 });
    });
  }

  function page2textAnimation(p) {
    gsap.from(".textAnimation p, h,span", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".textAnimation",
        scroller: ".main",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      },
    });
  }

  // locoMotiveScroll();
  cursorMovement();
  page2textAnimation();
});
