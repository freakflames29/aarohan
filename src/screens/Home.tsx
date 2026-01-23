import { useState, useEffect } from 'react'
import '../App.css'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">DigitalWiz</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            Available for projects
          </div>

          <h1 className="hero-title">
            We Don't Do
            <span className="gradient-text"> Boring</span>
            <br />
            We Do <span className="gradient-text">Legendary</span>
          </h1>

          <p className="hero-subtitle">
            Marketing so good, even your competitors will secretly follow us.
            <br />
            <span className="pun">(Yes, we've checked their search history)</span>
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              <span>Let's Create Magic</span>
              <div className="btn-glow"></div>
            </button>
            <button className="btn btn-secondary">
              <span>See Our Wizardry</span>
            </button>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">347%</div>
              <div className="stat-label">Avg. ROI Boost</div>
            </div>
            <div className="stat">
              <div className="stat-number">2.4M+</div>
              <div className="stat-label">Clicks Generated</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Retention</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">📈</div>
            <div className="card-text">+340% Growth</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎯</div>
            <div className="card-text">Perfect Target</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">💡</div>
            <div className="card-text">Brilliant Ideas</div>
          </div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-header">
          <h2>What We Do <span className="highlight">(Spoiler: Everything)</span></h2>
          <p>From zero to hero, we've got your back. And your front. And your sides.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Social Media Sorcery</h3>
            <p>We make your brand go viral. (The good kind, not the pandemic kind)</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Content That Converts</h3>
            <p>Words that sell. Designs that compel. Results that excel.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>SEO Wizardry</h3>
            <p>We'll get you to #1 on Google. Your competitors will hate us.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Paid Ads Mastery</h3>
            <p>Every dollar works harder than a caffeine-fueled startup founder.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2>Ready to Stop Being Invisible?</h2>
          <p>Let's make your brand impossible to ignore. (In a good way, promise)</p>
          <button className="btn btn-primary btn-large">
            <span>Start Your Transformation</span>
            <div className="btn-glow"></div>
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">DigitalWiz</span>
            </div>
            <p>Making brands legendary since... well, recently. But we're really good at it.</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
