import { Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './BookCard.css'
import Detail from './Detail'

const style = {
  transition: 'all 0.3s ease-in-out',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#F0F2F5',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  p: 4,
};
const BookCard = (props) => {
  const [open , setOpen] = useState(false)
  const [item , setItem] = useState({})
  const [cl , setCl] = useState('change')

  useEffect(() =>{
    if (props.theme==='dark'){
      setCl('darkCard')
    } 
    else{
      setCl('change')
    }
  },[props.theme])
 
  

  return (
    <>
      {
        props.arr.length === 0 ? <h1 style={{color:'red', marginLeft:'auto' , marginRight:'auto'}}>Sorry No Data Found!!!</h1> :
        props.arr.map((item, i) =>
        <div  className={cl}>
          <Card key={i}   className='card'>
            <CardMedia 
              component='img'
              height='200'
              image={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
              
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {
                  JSON. stringify(item.title)!=undefined ? (JSON. stringify(item.title)).length <20 ? (JSON. stringify(item.title)).substring(1 , ((JSON. stringify(item.title).length)-2)) :  (JSON. stringify(item.title)).substring(1 , 15) + "..." :  "......."
                }
              </Typography>
              <Typography variant='body2' color="text.secondry">
                by: {
                  JSON. stringify(item.author_name)!=undefined ? (JSON. stringify(item.author_name)).length <20 ? (JSON. stringify(item.author_name)).substring(2 , ((JSON. stringify(item.author_name).length)-2)) :  (JSON. stringify(item.author_name)).substring(2 , 15) + "..." :  "......."
                }
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='contained'  size='small' style={{color: 'white' , backgroundColor: 'steelblue'}} onClick={()=>{setOpen(true);setItem(item);}}>View More</Button>
            </CardActions>
          </Card></div>
        )
      }
      <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        >
        <div style={style}>
          <Detail item={item} theme = {props.theme}/>
        </div>
      </Modal></div>
    </>
  )
}

export default BookCard