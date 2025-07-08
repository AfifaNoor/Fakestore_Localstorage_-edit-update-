import React from 'react';
import {createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom'
import ProductDisplay from './ProductDisplay';
import ProductPage from './ProductPage';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element ={<ProductDisplay/>}/>
            <Route path="/product-page/:id" element ={<ProductPage/>}/>

        </>
    )
)

export default Router;