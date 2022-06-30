import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardGrid from './Card-grid/Card-grid.js'

function App() {
  const [data, setData] = useState([]);

  const url = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc';

  useEffect(function(){
    axios.get(url).then(response=>{
      setData(response.data.articles);
    })
  },[]);



  return (
    <div className="App">
      <header className="header">
        
      </header>
      <main>
        <article className='carousel'>

        </article>
        <section className='filter'>

        </section>
        <CardGrid data={data}/>
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
