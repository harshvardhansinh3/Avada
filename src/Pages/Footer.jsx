import React, { useState } from 'react'
import logo from '../assets/Avada-logo.png'
import footerimg from '../assets/card10.jpg'

export const Footer = () => {

  const [formData, setFormData] = useState({
    email:'',
  });

  
  const handleChange = (e) =>  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Form Data : ",formData );

    setFormData({
    email:'',
  });


  alert("Form Submited Successfully!")
  };

  return (
    <section>



      <div style={{
        position:'absolute',
        margin:"100px 150px 20px 150px ",
        backgroundColor:"#89c47d",
        // transition:"50%",
        padding:"100px 100px ",
        borderRadius:"10px",
        // marginBottom:"5000px",
        border:"none",
        display:"flex",
        transform:"translateY(-110%)",
        justifyContent:"space-between",
        zIndex:"1000",

      }}>

        <div>
          <h1 style={{
            lineHeight:1.4
          }}>Build Successfull <br /> Websites with Avada </h1> 

          <p style={{
            lineHeight:1.5,
            marginTop:"10px"
          }}>Wheather you are a bigginer, marketer, or professionals,<br />
          Avada has the tools & Resources you can rely on  to succeed.</p>


          <a href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226/?aid=ThemeFusion&aso=home&aca=item&irgwc=1&afsrc=1&clickid=S5Cw3H3QjxyZRDw3g9WSHSiuUkuWfN0EDza6yo0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius">
                

          <button style={{
            padding:"15px 30px",
            border:"none",
            marginTop:"50px",
            borderRadius:"10px",
            fontWeight:"bold",
            fontSize:"22px",
            backgroundColor:"#000000",
            color:"#fff"
            
          }}>Buy Avada For $60</button>
          </a>



        </div>

        <div>
          <img src={footerimg } alt="footerimg" style={{
            width:"600px",
            height:"400px",
            borderRadius:"10px"
          }} />
        </div>

      </div>





      {/* footer */}

      <div style={{
        padding:"100px 150px 10px 150px",
        backgroundColor:"#000000",
        position:'relative',
        marginTop:"600px"

       
        
      }}>


          {/* top bar of footer */}


          <div style={{
            display:"flex",
            justifyContent:"space-between",
             borderBottom:"2px solid #aeaeae",
             paddingBottom:"50px"
            
          }}>


            <div>
                <img src={logo} alt="logo" />
            </div>

            <div style={{
              fontWeight:'bold',
              lineHeight:1.8,
              color:"#fff"
            }}>

              <p>Help Center</p>
              <p> Avada Studio </p>
              <p> Prebuilts Websites </p>
              <p> Reviews </p>
              <p> Submit A Ticket    </p>
              

            </div>


            <div style={{
              fontWeight:'bold',
              lineHeight:1.8,
              color:"#fff"
            }}>

                <p> About Us </p>
                <p> Careers </p>
                <p> Support Policy </p>
                <p> Terms And Condition </p>
                <p> Privacy Policy  </p>
               


            </div>

            <div style={{
              fontWeight:'bold',
              lineHeight:1.8,
              color:"#fff"
            }}>

              <p>Sign up to our newsletter and get all of the <br /> latest news and updates.</p>
              


              <form onSubmit={handleSubmit}>
                
                <input type="email"
                name='email'
                placeholder='Enter your email'
                onChange={handleChange}

                style={{
                  padding:"20px 100px 20px 10px",
                  position:'relative',
                  marginTop:"10px",
                  width:"100%",
                  outline:'none',
                   borderRadius:"3px",
                  border:"none  ",
                   
                }}
                />

                <button
                 type='submit'
                 style={{
                  transition:"50%",
                  position:'absolute',
                  marginTop:"10px",
                  fontWeight:"bold",
                  marginLeft:"20px",
                  padding:"10px 20px",
                  borderRadius:"5px",
                  margin:"20px 20px 10px 0",
                  transform:"translateX(-115%)",
                  border:"none  ",
                  color:"#fff",
                  backgroundColor:"#000000"
                  
                }}
                 >Subscribe</button>

              </form>


              {/* <div>
                <input type="email" 
                placeholder='Your Email'
                style={{
                  padding:"10px 20px",
                  position:'relative',
                  marginTop:"10px",
                   borderRadius:"3px",
                  border:"none  ",
                   
                }} />


                

                <button style={{
                  transition:"50%",
                  position:'absolute',
                  marginTop:"10px",
                  fontWeight:"bold",
                  marginLeft:"20px",
                  padding:"10px 20px",
                  borderRadius:"30px",
                  border:"none  ",
                  backgroundColor:"#fff"
                  
                }}>
                  Submit
                </button>
              </div> */}

              
              
                </div>




          </div>


          {/* bottom bar of the footer */}

          <div style={{
            color:"white",
            marginTop:"10px",
            fontSize:"14px",
          }}>

                  <p>© Copyright 2012 - 2026 • Avada is a Website Builder for WordPress and eCommerce • All Rights Reserved • Developed by ThemeFusion</p>


          </div>

      </div>




    </section>
  )
}
