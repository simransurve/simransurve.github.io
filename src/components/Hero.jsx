import "./Hero.css";
import { CONTACT_INFO } from "../constants/config";
import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated Grid Background */}
      <div className="hero-grid"></div>

      {/* Background Aurora / Abstract Shapes */}
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        {/* Floating particles */}
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        {/* Premium Badge */}
        <div className="hero-badge">
          <span className="badge-glow"></span>
          <span className="badge-icon">🌿</span>
          <span className="badge-text">
            Confidential &bull; Evidence-Based Care
          </span>
          <span className="badge-shine"></span>
        </div>

        {/* Premium Title */}
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            Take the First Step Toward <br />
            <span className="highlight-text">
              <span className="highlight-inner">Better Mental Health 🧠</span>
            </span>
          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Life can feel overwhelming — and that's okay. In therapy, you'll work
          with a qualified psychologist in a safe, non-judgmental space 🛋️ to
          build emotional resilience 🌱 and create lasting change at your own
          pace.
        </p>

        {/* 3D Floating Tags */}
        <div class="hero-tags">
          <div class="orb-tag ot1">
            <div class="dot-orbit"></div>
            <div class="orb-tag-inner">
              <span class="emoji-big">🌪️</span>
              <span>Anxiety &amp; Stress</span>
            </div>
          </div>

          <div class="orb-tag ot2">
            <div class="dot-orbit"></div>
            <div class="orb-tag-inner">
              <span class="emoji-big">🤯</span>
              <span>Overthinking &amp; Burnout</span>
            </div>
          </div>

          <div class="orb-tag ot3">
            <div class="dot-orbit"></div>
            <div class="orb-tag-inner">
              <span class="emoji-big">🤝</span>
              <span>Relationship Challenges</span>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Group */}
        <div className="hero-cta-group">
          <div class="bento-cta">
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-main premium-cta"
            >
              <div className="bento-glow"></div>
              <div className="bento-icon-box">🗓️</div>
              <div className="bento-text-group">
                <div className="bento-title">Book Your Session</div>
                <div className="bento-sub">Get matched with a therapist</div>
              </div>
              <div className="bento-arrow">↗</div>
            </a>

            <div className="bento-side">
              <div className="bento-chip chip-available">
                <span className="chip-dot cd-green"></span>
                <span className="chip-label">Available Today</span>
              </div>
              <div className="bento-chip chip-private">
                <span className="chip-dot cd-blue"></span>
                <span className="chip-label">100% Confidential</span>
              </div>
            </div>
          </div>

          <div className="hero-reassurance premium-reassurance">
            <span className="reassurance-dot"></span>
            <span>💪 Seeking help is a sign of strength</span>
            <span className="reassurance-sparkle">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
