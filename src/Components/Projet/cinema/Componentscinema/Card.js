
const Card = (props) => {

    return (
      
           
            <div className = "titlecolumn ">
                <div className= "columneFilm">
                    <div>
                    <img src={props.imageAdress} alt=""/>
                    </div>
                    
                    <div className = "informationFilm">
                    <h4>{props.name}</h4>
                    <p className= " Date">{props.date}</p>
                    <p className="overview"> {props.overview}</p>
                    </div>
                </div>
        
                
            </div> 
       
      /*   <div className = "columneFilm">
            <div>
                <img src={props.imageAdress} alt=""/>
            </div>
            
            <div className = "informationFilm">
                <h4>{props.name}</h4>
                <p className= " Date">{props.date}</p>
                <p className="overview"> {props.overview}</p>
            </div>
        </div> */
    )
}
export default Card


