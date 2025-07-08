import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [edit, setEdit]=useState([]);

    useEffect=(()=>{

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
            <h1 className="product-title">{item.title}</h1>
            <p className="product-price">₹ {(item.price * 80).toFixed(0)}</p>
            <p className="product-category"><strong>Category:</strong> {item.category}</p>
            <p className="product-description">{item.description}</p>
            <p className="product-rating"><strong>Rating:</strong> {item.rating.rate} ⭐ ({item.rating.count} reviews)</p>
            <button className="product-button" onClick={() => navigate("/")}>Go Back</button>
          </form>

        </div>
    )
    )}
      
    </div>
  )
}

export default EditPage;
