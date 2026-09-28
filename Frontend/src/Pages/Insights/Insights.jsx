import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import blogPosts from "../../data/blogPosts";

const categories = ["All", "Technology", "AI", "Career", "Learning"];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = blogPosts.find((post) => post.featured);
  const latestPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F2EA] text-[#173873] overflow-hidden">
        {/* HERO */}
        <section className="relative px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-20 lg:pb-28">
          <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full border border-[#173873]/10 pointer-events-none" />
          <div className="absolute top-20 -right-20 w-[260px] h-[260px] rounded-full border border-[#F88118]/15 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-10 h-[2px] bg-[#F88118]" />

                <span className="text-xs tracking-[0.28em] uppercase font-medium text-[#173873]/60">
                  SkillParadise Insights
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
                Learn beyond
                <br />
                the{" "}
                <span className="text-[#F88118]">classroom.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base sm:text-lg leading-8 text-[#173873]/65">
                Practical insights, career guidance, technology ideas, and
                learning resources designed to help you build skills that
                matter in the real world.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-sm border transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#173873] text-white border-[#173873]"
                        : "bg-white/60 text-[#173873]/70 border-[#173873]/15 hover:bg-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        {activeCategory === "All" && featuredPost && (
          <section className="px-6 sm:px-10 lg:px-16 pb-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                    Featured
                  </p>

                  {/* <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Start here.
                  </h2> */}
                </div>
              </div>

              <Link
                to={`/insights/${featuredPost.id}`}
                className="group block"
              >
                <article className="relative overflow-hidden rounded-[2rem] bg-[#173873] text-white min-h-[430px] sm:min-h-[470px] shadow-[0_25px_70px_rgba(23,56,115,0.16)]">
                  <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
                  <div className="absolute right-20 bottom-[-150px] w-96 h-96 rounded-full border border-[#F88118]/20" />

                  <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] min-h-[430px] sm:min-h-[470px]">
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/50">
                        <span>{featuredPost.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#F88118]" />
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
                        {featuredPost.title}
                      </h2>

                      <p className="mt-6 max-w-2xl text-white/65 leading-7">
                        {featuredPost.excerpt}
                      </p>

                      <div className="mt-9 inline-flex items-center gap-3 text-sm font-medium">
                        Read article
                        <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F88118] group-hover:border-[#F88118]">
                          →
                        </span>
                      </div>
                    </div>

                    <div className="relative min-h-64 lg:min-h-full overflow-hidden">
                      <img src={featuredPost.image} alt={featuredPost.imageAlt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* ARTICLES */}
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  Explore
                </p>

                <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                  Ideas worth
                  <br />
                  <span className="text-[#F88118]">exploring.</span>
                </h2>
              </div>

              <p className="max-w-md text-[#173873]/55 leading-7">
                Thoughtful articles covering technology, AI, careers, and the
                journey of becoming better at what you do.
              </p>
            </div>

            {latestPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/insights/${post.id}`}
                    className="group"
                  >
                    <article className="h-full rounded-[1.75rem] bg-[#F7F2EA] border border-[#173873]/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,56,115,0.10)]">
                      <div className="relative h-48 overflow-hidden bg-[#173873]">
                        <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#173873]/85 via-transparent to-transparent" />

                        <div className="absolute bottom-5 left-6">
                          <span className="text-xs uppercase tracking-[0.25em] text-white">
                            0{index + 2}
                          </span>
                        </div>

                        <div className="absolute right-6 bottom-5">
                          <span className="text-xs uppercase tracking-[0.2em] text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-7">
                        <div className="flex items-center gap-3 text-xs text-[#173873]/40">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="mt-4 font-serif text-2xl leading-tight text-[#173873] group-hover:text-[#F88118] transition-colors">
                          {post.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-[#173873]/60">
                          {post.excerpt}
                        </p>

                        <div className="mt-7 pt-5 border-t border-[#173873]/10 flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#173873]/35">
                            Read article
                          </span>

                          <span className="w-9 h-9 rounded-full border border-[#173873]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#173873] group-hover:text-white">
                            →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-[#173873]/10 bg-[#F7F2EA] p-12 text-center">
                <p className="font-serif text-3xl">
                  More insights are coming soon.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CONTENT PROMISE */}
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#173873] px-8 sm:px-12 lg:px-20 py-16 lg:py-20 text-white">
              <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-white/10" />

              <div className="absolute -left-20 -bottom-32 w-72 h-72 rounded-full border border-[#F88118]/20" />

              <div className="relative max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  Our approach
                </p>

                <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                  Useful content.
                  <br />
                  <span className="text-[#F88118]">
                    Not content for content's sake.
                  </span>
                </h2>

                <p className="mt-7 text-base sm:text-lg leading-8 text-white/60">
                  Every SkillParadise insight is designed around a simple
                  purpose — helping you understand something, build something,
                  or make a better decision about your learning and career.
                </p>

                <Link
                  to="/courses"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#173873] transition-all duration-300 hover:bg-[#F88118] hover:text-white"
                >
                  Explore our courses
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Insights;
