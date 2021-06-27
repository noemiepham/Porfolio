
import upcomingfilms  from '../assets/Upcoming-cine'
import Card from './Card.js'
  
    const Upcomingfilms = () => {
        return (
            
        <div className = "titlecolumn">
            {  
                upcomingfilms.map((film) => {
                    return (
                       <p>
                       <Card imageAdress={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + film.backdrop_path} name={film.original_title} overview ={film.overview} date ={film.release_date} />
                       </p>
                    )
                }
                )
            }
        </div> 
        )
}
         

export default Upcomingfilms