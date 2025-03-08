import React, { useState } from "react";

const LandingPage = () => {
  const [isHovering, setIsHovering] = useState({
    cta: false,
    card1: false,
    card2: false,
    card3: false
  });

  return (
    <div style={styles.landingContainer}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>CallMonitor</div>
        <div style={styles.navLinks}>
          
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Call Center <span style={styles.highlight}>Supervisor</span> Agent</h1>
          <p style={styles.heroText}>
            AI-powered real-time monitoring and evaluation of customer interactions.
            Improve agent performance and customer satisfaction with instant feedback.
          </p>
          <button
            style={{
              ...styles.ctaButton,
              backgroundColor: isHovering.cta ? styles.ctaButtonHover.backgroundColor : styles.ctaButton.backgroundColor,
              transform: isHovering.cta ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setIsHovering({...isHovering, cta: true})}
            onMouseLeave={() => setIsHovering({...isHovering, cta: false})}
          >
            Get Started
          </button>
        </div>
        <div style={styles.heroGraphic}>
          {/* SVG or abstract graphic could go here */}
          <div style={styles.graphicCircle}></div>
          <div style={styles.graphicRect}></div>
        </div>
      </header>

      {/* Feature Section */}
      <section id="features" style={styles.features}>
        <h2 style={styles.sectionTitle}>Powerful Features</h2>
        <div style={styles.featureContainer}>
          <div
            style={{
              ...styles.featureCard,
              transform: isHovering.card1 ? styles.featureCardHover.transform : 'none'
            }}
            onMouseEnter={() => setIsHovering({...isHovering, card1: true})}
            onMouseLeave={() => setIsHovering({...isHovering, card1: false})}
          >
            <div style={styles.featureIcon}>
              <div style={styles.featureIconCircle}>📊</div>
            </div>
            <h3 style={styles.featureCardTitle}>Real-time Analysis</h3>
            <p style={styles.featureCardText}>
              Monitor agent interactions instantly to improve efficiency and response quality.
              Get alerts when conversations need attention.
            </p>
          </div>
          <div
            style={{
              ...styles.featureCard,
              transform: isHovering.card2 ? styles.featureCardHover.transform : 'none'
            }}
            onMouseEnter={() => setIsHovering({...isHovering, card2: true})}
            onMouseLeave={() => setIsHovering({...isHovering, card2: false})}
          >
            <div style={styles.featureIcon}>
              <div style={styles.featureIconCircle}>✓</div>
            </div>
            <h3 style={styles.featureCardTitle}>Quality Checks</h3>
            <p style={styles.featureCardText}>
              Flag incorrect or out-of-scope responses automatically.
              Ensure compliance with company policies and procedures.
            </p>
          </div>
          <div
            style={{
              ...styles.featureCard,
              transform: isHovering.card3 ? styles.featureCardHover.transform : 'none'
            }}
            onMouseEnter={() => setIsHovering({...isHovering, card3: true})}
            onMouseLeave={() => setIsHovering({...isHovering, card3: false})}
          >
            <div style={styles.featureIcon}>
              <div style={styles.featureIconCircle}>😊</div>
            </div>
            <h3 style={styles.featureCardTitle}>Sentiment Analysis</h3>
            <p style={styles.featureCardText}>
              Detect customer emotions and improve responses accordingly.
              Identify patterns that lead to positive outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={styles.testimonial}>
        <blockquote style={styles.quote}>
          some random quote
        </blockquote>
        <p style={styles.attribution}>— Sarah Johnson, Director of Customer Service</p>
      </section>

      {/* Call to Action */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to transform your call center?</h2>
        <p style={styles.ctaText}>Join hundreds of companies improving their customer service with AI</p>
        <button
          style={{
            ...styles.ctaButtonLarge,
            backgroundColor: isHovering.cta ? styles.ctaButtonHover.backgroundColor : styles.ctaButton.backgroundColor,
            transform: isHovering.cta ? 'scale(1.05)' : 'scale(1)'
          }}
          onMouseEnter={() => setIsHovering({...isHovering, cta: true})}
          onMouseLeave={() => setIsHovering({...isHovering, cta: false})}
        >
          Schedule a Demo
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>CallMonitor</div>
          <div style={styles.footerLinks}>
            <div style={styles.footerColumn}>
              <h4 style={styles.footerHeading}>Product</h4>
              <a href="#" style={styles.footerLink}>Features</a>
              <a href="#" style={styles.footerLink}>Pricing</a>
              <a href="#" style={styles.footerLink}>Integrations</a>
            </div>
            <div style={styles.footerColumn}>
              <h4 style={styles.footerHeading}>Resources</h4>
              <a href="#" style={styles.footerLink}>Documentation</a>
              <a href="#" style={styles.footerLink}>Blog</a>
              <a href="#" style={styles.footerLink}>Guides</a>
            </div>
            <div style={styles.footerColumn}>
              <h4 style={styles.footerHeading}>Company</h4>
              <a href="#" style={styles.footerLink}>About Us</a>
              <a href="#" style={styles.footerLink}>Careers</a>
              <a href="#" style={styles.footerLink}>Contact</a>
            </div>
          </div>
        </div>
        <div style={styles.copyright}>
          © {new Date().getFullYear()} CallMonitor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const styles = {
  landingContainer: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: "#e0e6f0",
    backgroundColor: "#0a192f",
    minHeight: "100vh",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 5%",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "sticky",
    top: 0,
    backgroundColor: "rgba(10, 25, 47, 0.95)",
    backdropFilter: "blur(10px)",
    zIndex: 100,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#64ffda",
  },
  navLinks: {
    display: "flex",
    gap: "30px",
  },
  navLink: {
    color: "#ccd6f6",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    transition: "color 0.2s ease",
    ':hover': {
      color: "#64ffda"
    }
  },
  hero: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 5%",
    minHeight: "70vh",
    background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    maxWidth: "600px",
    textAlign: "left",
    zIndex: 2,
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#ccd6f6",
    lineHeight: 1.2,
  },
  highlight: {
    color: "#64ffda",
  },
  heroText: {
    fontSize: "18px",
    lineHeight: 1.7,
    marginBottom: "30px",
    color: "#8892b0",
  },
  ctaButton: {
    backgroundColor: "#64ffda",
    color: "#0a192f",
    padding: "14px 32px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0px 5px 15px rgba(100, 255, 218, 0.15)",
    transition: "all 0.3s ease",
    outline: "none",
  },
  ctaButtonLarge: {
    backgroundColor: "#64ffda",
    color: "#0a192f",
    padding: "16px 40px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0px 5px 15px rgba(100, 255, 218, 0.2)",
    transition: "all 0.3s ease",
    outline: "none",
  },
  ctaButtonHover: {
    backgroundColor: "#72ffdf",
  },
  heroGraphic: {
    position: "relative",
    width: "400px",
    height: "400px",
  },
  graphicCircle: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, rgba(10, 25, 47, 0) 70%)",
    top: "50px",
    left: "50px",
    zIndex: 1,
    animation: "pulse 4s infinite ease-in-out",
  },
  graphicRect: {
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "2px solid rgba(100, 255, 218, 0.2)",
    top: "100px",
    left: "100px",
    zIndex: 1,
    animation: "rotate 10s infinite linear",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#ccd6f6",
    textAlign: "center",
  },
  features: {
    padding: "100px 5%",
    backgroundColor: "#112240",
  },
  featureContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  featureCard: {
    backgroundColor: "#1d3557",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    width: "300px",
    textAlign: "center",
    transition: "all 0.3s ease",
    border: "1px solid rgba(100, 255, 218, 0.1)",
  },
  featureCardHover: {
    transform: "translateY(-10px)",
  },
  featureIcon: {
    marginBottom: "20px",
  },
  featureIconCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "rgba(100, 255, 218, 0.1)",
    margin: "0 auto",
    fontSize: "24px",
  },
  featureCardTitle: {
    color: "#64ffda",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  featureCardText: {
    fontSize: "16px",
    color: "#a8b2d1",
    lineHeight: 1.6,
  },
  testimonial: {
    padding: "100px 5%",
    textAlign: "center",
    backgroundColor: "#0a192f",
  },
  quote: {
    fontSize: "24px",
    fontStyle: "italic",
    maxWidth: "800px",
    margin: "0 auto 20px",
    color: "#ccd6f6",
    lineHeight: 1.6,
  },
  attribution: {
    color: "#64ffda",
    fontSize: "18px",
  },
  cta: {
    padding: "80px 5%",
    textAlign: "center",
    backgroundColor: "#112240",
    borderTop: "1px solid rgba(100, 255, 218, 0.1)",
    borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
  },
  ctaTitle: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#ccd6f6",
  },
  ctaText: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#8892b0",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  footer: {
    padding: "60px 5% 20px",
    backgroundColor: "#0a192f",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  footerLogo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#64ffda",
    marginBottom: "20px",
  },
  footerLinks: {
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
  },
  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footerHeading: {
    color: "#ccd6f6",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  footerLink: {
    color: "#8892b0",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.2s ease",
    ':hover': {
      color: "#64ffda"
    }
  },
  copyright: {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "20px",
    fontSize: "14px",
    color: "#8892b0",
    textAlign: "center",
  },
};

export default LandingPage;