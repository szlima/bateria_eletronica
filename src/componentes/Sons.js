import React from 'react';

import {audios} from '../dados';

function Sons(){

    return (
        <div id='sons'>
          {
            audios.map(audio => (
              <div className='drum-pad' id={audio.descricao}>
                {audio.tecla}                
              </div>
            ))
          }
        </div>
      );
}

export default Sons;