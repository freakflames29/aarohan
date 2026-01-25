import { useState, useEffect } from 'react'
import '../App.css'

function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const WHATSAPP_NUMBER = '916290717007'

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openWhatsApp = () => {
    const message = 'Hi Aarohan! I want to discuss my marketing needs. 🚀'
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Aarohan</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <button onClick={openWhatsApp} className="nav-link nav-btn">Contact</button>
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
            Your Brand's
            <br/>
            <span className="isRegularitalic"> Growth Rocket</span>
            {/* <span className=""> Rocket</span> */}
            <br />
            Takes Off Here
          </h1>

          <p className="hero-subtitle ">
            We turn "nobody knows us" into "everybody loves us" faster than you can say algorithm.
            <br />
            <span className="pun">Spoiler: Your competitors are already losing sleep. 😴</span>
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={openWhatsApp}>
              <span>Let's Create Magic</span>
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

      </section>

      <section className="services" id="services">
        <div className="section-header">
          <h2>What We Do <span className="highlight isRegularitalic">(Spoiler: Everything)</span></h2>
          <p>From zero to hero, we've got your back. And your front. And your sides.</p>
        </div>

        <div className="services-grid">
          <div className="service-card card-purple">
            <div className="service-icon">🚀</div>
            <h3>Social Media Sorcery</h3>
            <p>We make your brand go viral (the "everyone's talking about you" kind, not the "stay home" kind).</p>
          </div>
          <div className="service-card card-pink">
            <div className="service-icon">🎨</div>
            <h3>Content That Converts</h3>
            <p>Words so good, even your grandma will click. Designs so fire, they need a fire extinguisher.</p>
          </div>
          <div className="service-card card-cyan">
            <div className="service-icon">📊</div>
            <h3>SEO That Ranks</h3>
            <p>We'll get you to Google's #1 spot. Your competitors? They'll be hitting refresh praying for miracles.</p>
          </div>
          <div className="service-card card-yellow">
            <div className="service-icon">⚡</div>
            <h3>Paid Ads That Pop</h3>
            <p>Every rupee works harder than a startup founder on coffee. Results so good, you'll think it's magic.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2 className='isRegular'>Ready to Stop Being Invisible?</h2>
          <p>Let's make your brand impossible to ignore. (In a good way, promise)</p>
          <button className="btn btn-primary btn-large" onClick={openWhatsApp}>
            <span>Start Your Transformation</span>
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              {/* <span className="logo-icon">🚀</span> */}
              <span className="white">Aarohan</span>
            </div>
            <p>Launching brands into the stratosphere since day one. Your competitors are still looking up. 👀</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#services">Services</a>
              <button onClick={openWhatsApp} className="footer-link-btn">Contact</button>
              {/* <a href="#">
                <button>Privacy</button>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
