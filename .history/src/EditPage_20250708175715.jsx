import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const {id}=useParams(id);
    const navigate = useNavigate();
    const [edit, setEdit]=useState([]);

    useEffect=(()=>{

        const editValue = JSON.parse(localStorage.getItem('localValue'))
        const filterEdit = editValue.filter(product => product.id == id)
        setEdit(filterEdit)
    } , [id])

  return (
    <div className='product-page'>
    {edit.map((item)=>(
        <div key={item.id} className='className="product-container"'>
        <div className="left-container">
            <img src={item.image} alt={item.title} className="product-image" />
          </div>

        

        </div>
    )
    )}
      
    </div>
  )
}

export default EditPage
