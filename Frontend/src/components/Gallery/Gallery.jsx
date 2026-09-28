import { useEffect, useState } from "react";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
    title: "Learning in Action",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    title: "Collaborative Learning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    title: "Building with Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    title: "Ideas Come Together",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    title: "Students Growing Together",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
    title: "A Place to Learn",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    title: "Inside the Classroom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    title: "Creating Digital Solutions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    title: "Learning Together",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
    title: "Celebrating Success",
  },
];

/* =========================================================
   FIND RELATIVE POSITION
   ========================================================= */

const getPosition = (index, activeIndex, total) => {
  let difference = index - activeIndex;

  if (difference > total / 2) {
    difference -= total;
  }

  if (difference < -total / 2) {
    difference += total;
  }

  return difference;
};

/* =========================================================
   GALLERY
   ========================================================= */

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* =======================================================
     AUTOMATIC CAROUSEL

     Every 2 seconds the carousel moves automatically.
     It never stops on hover.
     ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     CURVED CAROUSEL POSITIONING

     The center image is large and straight.

     As images move away from the center:
     - they become smaller
     - they move further sideways
     - they rotate in 3D
     - they move backwards in depth
     - they become slightly transparent

     This creates the curved / concave carousel effect.
     ======================================================= */

  const getCardStyle = (position) => {
    /* ================= CENTER ================= */

    if (position === 0) {
      return {
        transform:
          "translate(-50%, -50%) translateX(0px) translateZ(180px) rotateY(0deg) scale(1)",
        zIndex: 50,
        opacity: 1,
      };
    }

    /* ================= IMMEDIATE LEFT ================= */

    if (position === -1) {
      return {
        transform:
          "translate(-50%, -50%) translateX(-245px) translateZ(80px) rotateY(18deg) scale(0.9)",
        zIndex: 40,
        opacity: 1,
      };
    }

    /* ================= IMMEDIATE RIGHT ================= */

    if (position === 1) {
      return {
        transform:
          "translate(-50%, -50%) translateX(245px) translateZ(80px) rotateY(-18deg) scale(0.9)",
        zIndex: 40,
        opacity: 1,
      };
    }

    /* ================= SECOND LEFT ================= */

    if (position === -2) {
      return {
        transform:
          "translate(-50%, -50%) translateX(-455px) translateZ(-10px) rotateY(31deg) scale(0.78)",
        zIndex: 30,
        opacity: 0.95,
      };
    }

    /* ================= SECOND RIGHT ================= */

    if (position === 2) {
      return {
        transform:
          "translate(-50%, -50%) translateX(455px) translateZ(-10px) rotateY(-31deg) scale(0.78)",
        zIndex: 30,
        opacity: 0.95,
      };
    }

    /* ================= THIRD LEFT ================= */

    if (position === -3) {
      return {
        transform:
          "translate(-50%, -50%) translateX(-635px) translateZ(-90px) rotateY(43deg) scale(0.64)",
        zIndex: 20,
        opacity: 0.7,
      };
    }

    /* ================= THIRD RIGHT ================= */

    if (position === 3) {
      return {
        transform:
          "translate(-50%, -50%) translateX(635px) translateZ(-90px) rotateY(-43deg) scale(0.64)",
        zIndex: 20,
        opacity: 0.7,
      };
    }

    /* ================= HIDDEN LEFT ================= */

    if (position < 0) {
      return {
        transform:
          "translate(-50%, -50%) translateX(-850px) translateZ(-180px) rotateY(55deg) scale(0.48)",
        zIndex: 10,
        opacity: 0,
        pointerEvents: "none",
      };
    }

    /* ================= HIDDEN RIGHT ================= */

    return {
      transform:
        "translate(-50%, -50%) translateX(850px) translateZ(-180px) rotateY(-55deg) scale(0.48)",
      zIndex: 10,
      opacity: 0,
      pointerEvents: "none",
    };
  };

  return (
    <section style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }} className="relative overflow-hidden bg-[#F7F2EA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* =====================================================
          BACKGROUND PATTERN
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.055) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT

          Same container as Founders.jsx
      ====================================================== */}

      <div className="relative mx-auto max-w-[1180px]">
        {/* ===================================================
            HEADER

            EXACT SAME TYPOGRAPHY / SPACING AS FOUNDERS
        ==================================================== */}

        <div className="mb-10 border-b border-[#173873]/15 pb-7 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            {/* Section Label */}

            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              Life at Skill Paradise
            </span>

            {/* Orange Accent */}

            <span className="h-[2px] w-7 bg-gradient-to-r from-[#F88118] to-[#F49831]" />
          </div>

          {/* =================================================
              HEADING + DESCRIPTION
              
              EXACT SAME SYSTEM AS FOUNDERS
          ================================================== */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
            {/* LEFT SIDE */}

            <h2
              className="
                max-w-[700px]
                font-serif
                text-4xl
                font-semibold
                leading-[1.06]
                tracking-tight
                text-[#173873]
                sm:text-5xl
                lg:text-[54px]
              "
            >
              Learning that{" "}
              <span className="font-medium italic text-[#F88118]">
                comes to life.
              </span>
            </h2>

            {/* RIGHT SIDE */}

            <p className="max-w-[350px] text-[13px] leading-6 text-[#6E6558] sm:text-[14px] sm:leading-7">
              From classrooms and coding sessions to career milestones,
              discover the people, moments and experiences that make
              Skill Paradise a place to learn, grow and succeed.
            </p>
          </div>
        </div>

        {/* =====================================================
            CURVED CAROUSEL
        ====================================================== */}

        <div className="relative mt-10 h-[380px] sm:mt-12 sm:h-[440px] lg:mt-14 lg:h-[500px]">
          {/* =================================================
              3D STAGE
          ================================================== */}

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              perspective: "1800px",
              perspectiveOrigin: "center center",
            }}
          >
            {galleryImages.map((item, index) => {
              const position = getPosition(
                index,
                activeIndex,
                galleryImages.length
              );

              const cardStyle = getCardStyle(position);

              return (
                <div
                  key={item.image}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[270px]
                    w-[190px]
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/80
                    bg-white
                    shadow-[0_18px_50px_rgba(23,56,115,0.14)]
                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    sm:h-[330px]
                    sm:w-[225px]
                    lg:h-[390px]
                    lg:w-[270px]
                  "
                  style={cardStyle}
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                    alt={item.title}
                    className="h-full w-full select-none object-cover"
                    draggable="false"
                  />

                  {/* SUBTLE OVERLAY */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071c3b]/30 via-transparent to-transparent" />

                  {/* =================================================
                      CENTER IMAGE INFORMATION
                  ================================================== */}

                  <div
                    className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-700 sm:p-5 ${
                      position === 0
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="border border-white/40 bg-white/90 px-4 py-3 backdrop-blur-md">
                      <p className="font-serif text-[16px] font-semibold text-[#173873]">
                        {item.title}
                      </p>

                      <div className="mt-2 h-[2px] w-7 bg-[#F88118]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              SIDE FADE

              Helps create the same cropped carousel feeling
              as the inspiration.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-[60]
              w-[14%]
              bg-gradient-to-r
              from-[#F7F2EA]
              via-[#F7F2EA]/80
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-[60]
              w-[14%]
              bg-gradient-to-l
              from-[#F7F2EA]
              via-[#F7F2EA]/80
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            SLIDE INDICATORS
        ====================================================== */}

        <div className="mt-1 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to gallery image ${index + 1}`}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-9 bg-[#F88118]"
                    : "w-3 bg-[#173873]/20 hover:bg-[#173873]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
