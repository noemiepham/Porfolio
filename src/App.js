import './App.css';
import About from './Components/About'
import Home from './Components/Home'
/* import Skills from './Components/Skills' */
import Projetsource from './Components/Projet/Projetsource'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
/* import { useState } from 'react'; */
import Myrouter from './Components/Myrouter';

function App() {
  /* const [showmenu, setShowmenu] = useState("hide") */
  return (
    <div className="overflow-wrap">
          {/* Header */}
          {/* <nav>
            <div className="button-icon">
              <button onClick={() => {
                if (showmenu === "show") {
                  setShowmenu("hide")
                } else {
                  setShowmenu("show")
                }
              }}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fefefe" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              </button>
              {
                showmenu === "show" ? <Menu /> : null
              }
            </div>

          </nav> */}
              <Myrouter/>
            
            <Menu/>
            <Home />
     
      
            <About />
     
          {/*   <Skills /> */}

            <Projetsource/>

            <Contact />
    </div>
  );
}

export default App;
