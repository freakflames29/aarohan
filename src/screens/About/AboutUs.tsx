import './AboutUs.css'

interface AboutUsProps {
  isOpen: boolean
  onClose: () => void
}

function AboutUs({ isOpen, onClose }: AboutUsProps) {
  if (!isOpen) return null

  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title">We're <span className="isRegularitalic">Aarohan</span></h2>
            <p className="about-tagline">Your Brand's Best Friend (With Benefits) 😎</p>
          </div>

          <div className="about-sections">
            <div className="about-section">
              <div className="section-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>To launch brands into the stratosphere and make them impossible to ignore. We turn wallflowers into showstoppers, one campaign at a time.</p>
            </div>

            <div className="about-section">
              <div className="section-icon">💡</div>
              <h3>What Makes Us Different</h3>
              <p>We don't just think outside the box - we set it on fire and dance around it. Our strategies are bold, our results are bolder, and our coffee is the boldest.</p>
            </div>

            <div className="about-section">
              <div className="section-icon">🎯</div>
              <h3>Our Approach</h3>
              <p>Data-driven creativity meets gut instinct. We analyze, strategize, then surprise. Your competitors won't know what hit them (spoiler: it was us).</p>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <div className="stat-emoji">🏆</div>
                <div className="stat-value">50+</div>
                <div className="stat-label">Happy Brands</div>
              </div>
              <div className="about-stat">
                <div className="stat-emoji">☕</div>
                <div className="stat-value">∞</div>
                <div className="stat-label">Cups of Coffee</div>
              </div>
              <div className="about-stat">
                <div className="stat-emoji">💪</div>
                <div className="stat-value">24/7</div>
                <div className="stat-label">Hustle Mode</div>
              </div>
            </div>

            <div className="about-cta">
              <h3>Ready to Write History Together?</h3>
              <p>Let's create something legendary. Your brand deserves to be unforgettable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs