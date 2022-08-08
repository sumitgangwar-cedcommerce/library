import './App.css';
import BookCard from './BookCard';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useState } from 'react';
import { LinearProgress } from '@mui/material';

function App() {
  const [showGif , setShowGif] = useState(true)
  const [bookArr , setBookArr] = useState([])
  const [bar , setBar] = useState(false)

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
    <div className="App">
      <div className="top-bar">
        <form className="flex-container" onSubmit={search_book}>
          <div><h1>Find Your next book here...</h1></div>
          <div style={{display:'flex',justifyContent:'center' , cursor: 'pointer' , marginTop:'3vw' , position:'sticky' , top:0}}>
            <input type="text" name='search'  placeholder='Enter book name' />
            <button type='submit'>
              <SearchSharpIcon  className="icon" />
            </button>
          </div>
            {
            bar===true ? <LinearProgress   className='progress'/> : null
            }
        </form>
      </div>
      {
        showGif === true ? <img  src="https://content.presentermedia.com/content/animsp/00019000/19205/sit_a_while_reading_book_300_wht.gif" />:
      
      <div className="book-list">
        <BookCard 
          arr = {bookArr}
        />
      </div>
      }
    </div>
  );
}

export default App;
