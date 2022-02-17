import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/pics/Al-Together.png"

function Portfolio(props){
    const currentCategory = {
        name: "Portfolio",
        description: "Previous Project that I have completed to display my talents"
    };
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img className="img-thumbnail mx-1" src={photo} />
            </div>
        </section>
    )
}

export default Portfolio