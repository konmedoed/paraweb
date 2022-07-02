import './App.scss';
import logo from './img/logo.png';
import userIcon from './img/user icon.svg'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardGrid from './Card-grid/Card-grid.js'
import { FormControl, InputLabel, Select, MenuItem, TextField, Box, Input} from '@mui/material';

// or for Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// or for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// or for Moment.js
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';


function App() {
  const [serverData, setServerData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [age,setAge]=useState('');
  const [value, setValue] = useState([null, null]);

  const url = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc';

  useEffect(function(){
    axios.get(url).then(response=>{
      setServerData(response.data.articles);
    })
  },[]);

  useEffect(function(){
    setRenderData(serverData.filter(item=>true));
  },[serverData]);





  return (
    <div className="App">
      <header className="header">
        <div className='header__logo'>
          <img src={logo} alt='Space.'/>
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
          <FormControl className='filter__author'>
            <InputLabel sx={{display: 'flex'}} id="demo-simple-select-label"><img src={userIcon} alt=''/><span>Выбор автора</span></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Выбор автора"
              onChange={e=>setAge(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty k;ajdsfas asddfb abhsdf asdf bhjl dsafg df df ssdf df </MenuItem>
            </Select>
          </FormControl>
          <div>
          {/* <Box
            component="form"
            sx={{
              background: '#FFFFFF',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            <Input sx={{fontFamily:'Montserrat', fontWeight:'600', fontSize:'16px', lineHeight:'20px'}} placeholder="От" disableUnderline={true}/>
            <Input sx={{fontFamily:'Montserrat', fontWeight:'600', fontSize:'16px', lineHeight:'20px'}} placeholder="До" disableUnderline={true}/>
          </Box> */}

              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Check-in', end: 'Check-out' }}
              >
                <DateRangePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            <div className='filter__gap'>

            </div>
          </div>
          
        </section>
        <article className="main__card-grid">
          <CardGrid data={renderData}/>
        </article>
        
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
