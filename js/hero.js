/* =========================================================
   JD PORTFOLIO — HERO JAVASCRIPT
   DESKTOP CINEMATIC INTERACTION
   ========================================================= */

(() => {

    const hero = document.querySelector(".hero");

    if (!hero) return;


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const title =
        hero.querySelector(".hero__title");

    const letters =
        hero.querySelectorAll(".hero__letter");

    const particlesCanvas =
        hero.querySelector("#hero-particles");

    const thunder =
        hero.querySelector(".hero__thunder");

    const menuButton =
        hero.querySelector("#hero-menu-button");

    const menuOverlay =
        hero.querySelector("#hero-menu-overlay");

    const menuClose =
        hero.querySelector(".hero__menu-close");


    /* =====================================================
       MOUSE POSITION
       ===================================================== */

    let mouseX =
        window.innerWidth / 2;

    let mouseY =
        window.innerHeight / 2;

    let currentMouseX =
        mouseX;

    let currentMouseY =
        mouseY;


    /* =====================================================
       MOUSE INTERACTION
       Desktop only
       Mobile: disabled intentionally
       ===================================================== */

    const isMobile =
        window.matchMedia("(max-width: 600px)").matches;


    if (!isMobile) {

        window.addEventListener(
            "mousemove",
            (event) => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            }
        );

    }


    /* =====================================================
       SMOOTH MOUSE LOOP
       ===================================================== */

    function animateMouse() {

        if (isMobile) return;

        currentMouseX +=
            (mouseX - currentMouseX) * 0.08;

        currentMouseY +=
            (mouseY - currentMouseY) * 0.08;


        /* -------------------------------------------------
           LETTER INTERACTION
           ------------------------------------------------- */

        if (title && letters.length) {

            letters.forEach((letter) => {

                const rect =
                    letter.getBoundingClientRect();

                const centerX =
                    rect.left +
                    rect.width / 2;

                const centerY =
                    rect.top +
                    rect.height / 2;

                const distanceX =
                    currentMouseX -
                    centerX;

                const distanceY =
                    currentMouseY -
                    centerY;

                const distance =
                    Math.sqrt(
                        distanceX * distanceX +
                        distanceY * distanceY
                    );

                const influenceRadius =
                    260;


                if (
                    distance <
                    influenceRadius
                ) {

                    const strength =
                        1 -
                        (
                            distance /
                            influenceRadius
                        );


                    /*
                     * Mouse pulls the letter slightly.
                     */

                    const moveX =
                        distanceX *
                        strength *
                        0.055;

                    const moveY =
                        distanceY *
                        strength *
                        0.035;


                    /*
                     * Slight scale increase.
                     */

                    const scale =
                        1 +
                        strength *
                        0.50;


                    letter.style.transform =
                        `translate3d(
                            ${moveX}px,
                            ${moveY}px,
                            0
                        ) scale(${scale})`;


                    /*
                     * Slight cinematic glow.
                     */

                    letter.style.textShadow =
                        `
                        0 0 ${
                            12 +
                            strength * 22
                        }px
                        rgba(
                            210,
                            170,
                            98,
                            ${
                                0.12 +
                                strength * 0.18
                            }
                        )
                        `;

                } else {

                    letter.style.transform =
                        "translate3d(0, 0, 0) scale(1)";

                    letter.style.textShadow =
                        "none";

                }

            });

        }


        requestAnimationFrame(
            animateMouse
        );

    }


    animateMouse();


    /* =====================================================
       PARTICLE SYSTEM
       ===================================================== */

    if (particlesCanvas) {

        const ctx =
            particlesCanvas.getContext("2d");

        let particles = [];

        let canvasWidth = 0;
        let canvasHeight = 0;

        const particleCount =
    window.innerWidth <= 600
        ? 28
        : 85;


        /* -------------------------------------------------
           RESIZE
           ------------------------------------------------- */

        function resizeCanvas() {

            const pixelRatio =
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                );

            canvasWidth =
                window.innerWidth;

            canvasHeight =
                window.innerHeight;

            particlesCanvas.width =
                canvasWidth *
                pixelRatio;

            particlesCanvas.height =
                canvasHeight *
                pixelRatio;

            particlesCanvas.style.width =
                `${canvasWidth}px`;

            particlesCanvas.style.height =
                `${canvasHeight}px`;

            ctx.setTransform(
                pixelRatio,
                0,
                0,
                pixelRatio,
                0,
                0
            );

        }


        /* -------------------------------------------------
           CREATE PARTICLE
           ------------------------------------------------- */

        function createParticle() {

            return {

                x:
                    Math.random() *
                    canvasWidth,

                y:
                    Math.random() *
                    canvasHeight,

                size:
                    Math.random() *
                    1.6 +
                    0.35,

                speed:
                    Math.random() *
                    0.45 +
                    0.30,

                angle:
                    Math.random() *
                    Math.PI *
                    2,

                drift:
                    (
                        Math.random() -
                        0.5
                    ) *
                    0.12,

                opacity:
                    Math.random() *
                    0.55 +
                    0.12,

                pulse:
                    Math.random() *
                    Math.PI *
                    2

            };

        }


        /* -------------------------------------------------
           INITIALIZE PARTICLES
           ------------------------------------------------- */

        function createParticles() {

            particles = [];

            for (
                let i = 0;
                i < particleCount;
                i++
            ) {

                particles.push(
                    createParticle()
                );

            }

        }


        /* -------------------------------------------------
           DRAW PARTICLES
           ------------------------------------------------- */

        function drawParticles(time) {

            ctx.clearRect(
                0,
                0,
                canvasWidth,
                canvasHeight
            );


            particles.forEach(
                (particle) => {

                    particle.x +=
                        Math.cos(
                            particle.angle
                        ) *
                        particle.speed;

                    particle.y +=
                        Math.sin(
                            particle.angle
                        ) *
                        particle.speed;


                    /* -------------------------------------
                       WRAP AROUND SCREEN
                       ------------------------------------- */

                    if (
                        particle.x <
                        -10
                    ) {

                        particle.x =
                            canvasWidth +
                            10;

                    }

                    if (
                        particle.x >
                        canvasWidth +
                        10
                    ) {

                        particle.x =
                            -10;

                    }

                    if (
                        particle.y <
                        -10
                    ) {

                        particle.y =
                            canvasHeight +
                            10;

                    }

                    if (
                        particle.y >
                        canvasHeight +
                        10
                    ) {

                        particle.y =
                            -10;

                    }


                    /* -------------------------------------
                       SUBTLE BREATHING
                       ------------------------------------- */

                    const pulse =
                        Math.sin(
                            time * 0.001 +
                            particle.pulse
                        );


                    const opacity =
                        Math.max(
                            0.04,
                            particle.opacity +
                            pulse * 0.08
                        );


                    ctx.beginPath();

                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.size,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        `rgba(
                            242,
                            240,
                            235,
                            ${opacity}
                        )`;

                    ctx.fill();

                }
            );


            requestAnimationFrame(
                drawParticles
            );

        }


        resizeCanvas();

        createParticles();


        window.addEventListener(
            "resize",
            () => {

                resizeCanvas();
                createParticles();

            }
        );


        requestAnimationFrame(
            drawParticles
        );

    }


    /* =====================================================
   CINEMATIC SKY THUNDER
   BLUE + ORANGE ATMOSPHERIC FLASH ONLY
   ===================================================== */

