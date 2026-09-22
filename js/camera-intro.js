/* =========================================================
   JDK PORTFOLIO — CAMERA INTRO
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const cameraIntro =
        document.getElementById("camera-intro");

    const cameraIntroContainer =
        document.getElementById(
            "camera-intro-container"
        );

    const desktopVideo =
        document.getElementById(
            "camera-intro-video-desktop"
        );

    const mobileVideo =
        document.getElementById(
            "camera-intro-video-mobile"
        );


    if (
        !cameraIntro ||
        !desktopVideo ||
        !mobileVideo
    ) {

        console.error(
            "Camera Intro: required elements not found."
        );

        return;
    }


    /* =====================================================
       ACTIVE VIDEO
    ===================================================== */

    function getActiveVideo() {

        const mobile =
            window.matchMedia(
                "(max-width: 767px)"
            ).matches;

        return mobile
            ? mobileVideo
            : desktopVideo;
    }


    /* =====================================================
       START
    ===================================================== */

    function startCameraIntro() {

        const video =
            getActiveVideo();


        if (!video) {
            return;
        }


        /* -------------------------------------------------
           STOP BOTH VIDEOS
        ------------------------------------------------- */

        desktopVideo.pause();
        mobileVideo.pause();


        /* -------------------------------------------------
           iPhone / iOS AUTOPLAY
           Keep the active video explicitly muted and inline.
        ------------------------------------------------- */

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("autoplay", "");


        /* -------------------------------------------------
           RESET + LOAD
        ------------------------------------------------- */

        try {
            video.currentTime = 0;
        } catch (error) {
            console.warn(
                "Camera Intro: could not reset video.",
                error
            );
        }

        video.load();


        /* -------------------------------------------------
           PLAY
           iOS Safari can need the media element to be loaded
           before accepting autoplay.
        ------------------------------------------------- */

        const playVideo = () => {

            video.play()
                .then(() => {

                    console.log(
                        "Camera Intro: playing."
                    );

                })
                .catch((error) => {

                    console.error(
                        "Camera Intro: playback failed.",
                        error
                    );

                });

        };


        if (video.readyState >= 2) {
            playVideo();
        } else {
            video.addEventListener(
                "loadeddata",
                playVideo,
                { once: true }
            );
        }

    }


    /* =====================================================
       COMPLETE
    ===================================================== */

    function finishCameraIntro() {

        /* -------------------------------------------------
           PREVENT RUNNING TWICE
        ------------------------------------------------- */

        if (
            cameraIntro.classList.contains(
                "camera-intro--complete"
            )
        ) {
            return;
        }


        /* -------------------------------------------------
           COMPLETE CAMERA
        ------------------------------------------------- */

        cameraIntro.classList.add(
            "camera-intro--complete"
        );


        /* -------------------------------------------------
           DISABLE CAMERA CONTAINER
        ------------------------------------------------- */

        if (cameraIntroContainer) {

            cameraIntroContainer.style.pointerEvents =
                "none";

            cameraIntroContainer.style.visibility =
                "hidden";
        }


        /* -------------------------------------------------
           TELL GLOBAL.JS
           CAMERA → HERO
        ------------------------------------------------- */

        document.dispatchEvent(
            new CustomEvent(
                "cameraIntroComplete"
            )
        );


        console.log(
            "Camera Intro: complete."
        );

    }


    /* =====================================================
       VIDEO END
    ===================================================== */

    desktopVideo.addEventListener(
        "ended",
        finishCameraIntro
    );


    mobileVideo.addEventListener(
        "ended",
        finishCameraIntro
    );


    /* =====================================================
       START AUTOMATICALLY

       global.js loads this script only after
       camera-intro.html has been inserted.
    ===================================================== */

    startCameraIntro();


})();