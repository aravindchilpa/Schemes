//Home

import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"
const Category = () => {
    return ( 
        <div>
            <div className='heading-container'>
            <h1 className='heading'>
            Categories
            </h1></div>
            <div className='category-container'>
            <Link to="/agriculture" > <img
             src="https://cdn.myscheme.in/images/categories/Agriculture.svg"
             alt="Agriculture" /><h3>Agricuture Schemes</h3></Link>
            <Link to="/education"> <img
             src="https://cdn.myscheme.in/images/categories/Education.svg"
             alt="Agriculture" /><h3>Education Schemes</h3></Link>
            <Link to="/centralgovt"> <img
             src="https://cdn.myscheme.in/images/categories/Banking.svg"
             alt="Agriculture" /><h3>Central Govt Schemes</h3></Link>
            <Link to="/healthandwellness"> <img
             src="https://cdn.myscheme.in/images/categories/Health.svg"
             alt="Agriculture" /><h3>Health & Wellness Schemes</h3></Link>
            <Link to="/housingandpension"> <img
             src="https://cdn.myscheme.in/images/categories/Housing.svg"
             alt="Agriculture" /><h3>Housing & Pension Schemes</h3></Link>
            </div>
           
        </div>
     );
}
 
export default Category;