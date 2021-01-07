import React from 'react';
//import './CSS/Home.css'
import { slide as Menu } from 'react-burger-menu'
import './css/Home.css'
import { Parallax } from 'react-parallax';



function Home() {
  return (
      <div id="outer-container">
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
        <Parallax bgImage={require("./assets/cover-r4x3w1000-5cadebdd93968-trou-noir-galaxie.jpg")} bgImageSize={'height:30vh'} strength={500}>
          <div className='parallaxOne'>
              <div className='parallaxOne-content'>HTML inside the parallax</div>
          </div>
        </Parallax>
        <div style={{height:'100vh'}}>

        </div>
      </div>
  );
}

export default Home;
