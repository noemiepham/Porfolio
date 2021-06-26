import { useState } from 'react';
const About = () => {
    const [Showtext, setShowtext] = useState("hide")
    return (
        <section className="About" id="about">
            
            <h1 className ="style-generale">
                ABOUT
            </h1>
            <div  className="circle-flex">
                    <button className="circle" 
                    onClick={() => {
                        if (Showtext === "show") {
                            setShowtext("hide")
                        } else {
                            setShowtext("show")
                        }
                      }}
                    > <span>Dynamic</span></button>
                   {
                Showtext === "show" ? <p className="textAbout">Websites don't have to be static, I love making pages come to life.</p> : null
              }
                    <button className="circle"> <span>Teamwork</span> </button>
                    <button className="circle"> <span>Responsive</span> </button>
                    <button className="circle"> <span>Comunication</span> </button>
            </div>
            <div className="textAbout-p">
                 <p className="textAbout">Websites don't have to be static, I love making pages come to life.</p>
                <p className="textAbout">website is like sitting at home, and developers are brothers</p>
                <p className="textAbout">My website is responsive to all interfaces</p>
                <p className="textAbout">Good communication is the first step to the success of the website</p>
            </div>
        </section>
    )
}
export default About