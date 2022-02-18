import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/pics/Al-Together.png"
import photo1 from "../../assets/pics/BookWorm.png"
import photo2 from "../../assets/pics/Run-Buddy.png"
import photo3 from "../../assets/pics/Note-taker.png"

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
                <a href="https://lannylopez.github.io/AL-together/">
                <img className="img-thumbnail mx-1" src={photo} />
                </a>
            </div>
            <div>
                <a href="https://bookworm2point0.herokuapp.com/index.html">
                <img className="img-thumbnail mx-1" src={photo1} />
                </a>
            </div>
            <div>
                <a href="https://lannylopez.github.io/Run-Buddy/">
                <img className="img-thumbnail mx-1" src={photo2} />
                </a>
            </div>
            <div>
                <a href="https://stark-temple-60228.herokuapp.com/">
                <img className="img-thumbnail mx-1" src={photo3} />
                </a>
            </div>
        </section>
    )
}

export default Portfolio