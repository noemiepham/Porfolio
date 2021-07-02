import axios from 'axios'
import { useEffect, useState } from 'react';
const AppelApi = () => {
  // On initialise un state à null. Il contiendra plus tard les datas récupérées par axios
  const [data, setData] = useState(null)
  useEffect(async () => {
    const addr1 = 'https://api-allocine.herokuapp.com/api/movies/popular'
    const addr2 = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const result = await axios(addr1)
    setData(result.data)
  }, [])
  // tableau vide en second argument signifie : execsute la fonction uniquement 1 fois au premier chargement du composant.
  // a l'interieur du tableau, je peux mettre des states, on appelle ça une "dependance". c'est à dire que la fonction va s'executer a chaque fois que le ou les states du tableau sont mis a jour.
  return (
    <div className="App">
      <h1> ALLOCINE API </h1>
      {/* ici faisons une ternaire : tant que data n'a pas été changé par l'appel axios, data vaut null, donc affichons "en attente" ou une roue de chargement */}
      {data === null ?
        <div>EN ATTENTE DES RESULTATS</div>
        :
        // Lorsque data a bien été mis à jour affichons nos films récupérés
        data.results.map((film) => {
          return (
            <div>{film.original_title}</div>
          )
        })
      }
    </div>
  );
}
export default AppelApi;