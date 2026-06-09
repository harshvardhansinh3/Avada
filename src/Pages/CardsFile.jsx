import React from 'react'
import { CardsData } from './CardsData.js'

export const CardsFile = () => {
  return (
    <div style={{
      display:'flex',
      gap:'50px',
      // margin:"100px",
      padding:"30px 150px",
      flexWrap:"wrap",
      justifyContent:'center'
    }}>
      

        {CardsData.map((card)=>(

          
          <div 
          key={card.id}
          style={{
            width: "320px",
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

              

             
              <h3>{card.title}</h3><br />

          <p style={{
            lineHeight:1.5
          }}>{card.description}</p>
          </div>
      )
       )}

       

       


    </div>

    
  )
}
