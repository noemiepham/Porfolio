
import logo from '../photo/logo.png';
import {
    Link
  } from "react-router-dom"; 
const Header = (props) => {
    return (
  
        <header>
            <div className="title">
                <div>
                    <span>
                        <img src={logo}  alt=""/>
                    </span>
                </div>
                
            </div>
            <div className="deuxiemboite">

                <Link to='/'> <span>Home</span> </Link>
                <Link to='/popular'> <span>Popular Movies</span> </Link>
                <Link to='/upcomming'>  <span><u>Upcomming Movie </u> </span> </Link>
                <Link to='/toprated'> <span>Top Rated Movies</span> </Link>    
           
            </div>
            
        </header>
    
    )
}
export default Header