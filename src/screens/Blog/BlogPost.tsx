import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { getAllBlogs, getBlogBySlug } from "../../data/blogEnum";
import { loadBlogContent } from "../../utils/blogLoader";
import type { BlogPost as BlogPostType } from "../../utils/blogLoader";
import "./Blog.css";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  const metadata = slug ? getBlogBySlug(slug) : undefined;
  const allBlogs = getAllBlogs();
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);
  const prevPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  useEffect(() => {
    const fetchContent = async () => {
      if (!slug) return;
      
      const loadedPost = await loadBlogContent(slug as any);
      if (loadedPost) {
        setPost(loadedPost);
      }
      setLoading(false);
    };

    fetchContent();
  }, [slug]);

  if (!metadata && !loading) {
    return <Navigate to="/blog" replace />;
  }

  if (loading || !post) {
    return (
      <div className="blog-page blog-post-page">
        <nav className="navbar">
          <div className="nav-content">
            <Link to="/" className="logo">
              <span className="logo-icon">🚀</span>
              <span className="logo-text">Aarohan</span>
            </Link>
          </div>
        </nav>
        <div className="blog-post loading">
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page blog-post-page">
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Aarohan</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </nav>

      <article className="blog-post">
        <header className="blog-post-header">
          <div className="blog-post-meta">
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>
        </header>

        <img src={post.image} alt={post.title} className="blog-post-image" />

        <div className="blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="blog-post-footer">
          <div className="blog-navigation">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} className="nav-link prev">
                <span className="nav-label">← Previous</span>
                <span className="nav-title">{prevPost.title}</span>
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="nav-link next">
                <span className="nav-label">Next →</span>
                <span className="nav-title">{nextPost.title}</span>
              </Link>
            )}
          </div>
        </div>
      </article>

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
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
