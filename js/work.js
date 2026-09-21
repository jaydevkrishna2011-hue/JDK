/* =========================================================
   JDK PORTFOLIO — WORK PAGE
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const menuButton =
        document.getElementById("work-menu-button");

    const menuOverlay =
        document.getElementById("work-menu-overlay");

    const menuClose =
        document.querySelector(".work__menu-close");

    const mobileLinks =
        document.querySelectorAll(
            ".work__mobile-nav a"
        );


    /* =====================================================
       SAFETY CHECK
       ===================================================== */

    if (!menuButton || !menuOverlay) {

        console.warn(
            "Work Page: menu elements not found."
        );

        return;
    }


    /* =====================================================
       OPEN MENU
       ===================================================== */

    function openMenu() {

        menuOverlay.classList.add(
            "is-open"
        );

        menuOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );

    }


    /* =====================================================
       CLOSE MENU
       ===================================================== */

    function closeMenu() {

        menuOverlay.classList.remove(
            "is-open"
        );

        menuOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    }


    /* =====================================================
       TOGGLE MENU
       ===================================================== */

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                menuOverlay.classList.contains(
                    "is-open"
                );

            if (isOpen) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    /* =====================================================
       CLOSE BUTTON
       ===================================================== */

    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                menuOverlay.classList.contains(
                    "is-open"
                )
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    menuOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    console.log(
        "JDK: Work page initialized ✓"
    );

})();
/* =========================================================
   WORK — CINEMATIC PARTICLES
   ========================================================= */

(() => {
    const canvas = document.querySelector(".work__particles");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let particles = [];

    const particleCount =
    window.innerWidth <= 600
        ? 28
        : 85;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
        particles = Array.from(
            { length: particleCount },
            () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.3 + 0.4,
                speed: Math.random() * 0.35 + 0.12,
                angle: Math.random() * Math.PI * 2,
                phase: Math.random() * Math.PI * 2
            })
        );
    }

    function animate(time) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
            particle.x +=
                Math.cos(particle.angle) *
                particle.speed;

            particle.y +=
                Math.sin(particle.angle) *
                particle.speed;

            if (particle.x < -10) particle.x = width + 10;
            if (particle.x > width + 10) particle.x = -10;

            if (particle.y < -10) particle.y = height + 10;
            if (particle.y > height + 10) particle.y = -10;

            const pulse =
                0.35 +
                Math.sin(
                    time * 0.0015 +
                    particle.phase
                ) * 0.25;

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(242, 240, 235, ${pulse})`;

            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    resize();
    createParticles();

    window.addEventListener("resize", () => {
        resize();
        createParticles();
    });

    requestAnimationFrame(animate);
})();