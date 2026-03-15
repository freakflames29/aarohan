import { Link } from "react-router-dom";
import { getAllBlogs } from "../../data/blogEnum";
import type { BlogMetadata } from "../../data/blogEnum";
import SiteLayout from "../../components/SiteLayout";
import "./Blog.css";

const Blog = () => {
  const blogs: BlogMetadata[] = getAllBlogs();

  return (
    <SiteLayout className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="blog-badge">📝 Insights & Strategies</span>
          <h1 className="blog-hero-title">
            Marketing Wisdom <span className="highlight-text">Without</span> the Fluff
          </h1>
          <p className="blog-hero-subtitle">
            Real tactics. Real results. Zero boring corporate speak.
          </p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="blog-grid">
          {blogs.map((post) => (
            <article key={post.id} className="blog-card">
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <div className="blog-card-overlay">
                    <span className="read-more">Read Article →</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-date">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;
