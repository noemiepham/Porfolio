
import './Todolist.css';
import { useState } from 'react'


function Todolist() {
  const [myList, setMyList] = useState([])
  const [taskName, setTaskName] = useState([])
  return (
    <div className="App">
            
            <h1 className="todolist">🌻🌻🌻 THING TO DO 🌻🌻🌻 </h1>
            <div  className="task">YOUR LIST </div>
            <div  className="task">YOUR LIST </div>
            {
              myList.map((task, i) => {
                console.log(task, i)
                return (
                  <div  className="task">
                    <span>{task}</span>
                    <button className ="checkmark"
                      onClick={() => {
                        // faire une copie du tableau
                        const myListCopy = [...myList]
                        // delete le ième élément
                        myListCopy.splice(i, 1)
                        // setMyList de la copie a laquelle on a retire un element
                        setMyList(myListCopy)
                      }}
                    >✔️</button>
                  </div>)
              })
            }
            <div className="inputblock" >
                <input className ="input" type='text' value={taskName} onChange={(event) => {
                  setTaskName(event.target.value)
                }} />
            </div>
            <div className="button">
            <button className="ajoutemoi"
              onClick={() => {
                // faire une copie du tableau
                const myListCopy = [...myList]
                // push dans la copie
                myListCopy.push(taskName)
                // setmyList de la copie
                setMyList(myListCopy)
                // j'avais pas le droit d'ecrire setMyList(myList.push(taskName))
                // car je modifiais myList en direct
                // Vider le contenu de l'input en UNE LIGNE
                setTaskName('')
              }}
            >AJOUTE MOI</button> 
            
            </div>
              <div className="animationTwo">
              <marquee><span className="icon">🏃‍♀️</span>Don't put off until tomorrow what you can do today<span className="icon">🏃‍♀️</span></marquee>
              <marquee direction="right"><span className="icon">🚣‍♂️</span>Việc hôm nay chớ để ngày mai 
              <span className="icon">🚣‍♂️</span></marquee>
            </div> 
            <div className ="animation">
                  <img src = {"https://banner2.cleanpng.com/20190520/et/kisspng-psychological-stress-behavior-health-occupational-warmers-5ce361767eff74.6901235315584054945202.jpg"} alt="" />
            </div>
    </div>
  );
}
export default Todolist;