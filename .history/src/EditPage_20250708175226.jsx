import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const {id}=useParams(id);
    const navigate = useNavigate();
    const [edit, setEdit]=useState([]);

    useEffect=(()=>{

        const editValue = JSON.parse(localStorage.getItem('localValue'))
        const filterEdit = editValue.filter
    })

  return (
    <div>
      
    </div>
  )
}

export default EditPage
