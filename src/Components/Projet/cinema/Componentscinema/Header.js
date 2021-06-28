
import logo from '../photo/logo.png';
import {
    Link
  } from "react-router-dom"; 
const Header = (props) => {
    return (
  
        <header>
            <div className="title">
                <img src={logo}  alt=""/>
                <div className="deuxiemboite">

                <Link to='/'> <span>Home</span> </Link>
                <Link to='/popular'> <span>Popular Movies</span> </Link>
                <Link to='/upcoming'>  <span><u>Upcoming Movie </u> </span> </Link>
                <Link to='/toprated'> <span>Top Rated Movies</span> </Link>    
           
                </div>
            </div>
            
            
        </header>
    
    )
}
export default Header