if (thunder) {

    /* -------------------------------------------------
       LIGHTNING COLORS
       ------------------------------------------------- */

    const lightningTypes = [
        {
            className: "is-blue",
            chance: 0.5
        },
        {
            className: "is-orange",
            chance: 0.5
        }
    ];


    /* -------------------------------------------------
       GET RANDOM LIGHTNING TYPE
       ------------------------------------------------- */

    function getLightningType() {

        const random =
            Math.random();

        let total = 0;

        for (
            const type
            of lightningTypes
        ) {

            total +=
                type.chance;

            if (
                random <= total
            ) {
                return type.className;
            }

        }

        return "is-blue";
    }


    /* -------------------------------------------------
       CLEAR THUNDER
       ------------------------------------------------- */

    function clearThunder() {

        thunder.classList.remove(
            "is-active",
            "is-blue",
            "is-orange"
        );

        thunder.style.opacity =
            "0";

        thunder.style.background =
            "transparent";

        thunder.style.boxShadow =
            "none";
    }


    /* -------------------------------------------------
       FIRE ATMOSPHERIC THUNDER
       ------------------------------------------------- */

    function flashLightning() {

        clearThunder();

        const type =
            getLightningType();


        /* ---------------------------------------------
           RANDOM POSITION
           KEEP IT IN THE SKY
           --------------------------------------------- */

        const x =
            18 +
            Math.random() * 64;

        const y =
            8 +
            Math.random() * 30;


        thunder.style.setProperty(
            "--thunder-x",
            `${x}%`
        );

        thunder.style.setProperty(
            "--thunder-y",
            `${y}%`
        );


        /* ---------------------------------------------
           BLUE SKY FLASH
           --------------------------------------------- */

        if (
            type === "is-blue"
        ) {

            thunder.style.background = `
                radial-gradient(
                    ellipse 42% 30% at ${x}% ${y}%,
                    rgba(50, 145, 255, 0.78) 0%,
                    rgba(30, 100, 220, 0.45) 28%,
                    rgba(15, 60, 150, 0.20) 52%,
                    rgba(0, 0, 0, 0) 78%
                )
            `;

            thunder.style.boxShadow = `
                inset 0 -180px 220px
                rgba(20, 90, 210, 0.10)
            `;
        }


        /* ---------------------------------------------
           ORANGE SKY FLASH
           --------------------------------------------- */

        if (
            type === "is-orange"
        ) {

            thunder.style.background = `
                radial-gradient(
                    ellipse 42% 30% at ${x}% ${y}%,
                    rgba(255, 145, 45, 0.78) 0%,
                    rgba(225, 95, 25, 0.45) 28%,
                    rgba(160, 55, 15, 0.20) 52%,
                    rgba(0, 0, 0, 0) 78%
                )
            `;

            thunder.style.boxShadow = `
                inset 0 -180px 220px
                rgba(210, 75, 20, 0.10)
            `;
        }


        /* ---------------------------------------------
           APPLY COLOR CLASS
           --------------------------------------------- */

        thunder.classList.add(
            type
        );


        /* ---------------------------------------------
           RESTART EFFECT
           --------------------------------------------- */

        void thunder.offsetWidth;

        thunder.classList.add(
            "is-active"
        );


        /* ---------------------------------------------
           FAST BRIGHT FLASH
           --------------------------------------------- */

        thunder.style.opacity =
            "1";


        /* ---------------------------------------------
           FIRST FADE
           --------------------------------------------- */

        setTimeout(() => {

            thunder.style.opacity =
                "0.35";

        }, 120);


        /* ---------------------------------------------
           COMPLETE FADE
           --------------------------------------------- */

        setTimeout(() => {

            clearThunder();

        }, 480);
    }


    /* -------------------------------------------------
       FAST CONTINUOUS THUNDER LOOP
       ------------------------------------------------- */

    function createThunder() {

        const delay =
            450 +
            Math.random() * 850;


        setTimeout(() => {

            flashLightning();


            /* -----------------------------------------
               OCCASIONAL SECOND FLASH
               ----------------------------------------- */

            if (
                Math.random() < 0.32
            ) {

                setTimeout(() => {

                    flashLightning();

                }, 130);

            }


            /* -----------------------------------------
               CONTINUE LOOP
               ----------------------------------------- */

            createThunder();

        }, delay);
    }


    /* -------------------------------------------------
       START
       ------------------------------------------------- */

    clearThunder();

    createThunder();
}


    /* =====================================================
       MENU
       ===================================================== */

    if (
        menuButton &&
        menuOverlay
    ) {


        /* -------------------------------------------------
           OPEN MENU
           ------------------------------------------------- */

        menuButton.addEventListener(
            "click",
            () => {

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

                document.body.style.overflow =
                    "hidden";

            }
        );


        /* -------------------------------------------------
           CLOSE MENU
           ------------------------------------------------- */

        if (menuClose) {

            menuClose.addEventListener(
                "click",
                closeMenu
            );

        }


        /* -------------------------------------------------
           CLOSE WHEN LINK CLICKED
           ------------------------------------------------- */

        const menuLinks =
            menuOverlay.querySelectorAll(
                "a"
            );


        menuLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            }
        );


        /* -------------------------------------------------
           ESCAPE KEY
           ------------------------------------------------- */

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


        /* -------------------------------------------------
           CLOSE FUNCTION
           ------------------------------------------------- */

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

            document.body.style.overflow =
                "";

        }

    }


    /* =====================================================
       PREVENT IMAGE DRAG
       ===================================================== */

    const backgroundImage =
        hero.querySelector(
            ".hero__background-image"
        );


    if (backgroundImage) {

        backgroundImage.addEventListener(
            "dragstart",
            (event) => {

                event.preventDefault();

            }

        );

    }

})();