import FAQSection from "../../components/FAQSection";
import SiteLayout from "../../components/SiteLayout";
import { FAQS } from "../../data/faq/faqs";
import "./Faq.css";

function Faq() {
  return (
    <SiteLayout className="faq-page">
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
    </SiteLayout>
  );
}

export default Faq;
