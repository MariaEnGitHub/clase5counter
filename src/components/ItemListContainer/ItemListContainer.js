import React from 'react';
import { ProductCard } from '..ProductCard/ProductCard.js';
import {ItemCount } from '..ItemCount/ItemCount.js';

export const ItemListContainer= ({greeting}) => {
        return (
            <div className= "container my-5" >
                <h2>{greeting}</h2>
                <hr/>
                <ProductCard/>
                <ItemCount/>
    
            </div>
        )
    }
