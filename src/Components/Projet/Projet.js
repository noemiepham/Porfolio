const Projet =(props)=> {
    return (
     
                  <div  id ="projet">
                    <div className="projet-photo">
                        <img src={props.imageAdress} alt="" />
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