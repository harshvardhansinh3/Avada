import React, {useState, useEffect} from 'react'
import photo2 from '../assets/photo2.jpg'
import squarebird from '../assets/squarebird.png'

export const FAQ = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const faq=[
    {
      que:"Are there any recurring license fees?",
      ans:"No, Avada is available with a one-time purchase fee. Additional services or third-party tools may have separate costs."
    },
    {
      que:'Are Avada Studio items and prebuilt websites customizable?',
      ans:'Yes, each Avada Studio item and each prebuilt website is 100% customizable. All items and prebuilt websites are professionally designed by our in-house design team, created to showcase Avada’s capabilities and save you time.  Once you import an Avada Studio item or a website, you can entirely customize the content and layouts to your liking. Add/remove/adjust/customize the imagery, text, styling, layouts, and more using the Avada Website Builder.'
    },
    {
      que:'Where can I get Avada support?',
      ans:'In addition to an extensive library of detailed documentation and Avada video tutorials, our professional team of Avada support experts offers hands-on support for all aspects of Avada.'

    },
    {
      que:'What is included with my purchase of Avada?',
      ans:'With your purchase of Avada, you will receive:  6 Months of world-class hands-on Avada support. The valid support period starts from the date and time of purchase. Support can be renewed/extended if additional support is required down the line.  A dedicated My Avada account to manage your licenses, staging sites, bug reports, plugins, and more.The option to register a single staging/dev/local site per top-level domain based on these predefined patterns.6 Bundled premium plugins. 110+ Prebuilt Avada websites that can be imported with a few clicks, and all of which are 100% customizable.  Access to prebuilt Avada Studio creative content. There are 600+ content blocks that can be imported with a click and are 100% customizable.120+ Avada Design and Layout Elements.Access to the Avada Help Center, which includes 550+ detailed help files expertly curated to provide you with cutting-edge, up-to-date information to make your Avada website-building journey even easier.Access to 300+ Avada video tutorials, with new videos, expertly curated to provide you with guidance on how to get the best out of Avada and WordPress.Free regular updates for Avada for the lifetime of your license. Software updates are extensive, thoroughly tested, and consistent, as shown in the detailed Avada changelog.Avada maintenance patches. The built-in Avada Patcher tool is seamless, allowing our development team to push improvements and fixes to all Avada installations without requiring a full update.Avada works seamlessly in design and is integrated with popular plugins, including WooCommerce, Yoast SEO, The Events Calendar, bbPress, HubSpot, and more.And so much more…'
    }
  ];

  return (
    <section>

      <div style={{
        display:'flex',
        flexDirection: isMobile ? "column" : "row",
        // justifyContent:'space-between',
      }}>

        <div>
          <img src={photo2  } alt="photo"  style={{
            width: isMobile ? "100%" : "700px",
            height: "auto",
            // borderRadius:"110px",
            // margin:"50px 0 50px 0",
            // height:'500px'

          }}/>

        </div>

        <div style={{
          backgroundColor:"#dcce34",
          padding: isMobile ? " 20px" : "80px ",
        }}>

          <p style={{
            padding:"10px",
            lineHeight:1.5,
            fontSize: isMobile ? "16px" : "22px",
            paddingBottom:"50px",
            marginBottom:"20px",
            borderBottom:"2px solid #8f8f8f"
          }}>“We choose to specialise in Avada because it is both functional and practical, and our clients simply love it! It has stood the test of time and continues to evolve – an excellent solution for our talented design team, who continue to push the boundaries.”</p>


            <div style={{
              display:"flex",
              gap:"10px",
            }}>



            <img src={squarebird  } alt="sqaure Bird" style={{
              width:"40px"
            }}/>
            
            <p style={{
              paddingTop:"10px",
              
            }}>Square Bird </p>


            </div> 
            <a href="https://www.squarebird.co.uk"  > <u>  https://www.squarebird.co.uk</u></a>

        </div>

      </div>









              {/* FAQ Section */}


        <div>



          <div style={{
            padding: isMobile ? "20px" : "50px",
            margin:isMobile?"0":"50px 150px 20px 150px ",
            cursor:"pointer"
          }}>

            <h1 style={{
              fontSize: isMobile ? "32px" : "60px"
            }}>Frequently Asked Questions</h1>


            {faq.map((faq, index)=>(

              <details 
              key={index}
              style={{
                marginTop:"20px",
                padding:"30px",
                borderBottom:"2px solid #dedede",

                
              }}
              >

                <summary>
                    {faq.que}
                </summary>

                <p style={{
                  padding:"20px",
                  lineHeight:1.5
                }}>
                  {faq.ans}
                </p>


              </details>
          )
           )}


          </div>




        </div>


    </section>
  )
}
