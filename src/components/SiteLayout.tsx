import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import logoImage from "../assets/blacklogo.png";
import roundLogo from "../assets/round.png";
import AboutUs from "../screens/About/AboutUs";
import Career from "../screens/Career/Career";
import { CAREER_POSITIONS } from "../data/career";

type SiteLayoutProps = {
  children: ReactNode;
  className: string;
};

type HomeSectionLinkProps = {
  sectionId: string;
  className?: string;
  children: ReactNode;
};

function scrollToSection(sectionId: string) {
  window.requestAnimationFrame(() => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function HomeSectionLink({
  sectionId,
  className,
  children,
}: HomeSectionLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const targetHash = `#${sectionId}`;

  const handleClick = () => {
    if (location.pathname === "/") {
      if (location.hash !== targetHash) {
        navigate({ pathname: "/", hash: targetHash });
      }
      scrollToSection(sectionId);
    }
  };

  return (
    <Link
      to={{ pathname: "/", hash: targetHash }}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

function SiteLayout({ children, className }: SiteLayoutProps) {
  const location = useLocation();
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const whatsappNumber = "916290717007";

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (location.hash) {
      scrollToSection(location.hash.slice(1));
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  const openWhatsApp = () => {
    const message = "Hi Aarohan! I want to discuss my marketing needs. 🚀";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={className}>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link to="/" aria-label="Aarohan home">
              <img src={logoImage} className="logoImg" alt="Aarohan logo" />
            </Link>
          </div>
          <div className="nav-links">
            <HomeSectionLink sectionId="services" className="nav-link">
              Services
            </HomeSectionLink>
            <Link to="/blog" className="nav-link">
              Blogs
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <button onClick={() => setIsAboutOpen(true)} className="nav-link">
              About
            </button>
            <button onClick={() => setIsCareerOpen(true)} className="nav-link">
              Careers
            </button>
            <button onClick={openWhatsApp} className="nav-link">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              <Link to="/" aria-label="Aarohan home">
                <img
                  src={roundLogo}
                  className="logoImg footerLogo"
                  alt="Aarohan round logo"
                />
              </Link>
            </div>
            <p>
              Launching brands into the stratosphere since day one. Your
              competitors are still looking up. 👀
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <HomeSectionLink sectionId="services">Services</HomeSectionLink>
              <Link to="/blog" className="footer-link-btn">
                Blogs
              </Link>
              <Link to="/faq" className="footer-link-btn">
                FAQ
              </Link>
              <button
                onClick={() => setIsAboutOpen(true)}
                className="footer-link-btn"
              >
                About
              </button>
              <button
                onClick={() => setIsCareerOpen(true)}
                className="footer-link-btn"
              >
                Careers
              </button>
              <button onClick={openWhatsApp} className="footer-link-btn">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Career
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        positions={CAREER_POSITIONS}
      />
      <AboutUs isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

export default SiteLayout;
