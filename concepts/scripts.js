(() => {
  const storeLinks = {
    ios: "https://apps.apple.com/us/app/saymo/id6746813879",
    android: "https://play.google.com/store/apps/details?id=com.saymo.app",
  };

  document.querySelectorAll("[data-store]").forEach((link) => {
    link.href = storeLinks[link.dataset.store];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const applyShots = async () => {
    try {
      const responses = await Promise.all([
        fetch("shots.json", { cache: "no-store" }),
        fetch("value-shots.json", { cache: "no-store" }).catch(() => null),
        fetch("option-11-shots.json", { cache: "no-store" }).catch(() => null),
      ]);
      if (!responses[0].ok) throw new Error("Screenshot manifest unavailable");
      const baseShots = await responses[0].json();
      const valueShots = responses[1]?.ok ? await responses[1].json() : {};
      const option11Shots = responses[2]?.ok ? await responses[2].json() : {};
      const shots = { ...baseShots, ...valueShots, ...option11Shots };

      document.querySelectorAll("[data-shot]").forEach((image) => {
        const source = shots[image.dataset.shot];
        if (!source) {
          image.closest(".shot, .phone, .screen-card, .film-frame")?.classList.add("is-missing");
          return;
        }
        image.src = source;
        image.decoding = "async";
      });

      document.querySelectorAll("[data-bg-shot]").forEach((element) => {
        const source = shots[element.dataset.bgShot];
        if (source) {
          element.style.setProperty("--shot", `url("${source}")`);
          element.classList.add("has-shot");
        }
      });

    } catch (error) {
      document.documentElement.classList.add("shots-unavailable");
    }
  };

  applyShots();

  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-concept-link]").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
})();
