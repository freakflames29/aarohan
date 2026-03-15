import { useState, useEffect } from "react";
import HERO from "../assets/hero_png.png";
import { SERVICES } from "../data/services";
import SiteLayout from "../components/SiteLayout";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const WHATSAPP_NUMBER = "916290717007";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openWhatsApp = () => {
    const message = "Hi Aarohan! I want to discuss my marketing needs. 🚀";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <SiteLayout className="app">
      <section className={`hero ${isVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <div className="hero-left">
            <div className="badge">
              <span className="badge-dot"></span>
              Available for projects
            </div>
            <h1 className="hero-title">
              Your Brand's
              <br />
              <span className="isRegularitalic colorText"> Growth Rocket</span>
              <br />
              Takes Off Here
            </h1>
            <p className="hero-subtitle">
              We turn "nobody knows us" into "everybody loves us" faster than
              you can say algorithm.
              <br />
              <span className="pun">
                Spoiler: Your competitors are already losing sleep. 😴
              </span>
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={openWhatsApp}>
                <span>Let's Create Magic</span>
              </button>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">347%</div>
                <div className="stat-label">
                  <span className="stat-labelText">Avg. ROI Boost</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-number">2.4M+</div>
                <div className="stat-label">
                  <span className="stat-labelText">Clicks Generated</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">
                  <span className="stat-labelText">Client Retention</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img src={HERO} alt="Hero visual" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-header">
          <h2>
            What We Do{" "}
            <span className="highlight isRegularitalic">
              (Spoiler: Everything)
            </span>
          </h2>
          <p>
            From zero to hero, we've got your back. And your front. And your
            sides.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.colorClass}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2 className="isRegular">Ready to Stop Being Invisible?</h2>
          <p>
            Let's make your brand impossible to ignore. (In a good way, promise)
          </p>
          <button className="btn btn-primary btn-large" onClick={openWhatsApp}>
            <span>Start Your Transformation</span>
          </button>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Home;
