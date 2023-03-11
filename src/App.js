import './App.scss';
import logoHeader from './img/logo.png';
import Carousel from './Carousel/Carousel';
import logoFooter from './img/logo footer.png';
import userIcon from './img/user icon.svg';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VkIcon from './img/vkIcon.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import SvgIcon from '@mui/material/SvgIcon';

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
        <div className='header__wrapper'>
          <div className='header__logo'>
            <img src={logoHeader} alt='Space.'/>
          </div>
          <div className='header__contacts-wrapper'>
            <a className='header__phone text text_normal' href="tel:+78000000000"><span className='header__phone-text'>8 800 000 00 00</span><SvgIcon className='header__phone-icon' component={PhoneIcon}/></a>
            <a className='header__mail text text_normal' href="mailto:sales@logo.ru"><span className='header__mail-text'>sales@logo.ru</span><SvgIcon className='header__mail-icon' component={MailOutlineIcon}/></a>
          </div>
        </div>
      </header>
      <main className="main">
        <Carousel/>
        <section className='filter'>
          <div className='filter__wrapper'>
          <FormControl key='choose author' className='filter__author'>
            <InputLabel sx={{display: 'flex', gap:'10px', fontFamily: 'Montserrat', fontSize:'16px', fontWeight:'600', lineHeight:'20px', color:'#888888'}} id="demo-simple-select-label"><img src={userIcon} alt=''/><span>Выбор автора</span></InputLabel>
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
          <div className='filter__date-wrapper'>
            <LocalizationProvider key='choose date' dateAdapter={AdapterDateFns} localeText={{ start: 'От', end: 'До' }}>
              <DateRangePicker value={date} onChange={(newValue) => {setDate(newValue);}}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                      <div className='filter__date'>
                        <TextField {...startProps} sx ={{backgroundColor:'#FFFFFF'}}/>
                      </div>
                      <Box sx={{ mx: 2,backgroundColor:'#FFFFFF'}}><span>-</span></Box >
                      <div className='filter__date'>
                        <TextField {...endProps} sx ={{backgroundColor:'#FFFFFF'}}/>
                      </div>
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </div>   
          
          </div>
        </section>
        <article className="main__card-grid">
          <CardGrid key='card-grid' data={renderData}/>
        </article>
      </main>
      <footer className='footer'>
        <div className='footer__logo-and-links-wrapper'>
          <div className='footer__logo-wrapper'>
            <img src={logoFooter} alt='Space.'/>
          </div>
          <div className='footer__links'>
            <a className='text text_normal link-decoration-remover' href=''>Готовые решения</a>
            <a className='text text_normal link-decoration-remover' href=''>О нас</a>
            <a className='text text_normal link-decoration-remover' href=''>Блог</a>
            <a className='text text_normal link-decoration-remover' href=''>Контакты</a>
          </div>
        </div>
        <div className='footer__сopyright-and-icons-wrapper'>
          <div className='footer__сopyright text text_small'>© ООО «Лого», 2008—2022</div>
          <div className='footer__icons'>
            <a className='link-decoration-remover' href=''><SvgIcon component={TelegramIcon}/></a>
            <a className='link-decoration-remover' href=''><img src={VkIcon} width='17.5px' height='10.7px'/></a>
            <a className='link-decoration-remover' href=''><SvgIcon component={TwitterIcon}/></a>
            <a className='link-decoration-remover' href=''><SvgIcon component={YouTubeIcon}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
