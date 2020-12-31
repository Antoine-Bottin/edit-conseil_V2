import React from 'react';
//import './CSS/Home.css'
import { slide as Menu } from 'react-burger-menu'
import './CSS/Home.css'



function Home() {
  return (
      <div>
        <Menu   right 
                width={'15%'}
                
                >
            <a id="edit" className="menu-item" href="/">Edit.</a>
            <a id="prestations" className="menu-item" href="/prestations">Prestations</a>
            <a id="commentaires" className="menu-item" href="/commentary">Commentaires</a>
            <a id="prestations" className="menu-item" href="/prestations">About</a>
            <a id="prestations" className="menu-item" href="/prestations">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </div>
  );
}

export default Home;
