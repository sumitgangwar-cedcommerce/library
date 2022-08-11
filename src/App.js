import './App.css';
import BookCard from './BookCard';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useState } from 'react';
import { IconButton, LinearProgress } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [showGif , setShowGif] = useState(true)
  const [bookArr , setBookArr] = useState([])
  const [bar , setBar] = useState(false)
  const [theme , setTheme] = useState("light")

  const toggleTheme = ()=>{
    if (theme==='dark'){
      setTheme('light');
      document.getElementById('App').classList.remove('body')
      document.getElementById('top-bar').classList.remove('dark')
      let arr = document.getElementsByClassName('change')
      Object.keys(arr).map((element)=>arr[element].className = 'change')
    } 
    else{
      setTheme('dark');
      
      document.getElementById('App').classList.add('body');
      document.getElementById('top-bar').classList.add('dark');
      let arr = document.getElementsByClassName('change')
      Object.keys(arr).map((element)=>arr[element].className+=' darkCard ') 
    }
  }

  const search_book = async(e) =>{
    e.preventDefault();
    setShowGif(false)
    setBar(true);
    let res = await fetch(`https://openlibrary.org/search.json?q=${e.target.search.value}`)
                    .then(response => response.json())
                    .then(response => response.docs)
    setBookArr(res)        
    setBar(false);
  }
  return (
    <div id="App" className="App">
      
      <div id="top-bar" className="top-bar">
        <form className="flex-container" onSubmit={search_book}>
          <div><h1>Find Your next book here...</h1></div>
          <div style={{display:'flex',justifyContent:'center' , cursor: 'pointer' , marginTop:'3vw' , position:'sticky' , top:0}}>
            <IconButton  onClick={toggleTheme} color="inherit">
              {theme === 'light' ? <Brightness7Icon fontSize="large"  /> : <Brightness4Icon fontSize="large" />}
            </IconButton>
            <input autoFocus autoComplete="off" type="text" name='search'  placeholder='Enter book name' />
            <button type='submit'>
            <IconButton> <SearchIcon  className="icon" /></IconButton>
            </button>
          </div>
            {
            bar===true ? <LinearProgress   className='progress'/> : null
            }
        </form>
      </div>
      {
        showGif === true ? <img id='gif'  src="https://media2.giphy.com/media/F2LV36VasrRtjJ6yZZ/giphy.gif?cid=6c09b952cf21ffe1aaea51ce3f1945916c50491e06095fe7&rid=giphy.gif&ct=s" />:
      bar===true ? null :
      <div id='Book-list' className="book-list">
        <BookCard 
          arr = {bookArr}
          theme={theme}
        />
      </div>
      }
    </div>
  );
}

export default App;
