import { useEffect, useState } from "react";

const fallbackTestimonialsTop = [
  {
    id: 1,
    name: "Shendge Akshay",
    role: "Google review · 7 months ago",
    image: "https://ui-avatars.com/api/?background=173873&color=ffffff&name=Shendge+Akshay",
    rating: 5,
    review:
      "Very good classes. Concepts are explained clearly and doubts are solved properly. Teaching style is easy to understand. Highly recommended.",
  },
  {
    id: 2,
    name: "Ganesh Borkar",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=F88118&color=ffffff&name=Ganesh+Borkar",
    rating: 5,
    review:
      "I had an excellent experience with this institute. The teachers are highly knowledgeable, supportive, and explain every concept in a very simple and practical way. The course content is well-structured, and the hands-on sessions really helped me build confidence.",
  },
  {
    id: 3,
    name: "Kavita Bamble",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=6B46C1&color=ffffff&name=Kavita+Bamble",
    rating: 5,
    review:
      "I had a wonderful experience learning at Skill Paradise. The trainers are very supportive and explain concepts in an easy way. The learning environment is comfortable and well-organized. The practical sessions and mock interviews helped me build confidence.",
  },
  {
    id: 5,
    name: "Mohit Yerkal",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=F4511E&color=ffffff&name=Mohit+Yerkal",
    rating: 5,
    review: "Excellent experience to learn and grow. Good skilled and professional guidance in this paradise. Really this is Skill Paradise.",
  },
  {
    id: 6,
    name: "Sonali Bhalerao",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=C2410C&color=ffffff&name=Sonali+Bhalerao",
    rating: 5,
    review: "I have completed a Data Analytics course and I am currently doing an internship.",
  },
  {
    id: 7,
    name: "Sunanda Khemnar",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=C2410C&color=ffffff&name=Sunanda+Khemnar",
    rating: 5,
    review: "Nice environment and helping staff.",
  },
  {
    id: 8,
    name: "Pavan Padalkar",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=EA580C&color=ffffff&name=Pavan+Padalkar",
    rating: 5,
    review: "Excellent place for learning and upgrading skills.",
  },
];

const fallbackTestimonialsBottom = [
  {
    id: 4,
    name: "Vitnor Sagar",
    role: "Google review · Edited 9 months ago",
    image: "https://ui-avatars.com/api/?background=285943&color=ffffff&name=Vitnor+Sagar",
    rating: 5,
    review:
      "All in one solution is here regarding job in IT sector.",
  },
  {
    id: 9,
    name: "ajay garad",
    role: "Google review · 9 months ago",
    image: "https://ui-avatars.com/api/?background=285943&color=ffffff&name=ajay+garad",
    rating: 5,
    review: "Nice training centre.",
  },
  {
    id: 10,
    name: "Kirti Tambe",
    role: "Google review · 2 days ago",
    image: "https://ui-avatars.com/api/?background=047857&color=ffffff&name=Kirti+Tambe",
    rating: 5,
    review: "I had a great learning experience with the Data Science course. The training covered Python, SQL, data analysis, data visualization, hands-on projects, and guidance that helped me build confidence.",
  },
  {
    id: 11,
    name: "Akshay Pawar",
    role: "Google review · 2 weeks ago",
    image: "https://ui-avatars.com/api/?background=047857&color=ffffff&name=Akshay+Pawar",
    rating: 5,
    review: "Excellent Learning & Career Experience at Skill Paradise. I had a very good experience with the Data Analytics training.",
  },
  {
    id: 12,
    name: "om yannawar",
    role: "Google review · 2 weeks ago",
    image: "https://ui-avatars.com/api/?background=0F766E&color=ffffff&name=om+yannawar",
    rating: 5,
    review: "As a fresher, Skill Paradise was the right place to start my career. Training was practical and easy to understand, and placement support helped me get placed. Thank you to the entire team. 😊🙏",
  },
  {
    id: 13,
    name: "sanket shinde",
    role: "Google review · 2 weeks ago",
    image: "https://ui-avatars.com/api/?background=C2410C&color=ffffff&name=sanket+shinde",
    rating: 5,
    review: "Skill Paradise is a great IT training institute for starting a career journey. Trainers explain everything from the basics in an easy and practical way, with supportive learning and placement support.",
  },
];

/* ================= STAR RATING ================= */

