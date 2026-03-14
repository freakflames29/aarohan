import { Link } from "react-router-dom";
import { getAllBlogs } from "../../data/blogEnum";
import type { BlogMetadata } from "../../data/blogEnum";
import "./Blog.css";
import IMG from "../../assets/blacklogo.png";

const Blog = () => {
  const blogs: BlogMetadata[] = getAllBlogs();

  return (
    <div className="blog-page">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link to={"/"}>
            {/* <h3 className="logoFont">Aarohan</h3> */}
            <img src={IMG} className="logoImg" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </div>
        </div>
      </nav>

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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              <span className="logo-icon">🚀</span>
              <span className="logo-text">Aarohan</span>
            </div>
            <p>Launching brands into the stratosphere since day one.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
