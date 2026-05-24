const revealSelector = ".scroll-reveal, .fade-in-up, .fade-in, .reveal-stagger";

function applyStaggerIndexes(root = document) {
  root.querySelectorAll(".reveal-stagger").forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.style.setProperty("--stagger-index", index);
    });
  });
}

export function initScrollAnimations(options = {}) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  const elements = Array.from(document.querySelectorAll(revealSelector));
  applyStaggerIndexes();
  document.documentElement.classList.add("js-ready");

  if (!elements.length) {
    return () => {};
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: options.rootMargin ?? "0px 0px -12% 0px",
      threshold: options.threshold ?? 0.16,
    },
  );

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      element.classList.add("is-visible");
      return;
    }
    observer.observe(element);
  });

  return () => observer.disconnect();
}

export default initScrollAnimations;
