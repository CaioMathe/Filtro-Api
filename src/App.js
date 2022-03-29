import { useEffect, useState } from 'react';
import './App.css';
import Search from './Componets/Search';

function App() {
  const [info, setInfo] = useState({});
   const [text, setText] = useState('');

     useEffect(() =>{
       if(text){
         fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=10`)
         .then(r => r.json())
         .then(data => setInfo(data))
       }
     }, [text])



  return (
    <div className="App">
        <h1> Animes</h1>

        <Search value={text}
         onChange={(s) => setText(s)}
         />
         {text && !info.data && <span>Carregando...</span>}

        {info.data && (
          <ul className='anime-list'>
            {info.data.map(ani => (
              <li key={ani.id}> 
              <img src={ani.attributes.posterImage.small} alt={ani.attributes.canonicalTitle}/>
                 {ani.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
        
    </div>
  );
}

export default App;
