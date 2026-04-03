(function () {
  const APP_STORE_URL = "https://apps.apple.com/us/app/saymo/id6746813879";
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.saymo.app";
  const SCREENSHOT_BASE = document.body.dataset.assetBase || "../assets/screenshots";
  const pageVariant = document.body.dataset.variant || "";

  const trustItems = [
    "Free to start",
    "No sign-up required",
    "No email required",
    "Instantly into learning",
    "Occasional ads support the app",
    "Optional subscription removes ads",
  ];

  const personalizationItems = [
    "Tracks every word and phrase individually",
    "Spaced repetition for words and phrases you need again",
    "Difficulty adapts from beginner to advanced",
    "Future lessons and tasks follow what still needs work",
  ];

  const featureGroups = {
    immersive: {
      items: [
        {
          image: "cinematic_mic.jpg",
          title: "Talk to characters",
          body: "Speak into the scene and keep the conversation moving.",
          alt: "Saymo cinematic speaking screen with a microphone button and dialogue prompt.",
        },
        {
          image: "cinematic_mcq.jpg",
          title: "Choose the right option",
          body: "Pick the best next line when you need support before speaking.",
          alt: "Saymo cinematic multiple choice screen for choosing the right response.",
        },
        {
          image: "cinematic_spell.jpg",
          title: "Spell the missing word",
          body: "Fill in missing words to tighten recall inside the scene.",
          alt: "Saymo cinematic spelling task inside a conversation scene.",
        },
        {
          image: "cinematic_word_order.jpg",
          title: "Tap the correct order",
          body: "Rebuild sentences quickly so structure becomes automatic.",
          alt: "Saymo cinematic word order task with tap-to-arrange sentence parts.",
        },
        {
          image: "branching_dialogue.jpg",
          title: "Explore different conversation directions with branching dialogue",
          body: "See where different choices lead and practice recovering naturally.",
          alt: "Saymo branching dialogue screen that shows multiple conversation directions.",
        },
      ],
    },
    exam: {
      items: [
        {
          image: "exam_prep_1.jpg",
          title: "Configure the exam topics you would like to cover",
          body: "Focus the practice set around the themes you actually need.",
          alt: "Saymo exam preparation topic configuration screen.",
        },
        {
          image: "exam_prep_2.jpg",
          title: "Practice speaking on exam topics with dynamically adjusting difficulty",
          body: "Stay challenged without being overwhelmed.",
          alt: "Saymo exam speaking practice screen with a speaking prompt.",
        },
        {
          image: "exam_prep_3.jpg",
          title: "Get feedback on your progress",
          body: "Track whether the practice is translating into stronger performance.",
          alt: "Saymo exam preparation feedback screen showing progress details.",
        },
        {
          image: "exam_prep_4.jpg",
          title: "Get target analysis on your strengths and weaknesses in grammar and vocabulary",
          body: "Use the weak spots to decide what to study next.",
          alt: "Saymo exam preparation analysis screen showing strengths and weaknesses.",
        },
      ],
    },
    grammar: {
      items: [
        {
          image: "grammar_articles.jpg",
          title: "Learn all the articles for thousands of nouns with spaced repetition",
          body: "Build fast recall on noun gender without rote grind.",
          alt: "Saymo grammar game for learning German articles.",
        },
        {
          image: "grammar_cases_1.jpg",
          title: "Learn which case to use in which situation",
          body: "Practice the patterns until the case choice feels obvious.",
          alt: "Saymo grammar game for choosing the correct German case.",
        },
        {
          image: "grammar_cases_2.jpg",
          title: "Get detailed feedback about which situations you use the wrong case",
          body: "See the specific contexts that still trip you up.",
          alt: "Saymo grammar feedback screen highlighting case mistakes.",
        },
        {
          image: "grammar_endings_1.jpg",
          title: "Practice word endings for every possible case",
          body: "Repeat the endings until they stop feeling random.",
          alt: "Saymo grammar endings practice screen.",
        },
        {
          image: "grammar_endings_2.jpg",
          title: "Get detailed feedback on cases need more practice",
          body: "Use targeted review instead of repeating what you already know.",
          alt: "Saymo grammar endings feedback screen showing weak areas.",
        },
      ],
    },
  };

  initFeatureLists();
  initTrustLists();
  initPersonalizationLists();
  initFooter();
  initStoreRows();
  initTabs();
  initStickyDocks();
  initParallaxDecor();

  function initFeatureLists() {
    document.querySelectorAll("[data-feature-list]").forEach((node) => {
      const key = node.dataset.featureList;
      const group = featureGroups[key];
      if (!group) return;
      node.innerHTML = group.items.map(renderFeatureCard).join("");
    });
  }

  function renderFeatureCard(item) {
    const src = `${SCREENSHOT_BASE}/${item.image}`;
    return `
      <article class="feature-card card">
        <div class="feature-thumb">
          <img src="${src}" alt="${escapeHtml(item.alt)}" width="540" height="1200" loading="lazy" decoding="async" />
        </div>
        <div class="feature-copy">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </div>
      </article>
    `;
  }

  function initTrustLists() {
    document.querySelectorAll("[data-trust-strip]").forEach((node) => {
      node.innerHTML = renderBulletList(trustItems);
    });
  }

  function initPersonalizationLists() {
    document.querySelectorAll("[data-personalization-strip]").forEach((node) => {
      node.innerHTML = renderBulletList(personalizationItems);
    });
  }

  function renderBulletList(items) {
    return `<ul class="bullet-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function initFooter() {
    document.querySelectorAll("[data-page-footer]").forEach((node) => {
      node.innerHTML = `
        <div class="site-footer__content">
          <span>Saymo alternatives built for mobile-first install testing.</span>
          <div class="footer-links">
            <a href="/support.html">Support</a>
            <a href="https://docs.google.com/document/d/1JDI0zqQew5qYf_onqMew_70GPoFYibCCjEwSgM_9ulU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/1AUX1rOXEYunQipf7cHtrGqblBVgvk0-PMkSgguSnfoc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Terms of Use (EULA)</a>
          </div>
        </div>
      `;
    });
  }

  function initStoreRows() {
    const platform = detectPlatform();
    const platformCopy = getPlatformCopy(platform);
    document.documentElement.dataset.platform = platform;

    document.querySelectorAll("[data-platform-copy]").forEach((node) => {
      node.textContent = platformCopy;
    });

    document.querySelectorAll("[data-store-row]").forEach((row) => {
      const buttons = Array.from(row.querySelectorAll("[data-store]"));
      buttons.forEach((button) => {
        const store = button.dataset.store;
        const href = getGoUrl(store);
        button.setAttribute("href", href);
        button.classList.toggle("is-priority", store === platform);
      });

      if (row.dataset.sort !== "false" && platform !== "unknown") {
        buttons
          .sort((left, right) => {
            if (left.dataset.store === platform) return -1;
            if (right.dataset.store === platform) return 1;
            return left.dataset.store.localeCompare(right.dataset.store);
          })
          .forEach((button) => row.appendChild(button));
      }
    });

    document.querySelectorAll("[data-store-fallback]").forEach((node) => {
      node.href = platform === "ios" ? APP_STORE_URL : platform === "android" ? PLAY_STORE_URL : APP_STORE_URL;
    });
  }

  function getGoUrl(store) {
    const url = new URL("/go/", window.location.origin);
    if (pageVariant) {
      url.searchParams.set("variant", pageVariant);
    }
    url.searchParams.set("store", store);
    return `${url.pathname}${url.search}`;
  }

  function detectPlatform() {
    const ua = (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) return "ios";
    if (/android/.test(ua)) return "android";
    return "unknown";
  }

  function getPlatformCopy(platform) {
    if (platform === "ios") return "App Store is highlighted for this device, but both store links stay visible.";
    if (platform === "android") return "Google Play is highlighted for this device, but both store links stay visible.";
    return "Both install links stay visible so the page can be shared across devices.";
  }

  function initTabs() {
    document.querySelectorAll("[data-tab-group]").forEach((group) => {
      const buttons = Array.from(group.querySelectorAll("[data-tab-target]"));
      const panels = Array.from(group.querySelectorAll("[data-tab-panel]"));
      if (!buttons.length || !panels.length) return;

      buttons.forEach((button) => {
        button.addEventListener("click", () => activate(button.dataset.tabTarget));
      });

      activate(buttons[0].dataset.tabTarget);

      function activate(name) {
        buttons.forEach((button) => {
          const active = button.dataset.tabTarget === name;
          button.setAttribute("aria-selected", String(active));
        });

        panels.forEach((panel) => {
          panel.hidden = panel.dataset.tabPanel !== name;
        });
      }
    });
  }

  function initStickyDocks() {
    document.querySelectorAll("[data-sticky-dock]").forEach((dock) => {
      const stopSelector = dock.dataset.stickyStop;
      const stopTarget = stopSelector
        ? document.querySelector(stopSelector)
        : document.querySelector("[data-sticky-stop]");
      const footer = dock.nextElementSibling && dock.nextElementSibling.matches(".site-footer")
        ? dock.nextElementSibling
        : document.querySelector(".site-footer");

      if (!stopTarget) return;
      let isResting = false;
      let frame = 0;
      let deepestRestScrollY = 0;

      const update = () => {
        frame = 0;

        const scrollY = window.scrollY || window.pageYOffset || 0;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
        const stopRect = stopTarget.getBoundingClientRect();
        const footerRect = footer ? footer.getBoundingClientRect() : null;
        const dockHeight = dock.offsetHeight || dock.getBoundingClientRect().height || 96;

        const hideThreshold = viewportHeight - dockHeight - 24;
        const shouldHide = stopRect.top <= hideThreshold || (footerRect && footerRect.top <= viewportHeight - 16);

        if (!isResting && shouldHide) {
          isResting = true;
          deepestRestScrollY = scrollY;
          dock.classList.add("is-resting");
          return;
        }

        if (isResting) {
          deepestRestScrollY = Math.max(deepestRestScrollY, scrollY);

          const revealDistance = Math.max(140, Math.round(dockHeight * 1.35));
          const movedUpEnough = scrollY <= deepestRestScrollY - revealDistance;
          const footerClear = !footerRect || footerRect.top > viewportHeight + 48;
          const stopClear = stopRect.top > hideThreshold + 96;

          if (movedUpEnough && footerClear && stopClear) {
            isResting = false;
            dock.classList.remove("is-resting");
          }
        }
      };

      const requestUpdate = () => {
        if (frame) return;
        frame = window.requestAnimationFrame(update);
      };

      update();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    });
  }

  function initParallaxDecor() {
    const allNodes = Array.from(document.querySelectorAll("[data-parallax-speed]"));
    if (!allNodes.length) return;

    const mobileHeroOnly = window.matchMedia("(max-width: 520px)");
    const heroNodes = allNodes.filter((node) => node.classList.contains("variant-nine__ambient-orb--hero"));

    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const activeNodes = mobileHeroOnly.matches ? heroNodes : allNodes;
      activeNodes.forEach((node) => {
        const speed = Number.parseFloat(node.dataset.parallaxSpeed || "0");
        const offset = Math.round(scrollY * speed * 1.4);
        node.style.setProperty("--parallax-y", `${offset}px`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  }

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
})();
