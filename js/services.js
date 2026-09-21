/* =====================================================
   JDK — SERVICES NAVIGATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("hero-menu-button");

    const menuOverlay =
        document.getElementById("hero-menu-overlay");

    const menuClose =
        menuOverlay?.querySelector(
            ".hero__menu-close"
        );


    if (!menuButton || !menuOverlay) {
        return;
    }


    /* =================================================
       OPEN MENU
       ================================================= */

    function openMenu() {

        menuOverlay.classList.add("is-open");

        menuOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.style.overflow =
            "hidden";
    }


    /* =================================================
       CLOSE MENU
       ================================================= */

    function closeMenu() {

        menuOverlay.classList.remove("is-open");

        menuOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.style.overflow =
            "";
    }


    /* =================================================
       MENU BUTTON
       ================================================= */

    menuButton.addEventListener(
        "click",
        openMenu
    );


    /* =================================================
       CLOSE BUTTON
       ================================================= */

    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =================================================
       NAVIGATION LINKS
       ================================================= */

    menuOverlay
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    /* =================================================
       ESCAPE
       ================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                menuOverlay.classList.contains("is-open")
            ) {
                closeMenu();
            }

        }
    );

});
/* =========================================================
   SERVICES — CINEMATIC PARTICLES
   ========================================================= */

(() => {
    const canvas = document.querySelector(".services__particles");

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