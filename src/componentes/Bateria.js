import React from 'react';

import Sons from './Sons';

function Bateria(){

    return (
        <div>
            <p className='fcc'>FCC <i className="fa-brands fa-free-code-camp"></i></p>
            <div id='drum-machine'>
                <Sons/>    
            </div>
        </div>
    );
}

export default Bateria;