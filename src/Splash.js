import React from 'react';
import './css/Splash.css'
import {Link} from 'react-router-dom';


function Splash() {
  return (
      <div className='background'>
        <div className = 'container'>
            <Link to='./Home' className='title' >
                Edit.
            </Link>
            <p className='subtitles'>Conseils. Ecriture. Relecture </p>
            <p className='sub-subtitles'>manuscrits et textes communicationnels.</p>
        </div>
      </div>
  );
}

export default Splash;
