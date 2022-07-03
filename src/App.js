import './App.scss';
import logoHeader from './img/logo.png';
import logoFooter from './img/logo footer.png';
import userIcon from './img/user icon.svg'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardGrid from './Card-grid/Card-grid.js'
import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Box from '@mui/material/Box';


function App() {
  const [serverData, setServerData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [currentAuthor,setCurrentAuthor]=useState('');
  const [date, setDate] = useState([null, null]);

  console.log(date[0]);

  const [renderAuthors, setRenderAuthors] = useState([]);

  const url = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc';
  useEffect(function(){
    axios.get(url).then(response=>{
      const checkedDataForState = [];
      response.data.articles.forEach(element => {checkedDataForState.push(element)});
      checkedDataForState.forEach(element=>{
        if (element.author===null){
          element.author=element.source.name;
        }
      })
      setServerData(checkedDataForState);
    })
  },[]);

  useEffect(function(){
    setRenderData(serverData.filter(item=>true));
    setRenderAuthors(serverData.map(item=><MenuItem key={`author ${item.title}`} value={item.author}>{item.author}</MenuItem>));
  },[serverData]);

  useEffect(function(){
    if (currentAuthor==='')
      setRenderData(serverData.filter(item=>true));
    else setRenderData(serverData.filter(item=>item.author===currentAuthor));
  },[currentAuthor]);

  useEffect(function(){
    setRenderData(serverData.filter(item=>{
      if ( (Date.parse(item.publishedAt) >= Date.parse(date[0])) && (Date.parse(item.publishedAt) <= Date.parse(date[1])) )
        return true
    }
    ));
  },[date]);


  return (
    <div className="App">
      <header className="header">
        <div className='header__logo'>
          <img src={logoHeader} alt='Space.'/>
        </div>
        <div className='header__contacts-wrapper'>
          <a className='header__mail text' href="mailto:sales@logo.ru">sales@logo.ru</a>
          <a className='header__phone text' href="tel:+78000000000">8 800 000 00 00</a>
        </div>
      </header>
      <main className="main">
        <article className='carousel'>

        </article>
        <section className='filter'>
          <FormControl key='choose author' className='filter__author' sx={{marginRight:'20px'}}>
            <InputLabel sx={{display: 'flex'}} id="demo-simple-select-label"><img src={userIcon} alt=''/><span>Выбор автора</span></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentAuthor}
              label="Выбор автора"
              onChange={e=>{setCurrentAuthor(e.target.value);console.log(e.target.value)}}
            >
              <MenuItem key='item-none' value="">
                <em>None</em>
              </MenuItem>
              {renderAuthors}
            </Select>
          </FormControl>          
          <LocalizationProvider key='choose date'
            dateAdapter={AdapterDateFns}
            localeText={{ start: 'От', end: 'До' }}
            sx ={{backgroundColor:'#FFFFFF'}}
          >
            <DateRangePicker
              value={date}
              onChange={(newValue) => {
                  setDate(newValue);
              }}
              
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} sx ={{backgroundColor:'#FFFFFF', borderWidth: 0}}/>
                  <Box sx={{ mx: 2,backgroundColor:'#FFFFFF', border: 'none'}}><span>-</span></Box >
                  <TextField {...endProps} sx ={{backgroundColor:'#FFFFFF'}}/>
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </section>
        <article className="main__card-grid">
          <CardGrid key='card-grid' data={renderData}/>
        </article>
      </main>
      <footer className='footer'>
        <img src={logoFooter} alt='Space.'/>
        <div className='footer__links'></div>
        <div className='footer__сopyright'></div>
        <div className='footer__icons'></div>
      </footer>
    </div>
  );
}

export default App;
