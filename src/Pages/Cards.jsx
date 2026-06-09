import React, { useState } from "react";
import card1 from "../assets/card1.png";
import card002 from "../assets/card2.png";
import card003 from "../assets/card3.png";
import card004 from "../assets/card4.png";
import card005 from "../assets/card5.png";
import card006 from "../assets/card6.png";
import card007 from "../assets/card7.png";
import card008 from "../assets/card8.png";
import card009 from "../assets/card9.png";
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon4.png';
import icon4 from '../assets/icon6.png';
import { Link } from "react-router-dom";

import avadashortlogo from '../assets/avadashortlogo.png'
import { CardsFile } from "./CardsFile";


export const Cards = () => {
  const [activeImage, setActiveImage] = useState(card1);

  const buttonStyle = {
    padding: "10px 30px",
    border: "none",
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    fontWeight: "bold",
    margin: "10px",
    width: "250px",
    fontSize:'18px',
    marginRight:"10px",
    cursor: "pointer",
  };

  return (
    <section>
      <div>
        <div
          style={{
            padding: "80px 150px ",
          }}
        >

          
          <div
            style={{
              textAlign: "center",
              lineHeight:1.8,

            }}
          >

              <img src={avadashortlogo  } alt="photo" style={{
                        width:"100px"
                      }} />

            <h1 style={{
                        fontSize:"55px"
                      }}>Design Anything, Build Everything</h1>

            <p style={{
                        fontSize:"22px"
                      }}>
              Design and launch your website fast & no coding knowledge is
              required.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "100px",  
              marginTop: "50px",
              paddingLeft:"50px"
            }}
          >
            {/* Buttons */}
            <div style={{ 
              width:"200px"
             }}>
              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card1)}
              >
                Live Visual Builder
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card002)}
              >
                Layout Builder
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card003)}
              >
                Header Builder
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card004)}
              >
                Mega Menu
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card005)}
              >
                Footer Builder
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card006)}
              >
                Form Builder
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card007)}
              >
                Off Canvas
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card008)}
              >
                Set Up Wizard
              </button>

              <button
                style={buttonStyle}
                onClick={() => setActiveImage(card009)}
              >
                Performance Wizard
              </button>
            </div>

            {/* Image */}
            <div>
              <img
                src={activeImage}
                alt="Selected Card"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  borderRadius: "10px",
                  paddingTop:"30px"
                }}
              />
            </div>
          </div>
        </div>
      </div>












                {/* all  In one wesites builder cards */}



                  <div style={{
                    padding: "80px 150px 0  150px ",
                    textAlign:"center"
                  }}>

                    <div >
                      <h1 style={{
                        fontSize:"55px"
                      }}>All-In-One Website Builder</h1><br />

                      <p  style={{
                        fontSize:"22px"
                      }}>Design And Build World-Class Professional Websites With Ease.</p>
                    </div>


                  </div>


                      <CardsFile/>
                      <div style={{
                         textAlign:"center",
                        //  marginBottom:"80px",
                         borderBottom:"2px solid #ddd ",
                         paddingBottom:"30px"
                      }}>   


                        <Link to='/explore'>

                      <button style={{
                        color:"#fff",
                        backgroundColor:"#000000",
                        padding:"15px 25px",
                        borderRadius:"5px",
                        border:"none",
                        fontWeight:"bold",
                        
                      }}>Discover More</button>

                      </Link>
                      
 
                      </ div>
 
 
 


                               {/* Trust in the avada */}



 
                      <div style={{
                        textAlign:"center",
                        padding:"80px 150px "
                      }}>


                        <h1 style={{fontSize:"55px"}}>1,063,585 Websites Owners <br />
                        Trust AVADA
                        </h1><br />

                        <p style={{fontSize:"22px"}}>The #1 selling Websites Builder on ThemeForest for 13+ years.</p>



                          <div style={{
                            padding:"30px 150px",
                            display:"flex",
                            gap:"50px",
                            lineHeight:1.5,
                            marginTop:"20px",
                          }}>
                            <span>
                              <img src={icon1} alt="icon" />
                              <h3 style={{paddingBottom:"10px"}}>World-Class Support</h3>
                              
                              <p>We build long-term professional relationships with our customers that you can rely on & trust.</p>
                            </span>

                            <span>
                              <img src={icon2 } alt="icon" />

                                <h3 style={{paddingBottom:"10px"}}> Documentation & Tutorials</h3>

                                <p>Over 550 help files & 200 tutorial videos will make building websites with Avada even easier. </p>


                            </span>

                            <span>
                              <img src={icon3 } alt="icon" />

                                <h3 style={{paddingBottom:"10px"}}> 100% Built In-House</h3>

                                <p>Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience. </p>


                            </span>

                            <span>
                              <img src={icon4 } alt="icon" />

                                <h3 style={{paddingBottom:"10px"}}>Free Lifetime Updates </h3>

                                <p>Your website will receive free & regular updates, compatible with industry standards & trends, for life. </p>


                            </span>


                          </div>

                      </div>


    </section>


                



  );
};