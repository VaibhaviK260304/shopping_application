// src/components/CardList.js
import React from 'react';
import Card from '../../components/CategoryCard/Card'
import { category } from '../../configs/shop-category/category'

const Shopping = () => {
    return (
        <div className="card-list">
            {category.map((item, index) => (
                <Card
                    key={index}
                    img={item.img}
                    categoryname={item.categoryname}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Shopping;

