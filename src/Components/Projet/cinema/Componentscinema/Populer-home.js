
import Populer from '../assets/Populer'
import Card from './Card.js'
  
    const Populerfilm = () => {
        return (
            
        <div className = "titlecolumn">
            {  
                Populer.map((film) => {
                    return (
                        <Card imageAdress={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + film.backdrop_path} name={film.original_title} overview ={film.overview} date ={film.release_date} />
                    )
                }
                )
            }
        </div> 
        )
}
         

export default  Populerfilm