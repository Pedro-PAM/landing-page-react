import React from "react";

function Main(){
    return(
        <div className="main">
        <div className="center">
        
          <div className="menu">
            <div className="logo">
              <h1>Landing Page em React!</h1>
              <h2>By Pedro Paulo</h2>
            </div>
            <div className="menu-item">
              <a href="https://www.linkedin.com/in/pedropam">Linkedin</a>
              <a href="github.com/Pedro-PAM">GitHub</a>
              <a href="instagram.com/pedro_pam98/">Instagram</a>          
              <a href="https://pedro-pam.netlify.app"   >Portifólio</a>

            </div>
          </div>
          <div className="form">
            <h3>Entre em contato!</h3>
            <form>
              <input type="email" placeholder="email:"></input>
              <input type="text" placeholder="nome:"></input>
              <input type="tel" placeholder="tel:"></input>
              <input type="text"></input>
              <input type="submit"></input>
            </form>
          </div>
        </div>
        

      </div>
    )
}
export default Main;