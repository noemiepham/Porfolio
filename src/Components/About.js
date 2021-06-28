/* import { useState } from 'react'; */
const About = () => {
   /*  const [Showtext, setShowtext] = useState("hide") */
    return (
        <section className="About" id="about">
            
            <h1 className ="style-generale">
                ABOUT
            </h1>
            <div  className="circle-flex">
                <div>
                <button className="circle" 
                    /* onClick={() => {
                        if (Showtext === "show") {
                            setShowtext("hide")
                        } else {
                            setShowtext("show")
                        }
                      }}*/
                    > <span>Dynamic</span></button>
                    <p className="textAbout">Websites don't have to be static, I love making pages come to life.</p>
           {/*         {
                Showtext === "show" ? <p className="textAbout">Websites don't have to be static, I love making pages come to life.</p> : null
              }  */}
                </div>
                <div>
                    <button className="circle"> <span>Teamwork</span> </button>
                 
                     <p className="textAbout">website is like sitting at home, and developers are brothers</p>

                </div>
                <div>
                    <button className="circle"> <span>Responsive</span> </button>
                    <p className="textAbout">My website is responsive to all interfaces</p>
                </div>
                <div>
                    <button className="circle"> <span>Comunication</span> </button>
                    <p className="textAbout">Good communication is the first step to the success of the website</p>
                </div>      
            </div>
            <div className="textAbout-p">
            </div>
        </section>
    )
}
export default About