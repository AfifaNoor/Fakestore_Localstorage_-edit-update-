import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const[title, setTitle]= useState('')
  const [price,setprice] = useState('')
  console.log(price,"price")
  const [category,setCategory] = useState('')
  const[rating,setRating] =useState('')
  const [description, setDescription] = useState('')
  const [edit, setEdit]=useState([]);
  console.log(edit , 'edit')

  const {id}=useParams();
  const navigate = useNavigate();
    


    useEffect (() => {

        const editValue = JSON.parse(localStorage.getItem('localValue'))
        const foundItem = editValue.find(product => product.id == id)
        setEdit([foundItem])
        console.log(foundItem,"founditem")
    } , [id])

    const handleUpdate = (e) =>{
      e.preventDefault();
          // Combine old list with new one
    const updatedDetail = [...edit , newDetail];

    setEdit(updatedDetail)
    console.log(updatedDetail,'update')

      // Save the updated list to localStorage so it persists across page refresh
    // localStorage.setItem('localValue', JSON.stringify(updatedDetail));
    //   console.log('Added:', newDetail);
    }

    // Create a new detail object from the form input value
    const newDetail = {
      title,
      price,
      description,
      category,
      rating
    }
     





  return (
    <div className='product-page'>
    {edit.map((item)=>(
        <div key={item.id} className='className="product-container"'>
        <div className="left-container">
            <img src={item.image} alt={item.title} className="product-image" />
          </div>

     <form className="right-container" >
            <input className="input-field" type='text'  name='Title' value={item.title}  onChange={(e)=> setTitle(e.target.value)}/>
            <input className="input-field" text='number' name='price'  value ={item.price} placeholder='$' onChange={(e)=> setprice(e.target.value)}/>
            <input className="input-field" type='text'   name='category' value={item.category} onChange={(e)=> setCategory(e.target.value)} />
            <input className="input-field"  type="text" name='Description' value={item.description} onChange={(e)=> setDescription(e.target.value)}></input>
            <input className="input-field" type='text' name='Ratings ⭐' value={item.rating.rate} onChange={(e)=> setRating(e.target.value)}></input>
            <input className="input-field" type='text' name='Review' value={item.rating.count} ></input>
            <button className="submit-btn" type='submit' onClick={handleUpdate}> Save</button>
            <button className="product-btn" onClick={() => navigate("/")}>Go Back</button>
          </form>


        </div>
    )
    )}
      
    </div>
  )
}

export default EditPage;
