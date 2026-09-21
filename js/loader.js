/* =========================================================
   JD PORTFOLIO — CINEMATIC ENTRY LOADER
   ========================================================= */

function initLoader() {

  const loader = document.getElementById("site-loader");
  const number = document.getElementById("loader-number");
  const progressBar = document.getElementById("loader-progress");

  if (!loader || !number) {
    console.error("JD Loader: element not found.");
    return;
  }

  /* -----------------------------------------------------
     SETTINGS
  ----------------------------------------------------- */

  const duration = 2500;
  const startTime = performance.now();

  /* -----------------------------------------------------
     PROGRESS
  ----------------------------------------------------- */

  function animateLoader(currentTime) {

    const elapsed = currentTime - startTime;

    let progress = elapsed / duration;

    progress = Math.min(progress, 1);

    const percentage = Math.floor(progress * 100);

    number.textContent = percentage;

    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }

    if (progress < 1) {

      requestAnimationFrame(animateLoader);

    } else {

      finishLoader();

    }
  }

  /* -----------------------------------------------------
     FINISH
  ----------------------------------------------------- */

  function finishLoader() {

    number.textContent = "100";

    if (progressBar) {
      progressBar.style.width = "100%";
    }

    setTimeout(() => {

      loader.classList.add("is-hidden");

      document.body.classList.add("loader-complete");

      /* -----------------------------------------------
         TELL CAMERA INTRO TO START
      ------------------------------------------------ */

      document.dispatchEvent(
        new Event("loaderComplete")
      );

    }, 700);
  }

  /* -----------------------------------------------------
     START
  ----------------------------------------------------- */

  requestAnimationFrame(animateLoader);
}


/* =========================================================
   START LOADER
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initLoader
  );

} else {

  initLoader();

}