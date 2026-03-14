import { Link } from "react-router-dom";
import IMG from "../../assets/blacklogo.png";
import FAQSection from "../../components/FAQSection";
import { FAQS } from "../../data/faq/faqs";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq-page">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link to="/">
              <img src={IMG} className="logoImg" alt="Aarohan logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/blog" className="nav-link">
              Blogs
            </Link>
          </div>
        </div>
      </nav>

      <main className="faq-shell">
        <section className="faq-hero">
          <span className="faq-badge">Answers, without the back-and-forth</span>
          <h1 className="faq-title">
            Frequently Asked <span className="faq-title-accent">Questions</span>
          </h1>
          <p className="faq-subtitle">
            Everything your team usually asks before we launch the growth engine.
          </p>
        </section>

        <FAQSection items={FAQS} />
      </main>
    </div>
  );
}

export default Faq;
