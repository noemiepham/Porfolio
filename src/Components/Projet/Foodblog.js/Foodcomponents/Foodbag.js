

const Foodbag = (props) => {
    return (
        <div>  
               
                    <div className="listfood">
                        <img src={props.imageAdress} alt="" />
                        <p>{props.name}</p>
                        <p>{props.time}</p>
                        <p>{props.cooking}</p>
                    </div>
                    <div>
                        <button onClick={ () => {
                            props.setcompteurPlat(props.compteurPlat + 1)
                            } }>Buy recipe</button>
                    </div>
                </div>
    
    )
}
export default Foodbag 