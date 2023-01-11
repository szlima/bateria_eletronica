import React from 'react';
import {connect} from 'react-redux';

import Som from './Som';

function Sons({audios}){

    return (
        <div id='sons'>
          {
            audios.map(audio => (
              <Som audio={audio} key={audio.tecla}/>
            ))
          }
        </div>
      );
}

const mapStateToProps= state => ({
  audios: state.bateriaReducer.audios
});

export default connect(mapStateToProps)(Sons);