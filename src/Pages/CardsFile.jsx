import React, {useState, useEffect} from 'react'
import { CardsData } from './CardsData.js'

export const CardsFile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
  style={{
   display: "flex",
    gap: isMobile ? "20px" : "50px",
    margin: isMobile ? "0" : "80px auto",
    padding: isMobile ? "0 0" : "0 50px",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: isMobile ? "nowrap" : "wrap",
    justifyContent: "center",
    alignItems: "center",
  }}
>
      

        {CardsData.map((card)=>(

          
          <div 
          key={card.id}
          style={{
            width: isMobile ? "100%" : "320px",
            position:"relative",
            // border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            padding: "15px",
            textAlign:"center"
          }}
          >

              <img src={card.image} alt={card.title} 
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius:"10px",
                marginBottom:"20px"
              }}
              />
              <br />

              

             
              <h3>{card.title}</h3>

          <p style={{
            lineHeight:1.5
          }}>{card.description}</p>
          </div>
      )
       )}

       

       


    </div>

    
  )
}
