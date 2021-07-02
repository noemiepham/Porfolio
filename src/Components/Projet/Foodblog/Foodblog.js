
import './Foodblog.css';
import Headerfood from './Foodcomponents/Headerfood.js'
import Asiafood from './Foodcomponents/Asiafood.js'
import Newrecipes from './Foodcomponents/Newrecipe';
import RecipesLoving from './Foodcomponents/RecipesLoving';
import Foodweek from './Foodcomponents/Foodweek';
import Foodoftheworld from './Foodcomponents/Foodoftheworld';
import { useState } from 'react';


function Foodblog  () {
  const [compteurPlat,setcompteurPlat] = useState(0)
  return (
    <div className="body">
          <Headerfood tata={compteurPlat}/>
          <section className ="Allrecipes">
            <Newrecipes/>

            <Foodweek/>

            <RecipesLoving/>

          </section>
            <Asiafood toto={compteurPlat} setcompteurPlat={setcompteurPlat}/>
            
            <Foodoftheworld/>
    </div>
  
    
 
  )
}
export default Foodblog;