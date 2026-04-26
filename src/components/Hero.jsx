import "./Hero.css";
import { CONTACT_INFO } from "../constants/config";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background Aurora / Abstract Shapes */}
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-icon">🌿</span>
          <span className="badge-text">
            Confidential &bull; Evidence-Based Care
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Take the First Step Toward <br />
          <span className="highlight-text">Better Mental Health 🧠</span>
        </h1>

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

        {/* CTA */}
        <div class="hero-cta-group">
          <div class="bento-cta">
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-main"
            >
              <div class="bento-icon-box">🗓️</div>
              <div class="bento-text-group">
                <div class="bento-title">Book a Session</div>
                <div class="bento-sub">Schedule in 60 seconds</div>
              </div>
              <div class="bento-arrow">↗</div>
            </a>

            <div class="bento-side">
              <div class="bento-chip chip-available">
                <span class="chip-dot cd-green"></span>
                Available today
              </div>
              <div class="bento-chip chip-private">
                <span class="chip-dot cd-blue"></span>
                Confidential
              </div>
            </div>
          </div>

          <div class="hero-reassurance">
            <span class="reassurance-dot"></span>
            <span>Seeking help is a sign of strength</span>
            <span class="reassurance-sparkle">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
