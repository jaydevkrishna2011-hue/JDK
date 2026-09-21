/* =========================================================
   JDK PORTFOLIO — GLOBAL
   COMPONENT LOADER + GLOBAL SMOOTH SCROLL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       GLOBAL LENIS SMOOTH SCROLL
    ===================================================== */

    let lenis = null;

    if (typeof Lenis !== "undefined") {

        lenis = new Lenis({
            autoRaf: true,
            lerp: 0.08,
            smoothWheel: true,
            smoothTouch: false
        });

        console.log(
            "JDK: Lenis smooth scroll initialized ✓"
        );

    } else {

        console.warn(
            "JDK: Lenis library not found."
        );

    }


    /* =====================================================
       COMPONENT CONTAINERS
    ===================================================== */

    const loaderContainer =
        document.getElementById(
            "loader-container"
        );

    const cameraIntroContainer =
        document.getElementById(
            "camera-intro-container"
        );

    const heroContainer =
        document.getElementById(
            "hero-container"
        );


    /* =====================================================
       PAGE CHECK
    ===================================================== */

    const isHomepage =
        !!heroContainer ||
        !!loaderContainer ||
        !!cameraIntroContainer;


    /* =====================================================
       DIRECT HOME
       ?direct=home
    ===================================================== */

    const directHome =
        new URLSearchParams(
            window.location.search
        ).get("direct") === "home";


    /* =====================================================
       LOAD COMPONENT
    ===================================================== */

    async function loadComponent(
        container,
        file
    ) {

        if (!container) {

            throw new Error(
                `Container not found for: ${file}`
            );

        }


        const response =
            await fetch(file);


        if (!response.ok) {

            throw new Error(
                `Failed to load: ${file}`
            );

        }


        container.innerHTML =
            await response.text();

    }


    /* =====================================================
       LOAD SCRIPT
    ===================================================== */

    function loadScript(file) {

        return new Promise(
            (resolve, reject) => {

                const script =
                    document.createElement(
                        "script"
                    );

                script.src = file;

                script.onload = resolve;

                script.onerror = () => {

                    reject(
                        new Error(
                            `Failed to load: ${file}`
                        )
                    );

                };

                document.body.appendChild(
                    script
                );

            }
        );

    }


    /* =====================================================
       LOAD HERO
    ===================================================== */

    async function loadHero() {

        try {

            console.log(
                "JDK: Loading Hero..."
            );


            await loadComponent(
                heroContainer,
                "pages/hero.html"
            );


            await loadScript(
                "js/hero.js"
            );


            console.log(
                "JDK: Hero loaded ✓"
            );


        } catch (error) {

            console.error(
                "JDK: Hero failed to load.",
                error
            );

        }

    }


    /* =====================================================
       CAMERA INTRO COMPLETE
       → HERO
    ===================================================== */

    document.addEventListener(
        "cameraIntroComplete",

        () => {

            console.log(
                "JDK: Camera Intro complete → Hero"
            );

            loadHero();

        },

        { once: true }

    );


    /* =====================================================
       LOADER COMPLETE
       → CAMERA INTRO
    ===================================================== */

    document.addEventListener(
        "loaderComplete",

        async () => {

            try {

                console.log(
                    "JDK: Loader complete → Camera Intro"
                );


                await loadComponent(
                    cameraIntroContainer,
                    "pages/camera-intro.html"
                );


                await loadScript(
                    "js/camera-intro.js"
                );


                console.log(
                    "JDK: Camera Intro loaded ✓"
                );


            } catch (error) {

                console.error(
                    "JDK: Camera Intro failed.",
                    error
                );

            }

        },

        { once: true }

    );


    /* =====================================================
       HOMEPAGE START
    ===================================================== */

    if (isHomepage) {


        /* -------------------------------------------------
           DIRECT HOME
           → HERO ONLY
        ------------------------------------------------- */

        if (directHome) {

    if (loaderContainer) {
        loaderContainer.style.display = "none";
    }

    if (cameraIntroContainer) {
        cameraIntroContainer.style.display = "none";
    }

    loadHero();

    return;
}


        /* -------------------------------------------------
           NORMAL HOMEPAGE
           → LOADER
        ------------------------------------------------- */

        (async () => {

            try {

                console.log(
                    "JDK: Starting Loader..."
                );


                await loadComponent(
                    loaderContainer,
                    "pages/loader.html"
                );


                await loadScript(
                    "js/loader.js"
                );


                console.log(
                    "JDK: Loader loaded ✓"
                );


            } catch (error) {

                console.error(
                    "JDK: Loader failed.",
                    error
                );

            }

        })();

    }


    /* =====================================================
       NON-HOMEPAGE
       -----------------------------------------------------
       Work / About / Services / Contact
       do NOT start Loader or Camera.
    ===================================================== */

    else {

        console.log(
            "JDK: Internal page detected → no intro."
        );

    }

});