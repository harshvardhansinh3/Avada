import React, { useState } from "react";
import logo from "../assets/Avada-logo.png";
import star from "../assets/star.gif";
import { Link } from "react-router-dom";

export const Navbar = ({ scrollToSection, refs }) => {
  const [open, setOpen] = useState(false);

  const navButton = {
    backgroundColor: "transparent",
    border: "none",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "30px 150px",
        }}
      >
        {/* Logo */}
        <div>

          <Link to='/' >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "200px",
            }}
            />
            
            
            </Link>
        </div>

        {/* Middle Nav */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            position: "relative",
          }}
        >
          <button style={navButton}>Avada</button>

          {/* Dropdown Button */}
          <div style={{ position: "relative" }}>
            <button
              style={navButton}
              onClick={() => setOpen(!open)  }
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
                  // onClick={}
                  onClick={() => scrollToSection(refs.beginnerRef)}
                  style={{
                    padding: "20px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    backgroundColor: "#82ea9f",
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
                  }}
                >
                  <h3>Professionals</h3>
                  <p>Optimize your project workflow</p>
                </div>
              </div>
            )}
          </div>

          <button style={navButton}>Hosting</button>
          <button style={navButton}>Customization</button>
          <button style={navButton}>Resources</button>
        </div>

        {/* Right Side */}
        <div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
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
        </div>
      </div>
    </section>
  );
};