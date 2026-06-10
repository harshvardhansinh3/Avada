import React, { useState, useEffect } from "react";
import logo from "../assets/Avada-logo.png";
import star from "../assets/star.gif";
import { Link } from "react-router-dom";

export const Navbar = ({ scrollToSection, refs }) => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navButton = {
    backgroundColor: "transparent",
    border: "none",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <section>
      {/* NAVBAR TOP */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: isMobile ? "20px" : "30px 150px",
        }}
      >
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: "200px",
            width: isMobile ? "150px" : "200px",
           }} />
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button style={navButton}>Avada</button>

            <div style={{ position: "relative" }}>
              <button
                style={navButton}
                onClick={() => setOpen(!open)}
              >
                Avada For ▼
              </button>

              {open && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: 0,
                    width: "350px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    padding: "10px",
                  }}
                >
                  <div
                    onClick={() => scrollToSection(refs.beginnerRef)}
                    style={{
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      backgroundColor: "#82ea9f",
                      cursor: "pointer",
                    }}
                  >
                    <h3>Beginners</h3>
                    <p>Create your own site easily</p>
                  </div>

                  <div
                    onClick={() => scrollToSection(refs.beginnerRef)}
                    style={{
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      backgroundColor: "#eacd82",
                      cursor: "pointer",
                    }}
                  >
                    <h3>Marketers</h3>
                    <p>Grow your business fast</p>
                  </div>

                  <div
                    onClick={() => scrollToSection(refs.beginnerRef)}
                    style={{
                      padding: "20px",
                      borderRadius: "8px",
                      backgroundColor: "#82cbea",
                      cursor: "pointer",
                    }}
                  >
                    <h3>Professionals</h3>
                    <p>Optimize your workflow</p>
                  </div>
                </div>
              )}
            </div>

            <button style={navButton}>Hosting</button>
            <button style={navButton}>Customization</button>
            <button style={navButton}>Resources</button>
          </div>
        )}

        {/* RIGHT BUTTON (DESKTOP ONLY) */}
        {!isMobile && (
          <div style={{ position: "relative" }}>
            <img
              src={star}
              alt="star"
              style={{
                position: "absolute",
                width: "35px",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            <button
              style={{
                border: "2px solid #000",
                backgroundColor: "transparent",
                padding: "10px 20px 10px 50px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              My Avada
            </button>
          </div>
        )}

        {/* HAMBURGER (MOBILE ONLY) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "15px",
            backgroundColor: "#f5f5f5",
            margin: "10px",
            borderRadius: "10px",
            textAlign: "center",
            width:"300px",
          }}
        >
          <button style={navButton}>Avada</button>

            <div style={{ position: "relative" }}>
              <button
                style={navButton}
                onClick={() => setOpen(!open)}
              >
                Avada For ▼
              </button>

              {open && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: 0,
                    width: "200px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    padding: "10px",
                  }}
                >
                  <div
                    onClick={() => scrollToSection(refs.beginnerRef)}
                    style={{
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      backgroundColor: "#82ea9f",
                      cursor: "pointer",
                      
                    }}
                  >
                    <h3>Beginners</h3>
                    <p>Create your own site easily</p>
                  </div>

                  <div
                    onClick={() => scrollToSection(refs.beginnerRef)}
                    style={{
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      backgroundColor: "#eacd82",
                      cursor: "pointer",
                    }}
                  >
                    <h3>Marketers</h3>
                    <p>Grow your business fast</p>
                  </div>

                  <div
                    onClick={() => scrollToSection(refs.beginnerRef)}
                    style={{
                      padding: "20px",
                      borderRadius: "8px",
                      backgroundColor: "#82cbea",
                      cursor: "pointer",
                    }}
                  >
                    <h3>Professionals</h3>
                    <p>Optimize your workflow</p>
                  </div>
                </div>
              )}
            </div>

            <button style={navButton}>Hosting</button>
            <button style={navButton}>Customization</button>
            <button style={navButton}>Resources</button>
          

          <div style={{ position: "relative" }}>
            <img
              src={star}
              alt="star"
              style={{
                position: "absolute",
                width: "35px",
                left: "10px",
                // top: "50%",
                marginTop:"5px",
                transform: "translateX(180%)",
              }}
            />

            <button
              style={{
                border: "2px solid #000",
                backgroundColor: "transparent",
                padding: "10px 20px 10px 50px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              My Avada
            </button>
          </div>
          
        </div>
      )}
    </section>
  );
};