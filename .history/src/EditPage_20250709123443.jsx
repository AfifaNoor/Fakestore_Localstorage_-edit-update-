import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [edit, setEdit]=useState([]);

    useEffect (() => {

        const editValue = JSON.parse(localStorage.getItem('localValue'))
        const filterEdit = editValue.filter(product => product.id == id)
        setEdit(filterEdit)
        console.log(filterEdit,"edit")
    } , [id])

  return (
    <div className='product-page'>
    {edit.map((item)=>(
        <div key={item.id} className='className="product-container"'>
        <div className="left-container">
            <img src={item.image} alt={item.title} className="product-image" />
          </div>

     <form className="right-container">
            <input className="input-field" >{item.title}</input>
            <p className="input-field">$ {item.price}</p>
            <p className="input-field"><strong>Category:</strong> {item.category}</p>
            <p className="input-field">{item.description}</p>
            <p className="input-field"><strong>Rating:</strong> {item.rating.rate} ⭐ ({item.rating.count} reviews)</p>
            <button className="submit-btn" type='submit'> Save</button>
            <button className="product-btn" onClick={() => navigate("/")}>Go Back</button>
          </form>


        </div>
    )
    )}
      
    </div>
  )
}

export default EditPage;
