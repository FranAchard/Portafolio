import React from "react";
import "./Home.css";
import perfil from "./perfil.png"
const Home =()=>{
    return(
        <div>
            <div className="title"><h1>I'm a Full Stack Developer</h1></div>
            <div className="container2">
            <div className="text"><p>Estoy en la búsqueda de posibilidades como programador Full Stack con habilidades en JavaScript, React, Redux, Bootstrap, HTML, CSS, Node.js, SQL y MongoDB. Poseo experiencia en el diseño y desarrollo de aplicaciones web integrales. Si está interesado en colaborar conmigo o conoce de alguna oportunidad pertinente, no dude en contactarme mediante mi perfil en LinkedIn.</p></div>
            <div><img src={perfil} alt="Francisco Achard" className="perfil"></img></div> </div>
        </div>
    )
}
export default Home