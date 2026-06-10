import React , {useState, useEffect} from 'react'
import dash1 from '../assets/dash1.jpg'
import dash2 from '../assets/dash2.png'
import dash3 from '../assets/dash3.png'
import dash4 from '../assets/dash4.png'
import dash5 from '../assets/dash5.png'
import dash6 from '../assets/dash6.png'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'


export const Header = ({refs}) => {

    const [isMobile,setIsMobile] = useState(window.innerWidth <=768);

   useEffect(()=>{
    const handleResize=()=>{
        setIsMobile(window.innerWidth <=768);
    };

    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize);

   },[]);


  return (
    <section>

    <div style={{
        margin: isMobile? "20px" : "80px 100px 80px 150px",
        display:"flex",
        flexDirection: isMobile? "column":"row",
        alignItems: isMobile?"enter":"flex-start",
        gap:"40px",
        justifyContent:"space-between",
    }} >


            {/* header left side content */}


        <div style={{
            marginTop:isMobile? "20px":'100px',
        }}>

            <h1 style={{
                fontSize:isMobile? "28px":"40px",
            }}>The Ultimate</h1> <br />
            <h1 style={{
                fontSize:isMobile? "28px":"40px",
            }}>Creative </h1> <br />
            <h1 style={{
                fontSize:isMobile? "28px":"40px"
            }}>Website Builder</h1>

            <p style={{
                marginTop:"10px",
                fontSize:"20px",
                lineHeight:1.5,
                fontSize:isMobile? "16px":"20px",
                textAlign:isMobile?"center":"left",

            }}> Trusted by beginner, marketers & professionals;
                <br />Built with usability and performance in mind. 
            </p>

            <a href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226/?aid=ThemeFusion&aso=home&aca=item&irgwc=1&afsrc=1&clickid=S5Cw3H3QjxyZRDw3g9WSHSiuUkuWfIygDza6yo0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius">

            <button
            
            style={{
                padding:"10px 20px 10px 20px",
                backgroundColor:"#000000",
                color:"#fff",
                border:'none',
                borderRadius:"10px",
                fontSize:"20px",
                marginTop:"20px",

                // fontWeight:"bold",
                
            }}  >Start Designing </button>

                </a>
            <p style={{
                borderBottom:"1px solid #c2c2c2",
                marginTop:"50px",
                marginBottom:"50px",
            }}>

            </p>

            <div style={{
                display:'flex',
                justifyContent:'space-between',
                flexDirection:isMobile?"column":"row",
                gap:"20px",
                textAlign:isMobile?"center":"left",
            }}>

                <div>
                    <h1>10,50,000 +</h1>
                    <p style={{
                        marginTop:'10px',
                        paddingLeft:"10px"
                    }}>People Trust Avada</p>
                </div>

                <div>

                        <h1>26,569 +</h1>
                    <p style={{
                        marginTop:'10px',
                        paddingLeft:"5px"
                    }}>Avarage 5-Star Reviews</p>

                </div>


            </div>

            

        </div>

                    {/* header right side image */}


        <div>

           
            
            <img src={dash6} alt="photo" style={{
                width: isMobile? "100%":"800px",
                position:"relative",
                borderRadius:"10px",
            }} />
        </div>



    </div>


            {/* Three cards Below the header */}


    <div
    ref={refs.beginnerRef}
     style={{
        display:'flex',
        flexDirection:isMobile?"column":"row",
        justifyContent:'space-between',
        // gap:"20px",
        margin: isMobile? "20px" : "80px 100px 80px 150px",
    }}>


        {/* first card  */}


        <div style={{
            backgroundColor:"#f489e4",
            borderRadius:"10px",
            marginTop:isMobile? "20px":'0px',
            border:'none',
            
            width:isMobile? "100%":"400px",
            padding:"30px 40px 30px 40px",
            textAlign:"center",
            // position:"absolute",


        }}>

                <p>For Beginers</p> <br />

                    <h1 style={{
                    fontSize:isMobile? "26px":"35px",
                   }}>Lunch your first <br /> website</h1> <br />
                        <img src={photo1    } alt="photo" style={{
                            width:isMobile? "200px":"350px"
                        }} />


                        <div style={{
                            gap:'20px',
                            display:"flex",
                            alignItems:isMobile? "center":"normal",
                            marginTop:"20px",
                            justifyContent:"space-between",
                            flexDirection:isMobile?"column":"row",

                        }}>



                            <div>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ff00d9"
                    }}>Visual builder</p>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ff00d9"
                    }}>Documentation</p>


                    </div>

                        <div>


                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:isMobile? "":"10px",
                        backgroundColor:"#ff00d9"
                    }}> Support</p>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ff00d9"
                    }}> Prebuilt Websites</p>
                    </div>

                    </div>


        </div>


        {/* second card  */}


        <div style={{
            backgroundColor:"#eacd82",
            borderRadius:"10px",
                marginTop:isMobile? "20px":'0px',
            border:'none',
            width:isMobile? "100%":"400px",
            padding:"30px 40px 30px 40px",
            textAlign:"center"


        }}>
                <p>For Marketers</p> <br />
                    <h1 style={{
                    fontSize:isMobile? "26px":"35px",
                   }}>Generates Leads And <br /> Conversations</h1> <br />
                        <img src={photo2    } alt="photo" style={{
                            width:isMobile? "200px":"350px"
                        }} />


                        <div style={{
                            gap:'20px',
                            display:"flex",
                            marginTop:"20px",
                            flexDirection:isMobile?"column":"row",
                            alignItems:isMobile? "center":"normal",
                            justifyContent:"space-between",
                        }}>


                            <div>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ffb700"
                    }}>Design</p>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ffb700"
                    }}>SEO</p>


                            </div>
                        <div>


                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ffb700"
                    }}>Shop Builder</p>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#ffb700"
                    }}>Form Builder</p>

                    </div>
                    </div>


        </div>


        {/* third card  */}


        <div style={{
            backgroundColor:"#82cbea",
            borderRadius:"10px",
            width:isMobile? "100%":"400px",
            border:'none',
            marginTop:isMobile? "20px":'0px',
            padding:"30px 40px 30px 40px",
            textAlign:"center",
            


        }}>
                <p>For Professionals</p>
                   <br /> <h1 style={{
                    fontSize:isMobile? "26px":"35px",
                   }}>  Take Your Projects  <br /> To The Next Level</h1> <br />
                        <img src={photo3    } alt="photo" style={{
                            width:isMobile? "200px":"350px"
                        }} />


                        <div style={{
                            gap:'20px',
                            display:"flex",
                            flexDirection:isMobile?"column":"row",
                            marginTop:"20px",
                            alignItems:isMobile? "center":"normal",
                            justifyContent:"space-between",
                        }}>

                        <div>


                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#00b1fc"
                    }}>All-In-One</p>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#00b1fc"
                    }}>Patcher</p>

                    </div>


                        <div>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#00b1fc"
                    }}>WCGAG</p>



                    <p style={{
                        padding:"5px 10px 5px 10px",
                        borderRadius:"5px",
                        border:"none",
                        width:"150px",
                        marginTop:"10px",
                        backgroundColor:"#00b1fc"
                    }}>Dynamic Data</p>

                        </div>
                    </div>


        </div>


    </div>

    </section>
  )
}
