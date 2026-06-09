import React from 'react'
import { Navbar } from './Navbar'
import photo12 from '../assets/photo12.png'
import photo14 from '../assets/photo13.png'
import photo13 from '../assets/photo14.png'


export const Explore = () => {
  return (
    <section>
        < Navbar/>
        




                {/* first section */}

            <div style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"50px 150px",
                backgroundColor:"#d6c85c"
            }}>
                    <div>

                <img src={photo12   } alt="photo" style={{
                    width:"500px",
                }} />

                </div>

                <div style={{
                    lineHeight:"1.8",
                    paddingTop:"50px",
                    marginLeft:"50px",
                }}>
                    <h1 style={{
                        fontSize:"45px"
                    }}>Avada Websites Builder</h1>

                    <p style={{
                        fontSize:"18px"
                    }}> Avada is a feature-rich Website Builder for WordPress used daily by beginners, marketers, and professionals. We are proud that Avada is 100% developed and maintained in-house by our team and not reliant on third-party tools and plugins. With Avada, you will work faster and smarter.</p>
                
                
                <button style={{
                        fontSize:"18px",
                        padding:'15px 25px',
                        borderRadius:"5px",
                        border:'none',
                        backgroundColor:"#000000",
                        color:"#fff",
                        fontWeight:"bold",
                        marginTop:"30px",
                    }}>Explore Video</button>
                
                </div>


            </div>


                    {/* second section */}


            <div style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"50px 150px",
                // backgroundColor:"#d6c85c"
            }}>
                    

                <div style={{
                    lineHeight:"1.8",
                    paddingTop:"50px",
                    marginLeft:"50px",
                }}>
                    <h1 style={{
                        fontSize:"45px"
                    }}>Build Stunning Layouts</h1>

                    <p style={{
                        fontSize:"18px"
                    }}> 

                        More than just a Website Builder, Avada is a set of intuitive workflow tools that gives you complete creative control and gives you the confidence to design and build websites like a professional.


                        </p>
                
                
                <button style={{
                        fontSize:"18px",
                        padding:'15px 25px',
                        borderRadius:"5px",
                        border:'none',
                        backgroundColor:"#000000",
                        color:"#fff",
                        fontWeight:"bold",
                        marginTop:"30px",
                    }}>Explore Video</button>
                
                </div>

                <div>

                <img src={photo13   } alt="photo" style={{
                    width:"500px",
                    height:"400px"
                }} />

                </div>


            </div>
            
            
            {/* third section */}
            
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"50px 150px",
                // backgroundColor:"#d6c85c"
            }}>
                    <div>

                <img src={photo14   } alt="photo" style={{
                    width:"500px",
                }} />

                </div>

                <div style={{
                    lineHeight:"1.8",
                    paddingTop:"50px",
                    marginLeft:"50px",
                }}>
                    <h1 style={{
                        fontSize:"45px"
                    }}>
                        Live Visual Builder
                        </h1>

                    <p style={{
                        fontSize:"18px"
                    }}> 

                        Using Avada’s Live Builder, you’ll see changes as you make them, providing an intuitive and efficient way to build your website allowing for quick adjustments and accurate design decisions.

                        </p>
                
                
                <button style={{
                        fontSize:"18px",
                        padding:'15px 25px',
                        borderRadius:"5px",
                        border:'none',
                        backgroundColor:"#000000",
                        color:"#fff",
                        fontWeight:"bold",
                        marginTop:"30px",
                    }}>Explore Video</button>
                
                </div>


            </div>



    </section>


    
)
}
