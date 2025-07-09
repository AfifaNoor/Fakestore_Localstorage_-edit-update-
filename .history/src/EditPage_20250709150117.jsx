import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [reviewCount, setReviewCount] = useState('');
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    const editValue = JSON.parse(localStorage.getItem('localValue')) || [];
    const foundItem = editValue.find(product => product.id == id);

    if (foundItem) {
      setEdit([foundItem]);
      // setTitle(foundItem.title || '');
      // setPrice(foundItem.price || '');
      // setCategory(foundItem.category || '');
      // setDescription(foundItem.description || '');
      // setRating(foundItem.rating?.rate || '');
      // setReviewCount(foundItem.rating?.count || '');
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...edit[0],
      title,
      price,
      category,
      description,
      rating: {
        ...edit[0].rating,
        rate: rating,
        count: reviewCount
      }
    };

    const storedData = JSON.parse(localStorage.getItem('localValue')) || [];
    const updatedData = storedData.map(item => item.id == id ? updatedProduct : item);

    setEdit([updatedProduct]);
    localStorage.setItem('localValue', JSON.stringify(updatedData));
    console.log('Updated Product:', updatedProduct);
  };

  return (
    <div className='product-page'>
      {edit.map((item) => (
        <div key={item.id} className='product-container'>
          <div className="left-container">
            <img src={item.image} alt={item.title} className="product-image" />
          </div>

          <form className="right-container" onSubmit={handleUpdate}>
            <input
              className="input-field"
              type='text'
              name='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="input-field"
              type='number'
              name='Price'
              value={price}
              placeholder='$'
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              className="input-field"
              type='text'
              name='Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              className="input-field"
              type='text'
              name='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              className="input-field"
              type='text'
              name='Ratings'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <input
              className="input-field"
              type='text'
              name='Review'
              value={reviewCount}
              onChange={(e) => setReviewCount(e.target.value)}
            />

            <button className="submit-btn" type='submit'>Save</button>
            <button className="product-btn" type='button' onClick={() => navigate("/")}>Go Back</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default EditPage;
