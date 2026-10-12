/**
 * ShopOwl / Arattai Clone - Pixel-to-Pixel Interactions & Animations
 */

document.addEventListener("DOMContentLoaded", function () {
    // ---------------------------------------------------------
    // 1. Header Border on Scroll
    // ---------------------------------------------------------
    const headerWrap = document.querySelector(".zw-product-header .content-wrap");
    function updateHeaderBorder() {
        if (window.scrollY > 10) {
            if (headerWrap) headerWrap.classList.add("active");
        } else {
            if (headerWrap) headerWrap.classList.remove("active");
        }
    }
    window.addEventListener("scroll", updateHeaderBorder, { passive: true });
    updateHeaderBorder();

    // ---------------------------------------------------------
    // 2. Mobile Drawer Navigation Toggle
    // ---------------------------------------------------------
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener("click", function () {
            const isOpen = mobileDrawer.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.querySelectorAll(".mobile-nav-item").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileDrawer.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ---------------------------------------------------------
    // 3. Hero Banner Chat Widgets Slide-up & Connector
    // ---------------------------------------------------------
    const bannerSubImg = document.getElementById("bannerSubImg");
    const pathConnector = document.querySelector(".zwc-path-connector");

    setTimeout(function () {
        if (bannerSubImg) {
            bannerSubImg.querySelectorAll(".zwc-slideup-chat").forEach(function (el) {
                el.classList.add("anim-active");
            });
        }
        if (pathConnector) {
            pathConnector.classList.add("active");
        }
    }, 200);

    // ---------------------------------------------------------
    // 4. Multilingual Greetings & Dual Phones (Scroll Triggered)
    // ---------------------------------------------------------
    const langSection = document.querySelector(".zwc-lang-sectionwrap");

    function checkLangSectionInView() {
        if (!langSection) return;
        const rect = langSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.9 && rect.bottom >= windowHeight * 0.1) {
            langSection.classList.add("sectionactive");
        }
    }

    window.addEventListener("scroll", checkLangSectionInView, { passive: true });
    checkLangSectionInView();

    // ---------------------------------------------------------
    // 5. "Why ShopOwl?" Feature Animations
    // ---------------------------------------------------------
    const gridSection = document.querySelector(".zwc-grid-sectionwrap");
    let emojiAnimated = false;
    let typeAnimated = false;

    // A) Emote Card - Rotating Brand Logos (Flipkart, Myntra, Meesho, Ajio, Tata CLiQ)
    const emojiContainer = document.querySelector(".zwc-emoji-wrap");
    const emojiElements = emojiContainer ? emojiContainer.querySelectorAll(".zwc-emojilist, .zwc-brand-badge") : [];
    const topvals = ["10", "-26", "-10", "68", "25p"];
    const leftvals = ["-21", "20", "73", "70", "30"];
    const rotateAngles = [25, 10, -25];

    function getRandomAngle() {
        return rotateAngles[Math.floor(Math.random() * rotateAngles.length)];
    }

    function rotateemoji() {
        if (!emojiElements || emojiElements.length === 0) return;
        for (let i = 0; i < emojiElements.length; i++) {
            const el = emojiElements[i];
            if (topvals[i].indexOf("p") !== -1) {
                el.style.top = "25%";
                el.style.left = leftvals[i] + "%";
                el.style.transform = "scale(1) rotate(0deg)";
                el.style.zIndex = "3";
            } else {
                el.style.top = topvals[i] + "%";
                el.style.left = leftvals[i] + "%";
                el.style.transform = `scale(0.55) rotate(${getRandomAngle()}deg)`;
                el.style.zIndex = "1";
            }
        }
        topvals.push(topvals.shift());
        leftvals.push(leftvals.shift());
        setTimeout(rotateemoji, 3000);
    }

    // B) Share Card - Price Drop Alert Typewriter Loop
    const shareTextEl = document.getElementById("zwc-share-text");
    const textsToType = [
        "🔥 50% off Sony XM5 Headphones!",
        "🎟️ 20% off Nike Store Coupon Code!",
        "🎁 Amazon $50 Gift Card Offer!",
        "👍 Community upvoted deal: 65% off!"
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (!shareTextEl) return;
        const currentText = textsToType[textIndex];
        if (charIndex < currentText.length) {
            shareTextEl.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 70);
        } else {
            setTimeout(function () {
                shareTextEl.textContent = "";
                charIndex = 0;
                textIndex = (textIndex + 1) % textsToType.length;
                typeText();
            }, 2500);
        }
    }

    // Scroll checker for grid section
    function checkGridSectionInView() {
        if (!gridSection) return;
        const rect = gridSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.85) {
            gridSection.classList.add("middle-animated");

            gridSection.querySelectorAll(".zwc-slideup-chat").forEach(function (el) {
                el.classList.add("anim-active");
            });

            if (!emojiAnimated) {
                rotateemoji();
                emojiAnimated = true;
            }

            if (!typeAnimated) {
                setTimeout(typeText, 400);
                typeAnimated = true;
            }
        }
    }

    window.addEventListener("scroll", checkGridSectionInView, { passive: true });
    checkGridSectionInView();

    // ---------------------------------------------------------
    // 6. Frequently Asked Questions (FAQ) Accordion
    // ---------------------------------------------------------
    const accordionButtons = document.querySelectorAll(".zwc-accordian-lists h3 button");

    accordionButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const currentItem = btn.closest(".zwc-accordian-lists");
            const isCurrentlyActive = currentItem.classList.contains("active");

            document.querySelectorAll(".zwc-accordian-lists").forEach(function (item) {
                item.classList.remove("active");
                const b = item.querySelector("h3 button");
                if (b) b.setAttribute("aria-expanded", "false");
            });

            if (!isCurrentlyActive) {
                currentItem.classList.add("active");
                btn.setAttribute("aria-expanded", "true");
            }
        });
    });
});
