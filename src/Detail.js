import React, { useEffect, useState } from 'react'
import './Detail.css'

const Detail = (props) => {
    const [details , setdetails] = useState([])
  useEffect(() =>{
    if (props.theme==='dark'){
        document.getElementById('modal').classList.add('darkModal')
    } 
    else{
        document.getElementById('modal').classList.remove('darkModal')
    }
  },[props.theme])
     
  return (
    <div>
        <table className="data-table " id="modal">
            <tr>
                <td rowspan="5"><img src = {`https://covers.openlibrary.org/b/olid/${props.item.cover_edition_key}-M.jpg`} /></td>
                <td><h3>{props.item.title}</h3><h5>by:{props.item.author_name}</h5></td>
            </tr>
            
            <tr>
                <p><b>ISBN :</b>  {props.item.isbn!==undefined ? props.item.isbn[0]  : 'NULL'}</p>
            </tr>
            <tr>
                <p><b>Publish year :</b> {props.item.first_publish_year}</p>
            </tr>
            <tr>
                <p className='pages'><b>No. of pages:</b> {props.item.number_of_pages_median}</p>
            </tr>
            <tr>
                <p><b>Publisher :</b> {props.item.publisher!==undefined ? props.item.publisher[0] : ''}</p>
            </tr>
            <tr>

            </tr>
        </table>
        <p style={{textAlign:'center' , margin:'1vw'}}className='link'><a style={{textDecoration: 'none'}} target="_blank" href={`https://openlibrary.org/${props.item.key}`}>Open in GoogleBooks</a></p>
    </div>
  )
}

export default Detail