import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const {id}=useParams(id);
    const navigate = useNavigate();
    const [edit, setEdit]=useState([]);
    

  return (
    <div>
      
    </div>
  )
}

export default EditPage
