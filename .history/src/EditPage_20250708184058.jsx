import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: { rate: '', count: '' }
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('localValue')) || [];
    const productToEdit = storedData.find(product => product.id === Number(id));
    if (productToEdit) {
      setEdit(productToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rate' || name === 'count') {
      setEdit(prev => ({
        ...prev,
        rating: { ...prev.rating, [name]: value }
      }));
    } else {
      setEdit(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    const storedData = JSON.parse(localStorage.getItem('localValue')) || [];
    const updatedData = storedData.map(product =>
      product.id === Number(id) ? { ...edit, id: Number(id) } : product
    );
    localStorage.setItem('localValue', JSON.stringify(updatedData));
    navigate('/');
  };

  return (
    <div className='product-page'>
      <div className='product-container'>
        <div className="left-container">
          <img src={edit.image} alt={edit.title} className="product-image" />
        </div>

        <form className="right-container" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="title"
            value={edit.title}
            onChange={handleChange}
            placeholder="Title"
          /><br /><br />

          <input
            type="text"
            name="price"
            value={edit.price}
            onChange={handleChange}
            placeholder="Price"
          /><br /><br />

          <input
            type="text"
            name="category"
            value={edit.category}
            onChange={handleChange}
            placeholder="Category"
          /><br /><br />

          <textarea
            name="description"
            value={edit.description}
            onChange={handleChange}
            placeholder="Description"
          /><br /><br />

          <input
            type="text"
            name="rate"
            value={edit.rating.rate}
            onChange={handleChange}
            placeholder="Rating"
          /><br /><br />

          <input
            type="text"
            name="count"
            value={edit.rating.count}
            onChange={handleChange}
            placeholder="Review Count"
          /><br /><br />

          <button type="button" onClick={handleSave}>Save Changes</button>
          <button type="button" onClick={() => navigate('/')}>Go Back</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
