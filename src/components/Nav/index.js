import React from "react";

const categories = [
    {name: 'Portfolio', description:'All of my previous work to display current knowledge'},
    {name:'Resume', description:'Current Resume'},
]
function categorySelected(name){
    console.log(`${name} clicked`);
}
function Nav(){
    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span>Lanny Lopez</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2"><a href="#about">About Me</a></li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category)=>
                    <li className="mx-1" key={category.name}><span onClick={() => categorySelected(category.name)}>{category.name}</span></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;