function StarRating({ rating }) {
  return (
    <div
      className="flex items-center gap-[3px]"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fill =
          rating >= star ? 100 : rating >= star - 0.5 ? 50 : 0;

        return (
          <span
            key={star}
            className="relative block h-[13px] w-[13px] text-[#D9D2C8]"
          >
            {/* Empty star */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute inset-0 h-full w-full"
            >
              <path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.56l-5.91 3.1 1.13-6.57-4.77-4.65 6.6-.96L12 2.5z" />
            </svg>

            {/* Filled portion */}
            {fill > 0 && (
              <span
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${fill}%` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[13px] w-[13px] text-[#F88118]"
                >
                  <path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.56l-5.91 3.1 1.13-6.57-4.77-4.65 6.6-.96L12 2.5z" />
                </svg>
              </span>
            )}
          </span>
        );
      })}

      <span className="ml-1 text-[10px] font-semibold text-[#6E6558]">
        {rating}
      </span>
    </div>
  );
}

/* ================= TESTIMONIAL CARD ================= */

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card group relative w-[330px] shrink-0 overflow-hidden rounded-[16px] border border-[#173873]/10 bg-[#FCF9F4] p-6 shadow-[0_8px_25px_rgba(23,56,115,0.045)] sm:w-[350px] sm:p-7">
      {/* Rating + Quote */}

      <div className="mb-5 flex items-start justify-between gap-4">
        <StarRating rating={testimonial.rating} />

        <span className="font-serif text-[32px] leading-none text-[#173873]/10">
          “
        </span>
      </div>

      {/* Review */}

      <p className="relative z-10 min-h-[125px] font-serif text-[17px] leading-[1.55] tracking-[-0.005em] text-[#173873] sm:text-[18px]">
        {testimonial.review}
      </p>

      {/* Divider */}

      <div className="my-5 h-px w-full bg-[#173873]/10" />

      {/* Reviewer */}

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          loading="lazy"
          decoding="async"
          width="36"
          height="36"
          alt={testimonial.name}
          className="h-9 w-9 rounded-full object-cover ring-2 ring-[#F88118]/10"
        />

        <div>
          <h4 className="text-[13px] font-bold text-[#173873]">
            {testimonial.name}
          </h4>

          <p className="mt-0.5 text-[10px] font-medium tracking-[0.04em] text-[#6E6558]">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Decorative number */}

      <span className="pointer-events-none absolute bottom-[-12px] right-3 font-serif text-[70px] font-semibold leading-none text-[#173873]/[0.025]">
        {String(testimonial.id).padStart(2, "0")}
      </span>
    </article>
  );
}

/* ================= TESTIMONIAL ROW ================= */

function TestimonialRow({ testimonials }) {
  const items = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-row group overflow-hidden px-5 sm:px-8 lg:px-10">
      <div className="testimonial-track testimonial-track-left">
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN SECTION ================= */

function Testimonials() {
  const [testimonials, setTestimonials] = useState({
    top: fallbackTestimonialsTop,
    bottom: fallbackTestimonialsBottom,
  });
  const [googleSummary, setGoogleSummary] = useState(null);

  useEffect(() => {
    let active = true;
    async function loadGoogleReviews() {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
        const response = await fetch(`${baseUrl}/api/google-reviews`);
        if (!response.ok) return;
        const data = await response.json();
        if (!active || !data.reviews?.length) return;

        const realReviews = data.reviews.map((review) => ({
          ...review,
          role: `Google review · ${review.publishedAt}`,
        }));
        const middle = Math.ceil(realReviews.length / 2);
        setTestimonials({ top: realReviews.slice(0, middle), bottom: realReviews.slice(middle) });
        setGoogleSummary({ rating: data.rating, totalReviews: data.totalReviews });
      } catch {
        // Existing cards remain visible when the API is unavailable.
      }
    }
    loadGoogleReviews();
    return () => { active = false; };
  }, []);

  return (
    <section style={{ contentVisibility: "auto", containIntrinsicSize: "auto 900px" }} className="relative overflow-hidden bg-[#F7F2EA] py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND DOODLES ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(248,129,24,0.16) 1px, transparent 1.5px),
            radial-gradient(circle at 80% 70%, rgba(23,56,115,0.12) 1px, transparent 1.5px)
          `,
          backgroundSize: "28px 28px, 34px 34px",
        }}
      />

      {/* Doodle 1 */}

      <div className="pointer-events-none absolute left-[5%] top-[18%] rotate-[-12deg] text-[#173873]/10">
        <svg
          viewBox="0 0 100 100"
          className="h-16 w-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M20 50c15-30 45-30 60 0s-15 30-30 10-30-10-30-10z" />
          <path d="M35 25l5-8M55 25l5-8M75 35l8-5" />
        </svg>
      </div>

      {/* Doodle 2 */}

      <div className="pointer-events-none absolute right-[6%] top-[48%] rotate-[15deg] text-[#F88118]/15">
        <svg
          viewBox="0 0 100 100"
          className="h-20 w-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M15 50c20-20 50-20 70 0" />
          <path d="M25 65c15 12 35 12 50 0" />
          <circle cx="20" cy="35" r="4" />
          <circle cx="80" cy="35" r="4" />
        </svg>
      </div>

      {/* Doodle 3 */}

      <div className="pointer-events-none absolute bottom-[8%] left-[16%] rotate-[8deg] text-[#173873]/10">
        <svg
          viewBox="0 0 100 100"
          className="h-14 w-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M50 15v70M15 50h70" />
          <circle cx="50" cy="50" r="28" />
          <path d="M35 35l30 30M65 35L35 65" />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Header */}

        <div className="mx-auto mb-12 max-w-[1240px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              What Learners Say
            </span>

            <span className="h-[2px] w-7 bg-[#F88118]" />
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h2 className="max-w-[700px] font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[54px]">
              Real people.
              <br />
              Real{" "}
              <span className="font-medium italic text-[#F88118]">
                experiences.
              </span>
            </h2>

            <p className="max-w-[370px] text-[14px] leading-6 text-[#6E6558] sm:text-[15px] sm:leading-7">
              Hear from learners who turned their learning journey into
              practical skills, confidence and new opportunities.
            </p>
          </div>

          {googleSummary && (
            <p className="mt-5 text-sm font-semibold text-[#173873]">
              Google rating: {googleSummary.rating}/5 from {googleSummary.totalReviews} reviews
            </p>
          )}
        </div>

      </div>

      <TestimonialRow
        testimonials={[...testimonials.top, ...testimonials.bottom]}
      />

      {/* ================= ANIMATION ================= */}

      <style>{`
        .testimonial-track {
          display: flex;
          width: max-content;
          gap: 16px;
          will-change: transform;
        }

        /*
          TOP ROW
          Right → Left
        */

        .testimonial-track-left {
          animation: testimonialLeft 70s linear infinite;
        }

        /*
          BOTTOM ROW
          Left → Right
        */

        .testimonial-track-right {
          animation: testimonialRight 75s linear infinite;
          transform: translateX(-50%);
        }

        /*
          Pause the individual row
          when the user hovers it.
        */

        .testimonial-row:hover .testimonial-track {
          animation-play-state: paused;
        }

        /*
          Card hover
        */

        .testimonial-card {
          transition:
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 650ms ease;
        }

        .testimonial-card:hover {
          transform: scale(1.025);
          border-color: rgba(248, 129, 24, 0.25);

          box-shadow:
            0 18px 40px rgba(23, 56, 115, 0.09),
            0 6px 16px rgba(248, 129, 24, 0.045);

          z-index: 10;
        }

        /*
          Infinite movement
        */

        @keyframes testimonialLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 8px));
          }
        }

        @keyframes testimonialRight {
          from {
            transform: translateX(calc(-50% - 8px));
          }

          to {
            transform: translateX(0);
          }
        }

        /*
          Tablet
        */

        @media (max-width: 1023px) {
          .testimonial-track {
            gap: 14px;
          }

          .testimonial-track-left {
            animation-duration: 65s;
          }

          .testimonial-track-right {
            animation-duration: 70s;
          }
        }

        /*
          Mobile
        */

        @media (max-width: 640px) {
          .testimonial-track {
            gap: 12px;
          }

          .testimonial-card {
            width: 285px;
            padding: 22px;
          }

          .testimonial-track-left {
            animation-duration: 55s;
          }

          .testimonial-track-right {
            animation-duration: 60s;
          }

          .testimonial-card:hover {
            transform: scale(1.015);
          }
        }

        /*
          Accessibility
        */

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
            transform: none !important;
          }

          .testimonial-card {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
