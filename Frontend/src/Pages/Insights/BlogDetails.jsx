import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import blogPosts from "../../data/blogPosts";

const BlogDetails = () => {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.id === slug);

  if (!post) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#F7F2EA] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
              404
            </p>

            <h1 className="mt-5 font-serif text-5xl text-[#173873]">
              Article not found.
            </h1>

            <p className="mt-5 text-[#173873]/60">
              The article you're looking for doesn't exist.
            </p>

            <Link
              to="/insights"
              className="mt-8 inline-flex rounded-full bg-[#173873] px-7 py-3.5 text-sm font-medium text-white"
            >
              Back to Insights
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (item) => item.category === post.category && item.id !== post.id
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F2EA] text-[#173873] overflow-hidden">
        {/* ARTICLE HERO */}
        <section className="relative px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-20">
          <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full border border-[#173873]/10 pointer-events-none" />

          <div className="max-w-5xl mx-auto relative">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-[#173873]/50 hover:text-[#F88118] transition-colors"
            >
              <span>←</span>
              Back to Insights
            </Link>

            <div className="mt-12">
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-[#F88118] font-semibold">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#F88118]" />
                <span className="text-[#173873]/40">{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-[#173873]/20" />
                <span className="text-[#173873]/40">{post.date}</span>
              </div>

              <h1 className="mt-7 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-5xl">
                {post.title}
              </h1>

              <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-8 text-[#173873]/60">
                {post.excerpt}
              </p>
              <img src={post.image} alt={post.imageAlt} className="mt-10 aspect-video w-full rounded-[2rem] object-cover" />
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="px-6 sm:px-10 lg:px-16 pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-14 lg:gap-20">
            <article className="max-w-3xl">
              <div className="h-px w-full bg-[#173873]/10 mb-12" />

              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="mt-12 mb-5 font-serif text-3xl sm:text-4xl text-[#173873]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="my-7 space-y-4 pl-5 list-disc text-[#173873]/70 leading-7"
                    >
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={index}
                    className="mb-6 text-base sm:text-lg leading-8 text-[#173873]/70"
                  >
                    {block.text}
                  </p>
                );
              })}
            </article>

            {/* SIDEBAR */}
            <aside className="lg:pt-12">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-[1.5rem] bg-white border border-[#173873]/10 p-7 shadow-[0_15px_40px_rgba(23,56,115,0.05)]">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#F88118] font-semibold">
                    Keep learning
                  </p>

                  <h3 className="mt-4 font-serif text-2xl">
                    Turn knowledge into skills.
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#173873]/55">
                    Explore practical courses designed to help you move from
                    learning concepts to building real-world skills.
                  </p>

                  <Link
                    to="/courses"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#173873] hover:text-[#F88118] transition-colors"
                  >
                    Explore courses
                    <span>→</span>
                  </Link>
                </div>

                <div className="rounded-[1.5rem] bg-[#173873] p-7 text-white">
                  <span className="font-serif text-6xl text-white/10">
                    SP
                  </span>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Learn. Build. Grow.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* RELATED */}
        {relatedPosts.length > 0 && (
          <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  Continue reading
                </p>

                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                  More to explore.
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/insights/${related.id}`}
                    className="group"
                  >
                    <article className="h-full rounded-[1.5rem] bg-[#F7F2EA] border border-[#173873]/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,56,115,0.08)]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#F88118] font-semibold">
                          {related.category}
                        </span>

                        <span className="text-xs text-[#173873]/35">
                          {related.readTime}
                        </span>
                      </div>

                      <h3 className="mt-6 font-serif text-2xl leading-tight group-hover:text-[#F88118] transition-colors">
                        {related.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-[#173873]/55">
                        {related.excerpt}
                      </p>

                      <div className="mt-7 text-sm font-medium">
                        Read article →
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogDetails;
