import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav(props){
    const{
        categories =[],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span>Lanny Lopez</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2"><a data-testid="about" href="#about">About Me</a></li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
                    {categories.map((category) => <li className={`mx-1 ${
                        currentCategory.name === category.name && 'navActive'
                    }`} key={category.name}>
                        <span onClick={()=>{
                            setCurrentCategory(category)
                        }}>{capitalizeFirstLetter(category.name)}</span>
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;