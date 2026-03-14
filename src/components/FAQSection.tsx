import { useMemo, useState } from "react";
import type { FAQItem } from "../data/faq/faqs";
import "./FAQSection.css";

type FAQSectionProps = {
  items: FAQItem[];
};

function FAQSection({ items }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => Number(Boolean(b.mostAsked)) - Number(Boolean(a.mostAsked)));
  }, [items]);

  const featuredItems = sortedItems.filter((item) => item.mostAsked);
  const regularItems = sortedItems.filter((item) => !item.mostAsked);

  const renderItem = (item: FAQItem) => {
    const isOpen = openId === item.id;

    return (
      <article
        key={item.id}
        className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
      >
        <button
          type="button"
          className="faq-question"
          onClick={() => setOpenId(isOpen ? null : item.id)}
          aria-expanded={isOpen}
        >
          <span className="faq-question-text">{item.question}</span>
          <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
      </article>
    );
  };

  return (
    <div className="faq-section">
      {featuredItems.length ? (
        <section className="faq-featured-block">
          <div className="faq-section-heading">
            <span className="faq-mini-badge">★ Most asked</span>
            <h2 className="faq-section-title">Start with the crowd favorites</h2>
          </div>
          <div className="faq-list">{featuredItems.map(renderItem)}</div>
        </section>
      ) : null}

      <section className="faq-all-block">
        <div className="faq-section-heading">
          <span className="faq-mini-badge faq-mini-badge-secondary">All FAQs</span>
          <h2 className="faq-section-title">Everything you might want to know</h2>
        </div>
        <div className="faq-list">{regularItems.map(renderItem)}</div>
      </section>
    </div>
  );
}

export default FAQSection;
