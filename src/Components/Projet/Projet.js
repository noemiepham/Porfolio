import { useState } from "react"

const Projet =(props)=> {
    // const [myPath, setmyPath] = useState ("show")

    return (
     
                  <div  id ="projet">
                    <div className="projet-photo" onClick = {() => window.location.href = props.myPaths}>
                        <img src={props.imageAdress} alt="" className="layer1"/>
                        <div className="layer2"></div>
                        <div className="layer3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                   
                        </div>
                    </div>
                    <div className="projet-nom">
                        <p > {props.name0fprojet}</p>
                        <p > {props.date}</p>
                        <p > {props.code}</p>
                    </div>
                  </div>
    )
}
export default Projet 