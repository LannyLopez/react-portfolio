import React from 'react';
import Lanny from '../../assets/Lanny/Lanny.jpeg'
import '../../assets/css/style.css'



function About(){
    return(
        <section>
            <div id=''>
            <h1 id='about'>About Me</h1>
            </div>
            <div>
            <img id='lanny-pic' src={Lanny}></img>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad explicabo sint quaerat quam blanditiis nam obcaecati perspiciatis, nihil ipsa voluptas fuga temporibus veniam exercitationem facilis nobis perferendis amet fugit.</p>
        </section>
    )
}

export default About;