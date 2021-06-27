
import toprate from '../assets/Toprated-cine'
import Card from './Card.js'
  
    const Toprate = () => {
        return (
            
        <div className = "titlecolumn">
            {  
                toprate.map((film) => {
                    return (
                        <Card imageAdress={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + film.backdrop_path} name={film.original_title} overview ={film.overview} date ={film.release_date} />
                    )
                }
                )
            }
        </div> 
        )
}
         

export default  Toprate