import { useState } from "react"
const Home = () => {
   const [seaSon, setSeason] = useState("winter")
    return (
        <section className="home" id="home">

            <div className="flex">
                <div className={seaSon} id ="home-background"  >
                    <div className="text">
                        <div>Hello, I’m  <span>Noémie Pham</span> </div>
                        <div>Front-end web developer </div>
                    </div>
                    <div className="viewbox" >
                        <a href="#about">cc</a>
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v13M5 12l7 7 7-7" /></svg>
                    </div>
                    <div className="button-icon">
                        <button  onClick={()=> { 
                
                            if (seaSon === 'spring') {
              
                                setSeason('summer')
                            }else if (seaSon==='summer') {
                       
                                setSeason('autumn')

                            }else if (seaSon==='autumn') {

                                setSeason('winter')
                            } else {setSeason('spring')}
                                

                        } }>
                           
                            Click Here
                        </button>


                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home