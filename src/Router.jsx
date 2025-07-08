import React from 'react';
import {createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom'
import ProductDisplay from './ProductDisplay';
import ProductPage from './ProductPage';
import EditPage from './EditPage';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element ={<ProductDisplay/>}/>
            <Route path="/product-page/:id" element ={<ProductPage/>}/>
            <Route path="/edit-page/:id" element={<EditPage/>}/>

        </>
    )
)

export default Router;