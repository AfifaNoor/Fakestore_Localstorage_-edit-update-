import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
     
    const productValue= JSON.parse (localStorage.getItem('productDetail'))
    
  
  }, [id]);

  return (
    <div className="product-page">
      {detail.map((item) => (
        <div key={item.id} className="product-container">
          <div className="left-container">
            <img src={item.image} alt={item.title} className="product-image" />
          </div>
          <div className="right-container">
            <h1 className="product-title">{item.title}</h1>
            <p className="product-price">₹ {(item.price * 80).toFixed(0)}</p>
            <p className="product-category"><strong>Category:</strong> {item.category}</p>
            <p className="product-description">{item.description}</p>
            <p className="product-rating"><strong>Rating:</strong> {item.rating.rate} ⭐ ({item.rating.count} reviews)</p>
            <button className="product-button" onClick={() => navigate("/")}>Go Back</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
