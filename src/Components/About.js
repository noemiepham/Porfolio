
const About = () => {
    /*  const [Showtext, setShowtext] = useState("hide") */
    return (
        <article>

            <section className="About" id="about">

                <h1 className="style-generale">
                    ABOUT
                </h1>
                <div className="circle-flex">
                    <div className="bloc-circle">
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

            </section>
            <section className="Skills" id = "skills">
               {/*  <h1 className="style-generale ">
                     SKILLS
                </h1> */}
                <div className="content-skill">
                        <div className="skill-left">
                                <div className="photo-cv">
                                    <img  className="rotate" src={"https://res.cloudinary.com/dkcx8d2bi/image/upload/v1625606205/IMG_9227_ubxc5a.jpg"}/>
                                    <img className="me"  src ={"https://res.cloudinary.com/dkcx8d2bi/image/upload/v1625606350/skillbacground-circle_tcyil8.png"}/>
                                </div>
                                <button><a href="./CV_E03.docx" download>Download my CV </a></button>
                                
                        </div>
                        <div className="skill-right">
                            <p id="HTML">HTML</p>
                            <p id="css">CSS</p>
                            <p id="bootstrap">BOOTSTRAP</p>
                            <p id="javascrip">JAVASCRIP</p>
                            <p id="react">REACT</p>
                            <p id="photoshop">PHOTOSHOP-FIGMA</p>
                            <p id="videopro">PREMIER VIDEO PRO</p>
                        </div>
                </div>
        </section>
        </article>

    )
}
export default About