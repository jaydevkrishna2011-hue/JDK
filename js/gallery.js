/* =========================================================
   JDK — GALLERY
   Dynamic category gallery
   Manual thumbnails + external video URLs
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
       GALLERY DATA
       ========================================================= */

  const galleryData = {
    /* -----------------------------------------------------
           VIDEOGRAPHY
           ----------------------------------------------------- */

    videography: {
      number: "01",
      title: "VIDEOGRAPHY",
      description:
        "Cinematic films, interviews, events and visual stories crafted through camera, movement and light.",

      items: [
        {
          type: "video",
          src: "https://drive.google.com/file/d/1IQgxcdcPO7AeroiY8fhDEbNkGIsCbZpP/view?usp=sharing",
          thumbnail: "../assets/images/thumbnails/amijith-interview.jpg",
          title: "AMIJITH INTERVIEW",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1s_UzcI9JdflRIP-qckga_cG9HTJLJHA2/view?usp=drive_link",
          thumbnail:
            "../assets/images/thumbnails/Concept-Udayip-Jyothisham.jpg",
          title: "Concept Udayip Jyothisham",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1uS0BiXI9ACfpZAmJ1_hy62kUYwQmVq-0/view?usp=drive_link",
          thumbnail:
            "../assets/images/thumbnails/Soul-Chayithanya-Presentation.jpg",
          title: "Soul Chayithanya Presentation",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1-GlUl58w5yD5Off8R1vvu69_aICw5fPh/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Presentation-6.jpg",
          title: "Presentation 6",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1CGWlPf1jMUEMy5P8fbpL4gWTmDCrEG77/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Ninja-bike-promo.jpg",
          title: "Ninja Bike Promo",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/16Pi6Dk9xNqI6oBbLy5II4LlneT-BE2Qk/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/UST-TVM-Marathon.jpg",
          title: "UST TVM Marathon",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1ZnnZs69PxOUvnDbSX18ysFETZdpF8Nif/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Maternity-Reels.jpg",
          title: "Maternity Reels",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1FmYxPQuwWgsbKPFfQyFI61uZtrBksCI5/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Soul-Chaithanya-Intro.jpg",
          title: "Soul Chaithanya Intro",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1ExccaR3co4ZlLhPFn5N6W4Ll4W5PwlUl/view?usp=drive_link",
          thumbnail:
            "../assets/images/thumbnails/Concept-Admission-campaign.jpg",
          title: "Concept Admission campaign",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1vfZGdl0WmlXPLZJZNxVVR7B8NNSjhG93/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Presentation-3.jpg",
          title: "Presentation 3",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1GZQkjNUkVJK1G-4QiRXO7Vs9whtuaZBY/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Sole-of-Cochin-Reel.jpg",
          title: "Sole of Cochin Reel",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1OSWyAh7_y-IVy9iphg7HazaX8_MgSKTz/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Concept-Sales-Girls.jpg",
          title: "Concept Sales Girls",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1jWH42DNwGAV6MlW82FQNsiuH0gFDTIpl/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Concept-UNO-Game.jpg",
          title: "Concept UNO Game",
          category: "VIDEOGRAPHY",
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1QkR8ibHMORZyAo5rkjXZAyEs1wdT90ZV/view?usp=drive_link",
          thumbnail: "../assets/images/thumbnails/Presentation-7.jpg",
          title: "Presentation 7",
          category: "VIDEOGRAPHY",
        },
      ],
    },

    /* -----------------------------------------------------
           PHOTOGRAPHY
           ----------------------------------------------------- */

    /* -----------------------------------------------------
   PHOTOGRAPHY
   ----------------------------------------------------- */

    photography: {
      number: "02",

      title: "PHOTOGRAPHY",

      description:
        "Portraits, campaigns, products and moments captured with a cinematic eye.",

      items: [
        {
          type: "image",
          src: "../assets/images/gallery/JDK0072.jpg",
          thumbnail: "../assets/images/gallery/JDK0072.jpg",
          title: "PORTRAIT 01",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/JDK04133.jpg",
          thumbnail: "../assets/images/gallery/JDK04133.jpg",
          title: "PORTRAIT 02",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/JDK09827.jpg",
          thumbnail: "../assets/images/gallery/JDK09827.jpg",
          title: "PORTRAIT 03",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_1975.jpg",
          thumbnail: "../assets/images/gallery/MG_1975.jpg",
          title: "PORTRAIT 04",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2047.jpg",
          thumbnail: "../assets/images/gallery/MG_2047.jpg",
          title: "PORTRAIT 05",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2162.jpg",
          thumbnail: "../assets/images/gallery/MG_2162.jpg",
          title: "PORTRAIT 06",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2208.jpg",
          thumbnail: "../assets/images/gallery/MG_2208.jpg",
          title: "PORTRAIT 07",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2238.jpg",
          thumbnail: "../assets/images/gallery/MG_2238.jpg",
          title: "PORTRAIT 08",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2244.jpg",
          thumbnail: "../assets/images/gallery/MG_2244.jpg",
          title: "PORTRAIT 09",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2314.jpg",
          thumbnail: "../assets/images/gallery/MG_2314.jpg",
          title: "PORTRAIT 10",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_2418.jpg",
          thumbnail: "../assets/images/gallery/MG_2418.jpg",
          title: "PORTRAIT 11",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_3017.jpg",
          thumbnail: "../assets/images/gallery/MG_3017.jpg",
          title: "PORTRAIT 12",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_3027.jpg",
          thumbnail: "../assets/images/gallery/MG_3027.jpg",
          title: "PORTRAIT 13",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_3904.jpg",
          thumbnail: "../assets/images/gallery/MG_3904.jpg",
          title: "PORTRAIT 14",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_4283.jpg",
          thumbnail: "../assets/images/gallery/MG_4283.jpg",
          title: "PORTRAIT 15",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_4299.jpg",
          thumbnail: "../assets/images/gallery/MG_4299.jpg",
          title: "PORTRAIT 16",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_4545.jpg",
          thumbnail: "../assets/images/gallery/MG_4545.jpg",
          title: "PORTRAIT 17",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_4577-2.jpg",
          thumbnail: "../assets/images/gallery/MG_4577-2.jpg",
          title: "PORTRAIT 18",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_5934.jpg",
          thumbnail: "../assets/images/gallery/MG_5934.jpg",
          title: "PORTRAIT 19",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_5940.jpg",
          thumbnail: "../assets/images/gallery/MG_5940.jpg",
          title: "PORTRAIT 20",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_5959.jpg",
          thumbnail: "../assets/images/gallery/MG_5959.jpg",
          title: "PORTRAIT 21",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_5981.jpg",
          thumbnail: "../assets/images/gallery/MG_5981.jpg",
          title: "PORTRAIT 22",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/MG_6253.jpg",
          thumbnail: "../assets/images/gallery/MG_6253.jpg",
          title: "PORTRAIT 23",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/SNY9523.jpg",
          thumbnail: "../assets/images/gallery/SNY9523.jpg",
          title: "PORTRAIT 24",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/SNY9567.jpg",
          thumbnail: "../assets/images/gallery/SNY9567.jpg",
          title: "PORTRAIT 25",
          category: "PHOTOGRAPHY",
        },

        {
          type: "image",
          src: "../assets/images/gallery/SNY9589.jpg",
          thumbnail: "../assets/images/gallery/SNY9589.jpg",
          title: "PORTRAIT 26",
          category: "PHOTOGRAPHY",
        },
      ],
    },

    /* -----------------------------------------------------
           CONTENT CREATION
           ----------------------------------------------------- */

    content: {
      number: "03",
      title: "CONTENT CREATION & 3D INTERIOR DESIGN",
      description:
        "Creative design, social media visuals, campaigns and digital content crafted with a strong visual identity.",
      items: [
        {
          type: "image",
          src: "../assets/images/Content/content-01.jpg",
          thumbnail: "../assets/images/Content/content-01.jpg",
          title: "DESIGN 01",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-02.jpg",
          thumbnail: "../assets/images/Content/content-02.jpg",
          title: "DESIGN 02",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-03.jpg",
          thumbnail: "../assets/images/Content/content-03.jpg",
          title: "DESIGN 03",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-04.jpg",
          thumbnail: "../assets/images/Content/content-04.jpg",
          title: "DESIGN 04",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-05.jpg",
          thumbnail: "../assets/images/Content/content-05.jpg",
          title: "DESIGN 05",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-06.jpg",
          thumbnail: "../assets/images/Content/content-06.jpg",
          title: "DESIGN 06",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-07.jpg",
          thumbnail: "../assets/images/Content/content-07.jpg",
          title: "DESIGN 07",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-08.jpg",
          thumbnail: "../assets/images/Content/content-08.jpg",
          title: "DESIGN 08",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-09.jpg",
          thumbnail: "../assets/images/Content/content-09.jpg",
          title: "DESIGN 09",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-10.jpg",
          thumbnail: "../assets/images/Content/content-10.jpg",
          title: "DESIGN 10",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-11.jpg",
          thumbnail: "../assets/images/Content/content-11.jpg",
          title: "DESIGN 11",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-12.jpg",
          thumbnail: "../assets/images/Content/content-12.jpg",
          title: "DESIGN 12",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-13.jpg",
          thumbnail: "../assets/images/Content/content-13.jpg",
          title: "DESIGN 13",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-14.jpg",
          thumbnail: "../assets/images/Content/content-14.jpg",
          title: "DESIGN 14",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-15.jpg",
          thumbnail: "../assets/images/Content/content-15.jpg",
          title: "DESIGN 15",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-16.jpg",
          thumbnail: "../assets/images/Content/content-16.jpg",
          title: "DESIGN 16",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-17.jpg",
          thumbnail: "../assets/images/Content/content-17.jpg",
          title: "DESIGN 17",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-18.jpg",
          thumbnail: "../assets/images/Content/content-18.jpg",
          title: "DESIGN 18",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-19.jpg",
          thumbnail: "../assets/images/Content/content-19.jpg",
          title: "DESIGN 19",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-20.jpg",
          thumbnail: "../assets/images/Content/content-20.jpg",
          title: "DESIGN 20",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-21.jpg",
          thumbnail: "../assets/images/Content/content-21.jpg",
          title: "DESIGN 21",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-22.jpg",
          thumbnail: "../assets/images/Content/content-22.jpg",
          title: "DESIGN 22",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-23.jpg",
          thumbnail: "../assets/images/Content/content-23.jpg",
          title: "DESIGN 23",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-24.jpg",
          thumbnail: "../assets/images/Content/content-24.jpg",
          title: "DESIGN 24",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-25.jpg",
          thumbnail: "../assets/images/Content/content-25.jpg",
          title: "DESIGN 25",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-26.jpg",
          thumbnail: "../assets/images/Content/content-26.jpg",
          title: "DESIGN 26",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-27.jpg",
          thumbnail: "../assets/images/Content/content-27.jpg",
          title: "DESIGN 27",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-28.jpg",
          thumbnail: "../assets/images/Content/content-28.jpg",
          title: "DESIGN 28",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-29.jpg",
          thumbnail: "../assets/images/Content/content-29.jpg",
          title: "DESIGN 29",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-30.jpg",
          thumbnail: "../assets/images/Content/content-30.jpg",
          title: "DESIGN 30",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-31.jpg",
          thumbnail: "../assets/images/Content/content-31.jpg",
          title: "DESIGN 31",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-32.jpg",
          thumbnail: "../assets/images/Content/content-32.jpg",
          title: "DESIGN 32",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-33.jpg",
          thumbnail: "../assets/images/Content/content-33.jpg",
          title: "DESIGN 33",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-34.jpg",
          thumbnail: "../assets/images/Content/content-34.jpg",
          title: "DESIGN 34",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-35.jpg",
          thumbnail: "../assets/images/Content/content-35.jpg",
          title: "DESIGN 35",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-36.jpg",
          thumbnail: "../assets/images/Content/content-36.jpg",
          title: "DESIGN 36",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-37.jpg",
          thumbnail: "../assets/images/Content/content-37.jpg",
          title: "DESIGN 37",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-38.jpg",
          thumbnail: "../assets/images/Content/content-38.jpg",
          title: "DESIGN 38",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-39.jpg",
          thumbnail: "../assets/images/Content/content-39.jpg",
          title: "DESIGN 39",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-40.jpg",
          thumbnail: "../assets/images/Content/content-40.jpg",
          title: "DESIGN 40",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-41.jpg",
          thumbnail: "../assets/images/Content/content-41.jpg",
          title: "DESIGN 41",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-42.jpg",
          thumbnail: "../assets/images/Content/content-42.jpg",
          title: "DESIGN 42",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-43.jpg",
          thumbnail: "../assets/images/Content/content-43.jpg",
          title: "DESIGN 43",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-44.jpg",
          thumbnail: "../assets/images/Content/content-44.jpg",
          title: "DESIGN 44",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-45.jpg",
          thumbnail: "../assets/images/Content/content-45.jpg",
          title: "DESIGN 45",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-46.jpg",
          thumbnail: "../assets/images/Content/content-46.jpg",
          title: "DESIGN 46",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-47.jpg",
          thumbnail: "../assets/images/Content/content-47.jpg",
          title: "DESIGN 47",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-48.jpg",
          thumbnail: "../assets/images/Content/content-48.jpg",
          title: "DESIGN 48",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-49.jpg",
          thumbnail: "../assets/images/Content/content-49.jpg",
          title: "DESIGN 49",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-50.jpg",
          thumbnail: "../assets/images/Content/content-50.jpg",
          title: "DESIGN 50",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-51.jpg",
          thumbnail: "../assets/images/Content/content-51.jpg",
          title: "DESIGN 51",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-52.jpg",
          thumbnail: "../assets/images/Content/content-52.jpg",
          title: "DESIGN 52",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-53.jpg",
          thumbnail: "../assets/images/Content/content-53.jpg",
          title: "DESIGN 53",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-54.jpg",
          thumbnail: "../assets/images/Content/content-54.jpg",
          title: "DESIGN 54",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-55.jpg",
          thumbnail: "../assets/images/Content/content-55.jpg",
          title: "DESIGN 55",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-56.jpg",
          thumbnail: "../assets/images/Content/content-56.jpg",
          title: "DESIGN 56",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-57.jpg",
          thumbnail: "../assets/images/Content/content-57.jpg",
          title: "DESIGN 57",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-58.jpg",
          thumbnail: "../assets/images/Content/content-58.jpg",
          title: "DESIGN 58",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-59.jpg",
          thumbnail: "../assets/images/Content/content-59.jpg",
          title: "DESIGN 59",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-60.jpg",
          thumbnail: "../assets/images/Content/content-60.jpg",
          title: "DESIGN 60",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-61.jpg",
          thumbnail: "../assets/images/Content/content-61.jpg",
          title: "DESIGN 61",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-62.jpg",
          thumbnail: "../assets/images/Content/content-62.jpg",
          title: "DESIGN 62",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-63.jpg",
          thumbnail: "../assets/images/Content/content-63.jpg",
          title: "DESIGN 63",
          category: "CONTENT CREATION",
        },
        {
          type: "image",
          src: "../assets/images/Content/content-64.jpg",
          thumbnail: "../assets/images/Content/content-64.jpg",
          title: "DESIGN 64",
          category: "CONTENT CREATION",
        },

      ],
    },

    /* -----------------------------------------------------
           UI / UX
           ----------------------------------------------------- */

    uiux: {
      number: "04",
      title: "UI / UX",
      description:
        "Web experiences designed with clarity, usability and a strong visual identity.",

      items: [
        {
          type: "website",
          image: "../assets/images/UI-UX/project-01.jpg",
          thumbnail: "../assets/images/UI-UX/project-01.jpg",
          title: "PROJECT 01",
          category: "UI / UX",
          url: "https://jaydevkrishna2011-hue.github.io/soul-chaitanya-website/",
        },

        {
          type: "website",
          image: "../assets/images/UI-UX/project-02.jpg",
          thumbnail: "../assets/images/UI-UX/project-02.jpg",
          title: "PROJECT 02",
          category: "UI / UX",
          url: "https://jaydevkrishna2011-hue.github.io/Nexora/?utm_source=chatgpt.com",
        },

        {
          type: "website",
          image: "../assets/images/UI-UX/project-03.jpg",
          thumbnail: "../assets/images/UI-UX/project-03.jpg",
          title: "PROJECT 03",
          category: "UI / UX",
          url: "https://www.elcaresystems.com/",
        },

        {
          type: "website",
          image: "../assets/images/UI-UX/project-04.jpg",
          thumbnail: "../assets/images/UI-UX/project-04.jpg",
          title: "PROJECT 04",
          category: "UI / UX",
          url: "https://www.mediacloud.studio/",
        },
      ],
    },
  };

  /* =========================================================
       DOM ELEMENTS
       ========================================================= */

  const gallery = document.querySelector("[data-gallery]");

  const categoryNumber = document.querySelector("[data-gallery-number]");

  const categoryTitle = document.querySelector("[data-gallery-title]");

  const categoryDescription = document.querySelector(
    "[data-gallery-description]",
  );

  const categoryLinks = document.querySelectorAll("[data-category]");

  /* =========================================================
       EXISTING VIDEO POPUP
       ========================================================= */

  const videoPopup = document.querySelector("[data-video-popup]");

  const videoPlayer = document.querySelector("[data-video-player]");

  const videoCloseButtons = document.querySelectorAll("[data-video-close]");

  /* =========================================================
       CURRENT CATEGORY
       ========================================================= */

  const urlParams = new URLSearchParams(window.location.search);

  let currentCategory = urlParams.get("category") || "videography";

  if (!galleryData[currentCategory]) {
    currentCategory = "videography";
  }

  /* =========================================================
       GOOGLE DRIVE PREVIEW URL
       ========================================================= */

  function getGoogleDrivePreviewUrl(url) {
    if (!url) {
      return "";
    }

    if (!url.includes("drive.google.com")) {
      return url;
    }

    const match = url.match(/\/file\/d\/([^/]+)/);

    if (!match) {
      return url;
    }

    const fileId = match[1];

    return "https://drive.google.com/file/d/" + fileId + "/preview";
  }

  /* =========================================================
       REMOVE POPUP IMAGE
       ========================================================= */

  function removePopupImage() {
    if (!videoPopup) {
      return;
    }

    const popupImage = videoPopup.querySelector(".gallery-popup-image");

    if (popupImage) {
      popupImage.remove();
    }
  }

  /* =========================================================
       OPEN VIDEO
       ========================================================= */

  /* =========================================================
   OPEN VIDEO
   ========================================================= */

  /* =========================================================
   OPEN VIDEO
   ========================================================= */

  function openVideo(videoSource) {
    if (!videoPopup) {
      console.warn("JDK Gallery: Video popup not found.");
      return;
    }

    console.log("JDK Gallery: Opening video popup.");

    /*
     * Remove image popup if one exists
     */
    removePopupImage();

    /*
     * Get popup content
     */
    const popupContent = videoPopup.querySelector(
      ".gallery__video-popup-content",
    );

    if (!popupContent) {
      console.warn("JDK Gallery: Popup content not found.");
      return;
    }

    /*
     * Remove any existing Google Drive iframe
     */
    const oldIframe = popupContent.querySelector(".gallery-drive-video");

    if (oldIframe) {
      oldIframe.remove();
    }

    /*
     * Hide original HTML5 video player
     *
     * Google Drive /preview requires an iframe.
     */
    if (videoPlayer) {
      videoPlayer.pause();

      videoPlayer.removeAttribute("src");

      videoPlayer.load();

      videoPlayer.style.display = "none";
    }

    /*
     * Create Google Drive player
     */
    const iframe = document.createElement("iframe");

    iframe.className = "gallery-drive-video";

    iframe.src = getGoogleDrivePreviewUrl(videoSource);

    iframe.setAttribute("allow", "autoplay; fullscreen");

    iframe.setAttribute("allowfullscreen", "");

    iframe.setAttribute("frameborder", "0");

    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.style.height = "min(67.5vw, 675px)";
    iframe.style.maxHeight = "82vh";
    iframe.style.border = "0";
    iframe.style.background = "#000";

    /*
     * Add player to popup
     */
    popupContent.appendChild(iframe);

    /*
     * OPEN POPUP
     */
    videoPopup.classList.add("is-open");

    videoPopup.setAttribute("aria-hidden", "false");

    document.body.classList.add("gallery-video-open");
  }

  /* =========================================================
       OPEN IMAGE
       ========================================================= */

  /* =========================================================
   OPEN IMAGE SLIDER
   ========================================================= */

  function openImage(imageSource, imageTitle) {
    if (!videoPopup) {
      return;
    }

    const popupContent = videoPopup.querySelector(
      ".gallery__video-popup-content",
    );

    if (!popupContent) {
      return;
    }

    /*
     * Find current image position
     */
    const currentItems = galleryData[currentCategory].items;

    let currentIndex = currentItems.findIndex(
      (item) => item.src === imageSource,
    );

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    /*
     * Remove video player completely
     */
    if (videoPlayer) {
      videoPlayer.pause();

      videoPlayer.removeAttribute("src");

      videoPlayer.load();

      videoPlayer.style.display = "none";
    }

    /*
     * Remove Google Drive iframe
     */
    const oldIframe = popupContent.querySelector(".gallery-drive-video");

    if (oldIframe) {
      oldIframe.remove();
    }

    /*
     * Remove old image slider
     */
    const oldSlider = popupContent.querySelector(".gallery-image-slider");

    if (oldSlider) {
      oldSlider.remove();
    }

    /*
     * Create slider
     */
    const slider = document.createElement("div");

    slider.className = "gallery-image-slider";

    /*
     * Image
     */
    const image = document.createElement("img");

    image.className = "gallery-popup-image";

    image.alt = imageTitle || "Gallery image";

    /*
     * Previous button
     */
    const previousButton = document.createElement("button");

    previousButton.className = "gallery-image-slider__prev";

    previousButton.type = "button";

    previousButton.innerHTML = "&#8592;";

    previousButton.setAttribute("aria-label", "Previous image");

    /*
     * Next button
     */
    const nextButton = document.createElement("button");

    nextButton.className = "gallery-image-slider__next";

    nextButton.type = "button";

    nextButton.innerHTML = "&#8594;";

    nextButton.setAttribute("aria-label", "Next image");

    /*
     * Counter
     */
    const counter = document.createElement("div");

    counter.className = "gallery-image-slider__counter";

    /*
     * Image title
     */
    const title = document.createElement("div");

    title.className = "gallery-image-slider__title";

    /*
     * Slider content
     */
    slider.appendChild(image);

    slider.appendChild(previousButton);

    slider.appendChild(nextButton);

    slider.appendChild(counter);

    slider.appendChild(title);

    popupContent.appendChild(slider);

    /*
     * Show selected image
     */
    function showImage(index) {
      const item = currentItems[index];

      if (!item) {
        return;
      }

      currentIndex = index;

      image.classList.add("is-changing");

      setTimeout(() => {
        image.src = item.src;

        image.alt = item.title || "Gallery image";

        title.textContent = item.title || "";

        counter.textContent =
          String(index + 1).padStart(2, "0") +
          " / " +
          String(currentItems.length).padStart(2, "0");

        image.onload = () => {
          image.classList.remove("is-changing");
        };
      }, 120);
    }

    /*
     * Previous
     */
    previousButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const previousIndex =
        currentIndex <= 0 ? currentItems.length - 1 : currentIndex - 1;

      showImage(previousIndex);
    });

    /*
     * Next
     */
    nextButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const nextIndex =
        currentIndex >= currentItems.length - 1 ? 0 : currentIndex + 1;

      showImage(nextIndex);
    });

    /*
     * Keyboard
     */
    function handleSliderKeyboard(event) {
      if (!videoPopup.classList.contains("is-open")) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        previousButton.click();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        nextButton.click();
      }
    }

    document.addEventListener("keydown", handleSliderKeyboard);

    /*
     * Touch swipe
     */
    let touchStartX = 0;

    slider.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.touches[0].clientX;
      },
      {
        passive: true,
      },
    );

    slider.addEventListener(
      "touchend",
      (event) => {
        const touchEndX = event.changedTouches[0].clientX;

        const distance = touchEndX - touchStartX;

        if (Math.abs(distance) < 50) {
          return;
        }

        if (distance > 0) {
          previousButton.click();
        } else {
          nextButton.click();
        }
      },
      {
        passive: true,
      },
    );

    /*
     * Store keyboard cleanup
     */
    slider._removeKeyboard = () => {
      document.removeEventListener("keydown", handleSliderKeyboard);
    };

    /*
     * First image
     */
    showImage(currentIndex);

    /*
     * OPEN POPUP
     */
    videoPopup.classList.add("is-open");

    videoPopup.setAttribute("aria-hidden", "false");

    document.body.classList.add("gallery-video-open");
  }

  /* =========================================================
       CLOSE POPUP
       ========================================================= */

  function closeGalleryPopup() {
    if (!videoPopup) {
      return;
    }

    /*
     * Remove Google Drive iframe.
     * This stops the Drive video.
     */

    const driveIframe = videoPopup.querySelector(".gallery-drive-video");

    if (driveIframe) {
      driveIframe.src = "about:blank";

      driveIframe.remove();
    }

    /*
     * Reset original HTML5 video player.
     */

    if (videoPlayer) {
      videoPlayer.pause();

      videoPlayer.removeAttribute("src");

      videoPlayer.load();

      videoPlayer.style.display = "block";
    }

    removePopupImage();

    videoPopup.classList.remove("is-open");

    videoPopup.setAttribute("aria-hidden", "true");

    document.body.classList.remove("gallery-video-open");
  }

  /* =========================================================
       CLOSE BUTTON / BACKDROP
       ========================================================= */

  videoCloseButtons.forEach((button) => {
    button.addEventListener("click", closeGalleryPopup);
  });

  /* =========================================================
       ESCAPE
       ========================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGalleryPopup();
    }
  });

  /* =========================================================
       RENDER GALLERY
       ========================================================= */
  function renderUIUX() {
    gallery.innerHTML = "";

    gallery.classList.add("gallery__collage--uiux");

    const data = galleryData.uiux;

    if (categoryNumber) {
        categoryNumber.textContent = data.number;
    }

    if (categoryTitle) {
        categoryTitle.textContent = data.title;
    }

    if (categoryDescription) {
        categoryDescription.textContent = data.description;
    }

    const wrapper = document.createElement("div");

    wrapper.className = "gallery__uiux";

    data.items.forEach((item) => {
      const project = document.createElement("article");

      project.className = "gallery__uiux-item";

      project.innerHTML = `
            <div class="gallery__uiux-image">

                <img
                    src="${item.thumbnail}"
                    alt="${item.title}"
                    loading="lazy"
                    decoding="async"
                >

                <div class="gallery__uiux-overlay">
                    <span>VISIT WEBSITE →</span>
                </div>

            </div>

            <div class="gallery__uiux-content">

                <h3 class="gallery__uiux-title">
                    ${item.title}
                </h3>

                <p class="gallery__uiux-category">
                    ${item.category}
                </p>

            </div>
        `;

      project.addEventListener("click", () => {
        if (item.url) {
          window.open(item.url, "_blank", "noopener,noreferrer");
        }
      });

      wrapper.appendChild(project);
    });

    gallery.appendChild(wrapper);
  }
  function renderGallery(category) {

    gallery.classList.remove("gallery__collage--uiux");

    if (category === "uiux") {
        renderUIUX();
        return;
    }

    const data = galleryData[category];

    if (!data || !gallery) {
      return;
    }

    /* -----------------------------------------------
           CATEGORY INFORMATION
           ----------------------------------------------- */

    if (categoryNumber) {
      categoryNumber.textContent = data.number;
    }

    if (categoryTitle) {
      categoryTitle.textContent = data.title;
    }

    if (categoryDescription) {
      categoryDescription.textContent = data.description;
    }

    /* -----------------------------------------------
           CLEAR GALLERY
           ----------------------------------------------- */

    gallery.innerHTML = "";

    /* -----------------------------------------------
           EMPTY CATEGORY
           ----------------------------------------------- */

    if (!data.items.length) {
      const emptyMessage = document.createElement("div");

      emptyMessage.className = "gallery__empty";

      emptyMessage.textContent = "PROJECTS COMING SOON.";

      gallery.appendChild(emptyMessage);

      return;
    }

    /* -----------------------------------------------
           CREATE ITEMS
           ----------------------------------------------- */

    data.items.forEach((item, index) => {
      const galleryItem = document.createElement("article");

      galleryItem.className = "gallery__item";

      galleryItem.dataset.type = item.type;

      /* ---------------------------------------
                   MANUAL THUMBNAIL
                   --------------------------------------- */

      const image = document.createElement("img");

      image.className = "gallery__item-image";

      image.src = item.thumbnail;

      image.alt = item.title;

      image.loading = index === 0 ? "eager" : "lazy";

      image.decoding = "async";

      /* ---------------------------------------
                   OVERLAY
                   --------------------------------------- */

      const overlay = document.createElement("div");

      overlay.className = "gallery__item-overlay";

      const itemCategory = document.createElement("span");

      itemCategory.className = "gallery__item-category";

      itemCategory.textContent = item.category;

      const itemTitle = document.createElement("h3");

      itemTitle.className = "gallery__item-title";

      itemTitle.textContent = item.title;

      overlay.appendChild(itemCategory);

      overlay.appendChild(itemTitle);

      galleryItem.appendChild(image);

      galleryItem.appendChild(overlay);

      /* ---------------------------------------
                   ALL GALLERY ITEMS ARE CLICKABLE
                   --------------------------------------- */

      galleryItem.setAttribute("role", "button");

      galleryItem.setAttribute("tabindex", "0");

      galleryItem.addEventListener("click", () => {
        if (item.type === "video") {
          openVideo(item.src);
        } else if (item.type === "image") {
          openImage(item.src, item.title);
        }
      });

      /* ---------------------------------------
                   KEYBOARD
                   --------------------------------------- */

      galleryItem.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();

          if (item.type === "video") {
            openVideo(item.src);
          } else if (item.type === "image") {
            openImage(item.src, item.title);
          }
        }
      });

      gallery.appendChild(galleryItem);
    });
  }

  /* =========================================================
       CATEGORY NAVIGATION
       ========================================================= */

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const category = link.dataset.category;

      if (!galleryData[category]) {
        return;
      }

      currentCategory = category;

      const newUrl = `${window.location.pathname}?category=${category}`;

      window.history.pushState(
        {
          category,
        },
        "",
        newUrl,
      );

      categoryLinks.forEach((item) => {
        item.classList.toggle("is-active", item.dataset.category === category);
      });

      renderGallery(category);

      closeMobileMenu();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  /* =========================================================
       BROWSER BACK / FORWARD
       ========================================================= */

  window.addEventListener("popstate", () => {
    const params = new URLSearchParams(window.location.search);

    const category = params.get("category") || "videography";

    if (!galleryData[category]) {
      return;
    }

    categoryLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.category === category);
    });

    renderGallery(category);
  });

  /* =========================================================
       MOBILE MENU
       ========================================================= */

  const menuButton = document.querySelector(".gallery__menu");

  const mobileMenu = document.querySelector(".gallery__mobile-menu");

  const mobileClose = document.querySelector(".gallery__mobile-close");

  function openMobileMenu() {
    if (!mobileMenu) {
      return;
    }

    mobileMenu.classList.add("is-active");

    mobileMenu.setAttribute("aria-hidden", "false");

    document.body.classList.add("gallery-menu-open");
  }

  function closeMobileMenu() {
    if (!mobileMenu) {
      return;
    }

    mobileMenu.classList.remove("is-active");

    mobileMenu.setAttribute("aria-hidden", "true");

    document.body.classList.remove("gallery-menu-open");
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  /* =========================================================
       MOBILE CATEGORY NAVIGATION
       ========================================================= */

  const mobileNavigation = document.querySelector(
    ".gallery__mobile-navigation",
  );

  if (mobileNavigation) {
    mobileNavigation.querySelectorAll("[data-category]").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  /* =========================================================
       PARTICLES
       ========================================================= */

  const particleCanvas = document.querySelector(".gallery__particles");

  if (particleCanvas) {
    initParticles(particleCanvas);
  }

  function initParticles(canvas) {
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let particles = [];

    const particleCount =
    window.innerWidth <= 600
        ? 28
        : 85;

    function resizeCanvas() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * pixelRatio;

      canvas.height = window.innerHeight * pixelRatio;

      canvas.style.width = `${window.innerWidth}px`;

      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createParticles();
    }

    function createParticles() {
      particles = [];

      for (let index = 0; index < particleCount; index++) {
        particles.push({
          x: Math.random() * window.innerWidth,

          y: Math.random() * window.innerHeight,

          size: Math.random() * 1.3 + 0.4,

          speed: Math.random() * 0.35 + 0.12,

          angle: Math.random() * Math.PI * 2,

          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function animateParticles() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.x += Math.cos(particle.angle) * particle.speed;

        particle.y += Math.sin(particle.angle) * particle.speed;

        if (particle.x < -10) {
          particle.x = window.innerWidth + 10;
        }

        if (particle.x > window.innerWidth + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = window.innerHeight + 10;
        }

        if (particle.y > window.innerHeight + 10) {
          particle.y = -10;
        }

        particle.phase += 0.015;

        const opacity = 0.15 + (Math.sin(particle.phase) + 1) * 0.08;

        context.beginPath();

        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        context.fillStyle = `rgba(242, 240, 235, ${opacity})`;

        context.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();

    animateParticles();

    window.addEventListener("resize", resizeCanvas);
  }

  /* =========================================================
       INITIALIZE
       ========================================================= */

  categoryLinks.forEach((link) => {
    link.classList.toggle(
      "is-active",
      link.dataset.category === currentCategory,
    );
  });

  renderGallery(currentCategory);
});
