import './App.css';
import About from './Components/About'
import Home from './Components/Home'
/* import Skills from './Components/Skills' */
import Projetsource from './Components/Projet/Projetsource'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
import { useState } from 'react';
import Myrouter from './Components/Myrouter';

function App() {
  const [showmenu, setShowmenu] = useState("hide")
  return (
    <div className="overflow-wrap">
          {/* Header */}
          <header>
            <div className="button-icon">
              <button onClick={() => {
                if (showmenu === "show") {
                  setShowmenu("hide")
                } else {
                  setShowmenu("show")
                }
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              {
                showmenu === "show" ? <Menu /> : null
              }
            </div>

          </header>
              <Myrouter/>
              
            <Home />
     
      
            <About />
     
          {/*   <Skills /> */}

            <Projetsource/>

            <Contact />
    </div>
  );
}

export default App;
