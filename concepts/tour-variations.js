(() => {
  const guidedTour = document.querySelector("[data-guided-tour]");
  const floatingFooter = document.querySelector("[data-floating-footer]");

  if (!guidedTour) {
    if (!floatingFooter) return;

    const syncFloatingFooter = () => {
      floatingFooter.classList.toggle("is-visible", window.scrollY > 120);
    };

    window.addEventListener("scroll", syncFloatingFooter, { passive: true });
    syncFloatingFooter();
    return;
  }

  const slides = Array.from(document.querySelectorAll("[data-guided-slide]"));
  const steps = Array.from(guidedTour.querySelectorAll("[data-guided-target]"));
  const previousButtons = Array.from(guidedTour.querySelectorAll("[data-guided-prev]"));
  const nextButtons = Array.from(guidedTour.querySelectorAll("[data-guided-next]"));
  const progress = guidedTour.querySelector("[data-guided-progress]");
  const currentLabel = guidedTour.querySelector("[data-guided-current]");
  const slideIds = slides.map((slide) => slide.dataset.guidedSlide);
  let currentIndex = Math.max(0, slideIds.indexOf(location.hash.slice(1)));
  let wheelLocked = false;
  let touchStartY = null;

  const activate = (index, { focusStep = false, updateHash = true } = {}) => {
    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    if (nextIndex === currentIndex && slides[currentIndex]?.classList.contains("is-active")) {
      return;
    }

    currentIndex = nextIndex;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.hidden = !active;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });

    steps.forEach((step) => {
      const active = step.dataset.guidedTarget === slideIds[currentIndex];
      step.setAttribute("aria-selected", String(active));
      step.tabIndex = active ? 0 : -1;
      if (active && focusStep) step.focus();
    });

    previousButtons.forEach((button) => {
      button.disabled = currentIndex === 0;
    });

    nextButtons.forEach((button) => {
      button.disabled = currentIndex === slides.length - 1;
      button.setAttribute(
        "aria-label",
        currentIndex === slides.length - 2 ? "Start learning" : "Next learning mode"
      );
    });

    if (progress) {
      progress.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
    }

    if (currentLabel) {
      currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
    }

    floatingFooter?.classList.toggle("is-visible", currentIndex < slides.length - 1);

    if (updateHash) {
      history.replaceState(null, "", `#${slideIds[currentIndex]}`);
    }
  };

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      activate(slideIds.indexOf(step.dataset.guidedTarget));
    });
  });

  previousButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activate(currentIndex - 1, { focusStep: true });
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activate(currentIndex + 1, { focusStep: true });
    });
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) < 18 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        return;
      }

      event.preventDefault();
      if (wheelLocked) return;

      wheelLocked = true;
      activate(currentIndex + Math.sign(event.deltaY));
      window.setTimeout(() => {
        wheelLocked = false;
      }, 520);
    },
    { passive: false }
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    (event) => {
      if (touchStartY === null) return;
      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
      const distance = touchStartY - touchEndY;
      touchStartY = null;
      if (Math.abs(distance) < 48) return;
      activate(currentIndex + Math.sign(distance));
    },
    { passive: true }
  );

  window.addEventListener("keydown", (event) => {
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      activate(currentIndex - 1, { focusStep: true });
    }
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      activate(currentIndex + 1, { focusStep: true });
    }
    if (event.key === "Home") {
      event.preventDefault();
      activate(0, { focusStep: true });
    }
    if (event.key === "End") {
      event.preventDefault();
      activate(slides.length - 1, { focusStep: true });
    }
  });

  activate(currentIndex, { updateHash: false });
})();
