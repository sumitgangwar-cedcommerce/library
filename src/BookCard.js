import { Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
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
  console.log(props.arr)
  return (
    <>
      {
        props.arr.length === 0 ? <h1 style={{color:'red'}}>Sorry No Data Found!!!</h1> :
        props.arr.map((item, i) => 
          <Card key={i}  className='card'>
            <CardMedia 
              component='img'
              height='200'
              image={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
              
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {item.title}
              </Typography>
              <Typography variant='body2' color="text.secondry">
                by: {item.author_name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button  size='small' style={{color: 'steelblue'}} onClick={()=>{setOpen(true);setItem(item);}}>View More</Button>
            </CardActions>
          </Card>
        )
      }
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        >
        <div id="modal" style={style}>
          <Detail item={item}/>
        </div>
      </Modal>
    </>
  )
}

export default BookCard