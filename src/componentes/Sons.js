import React from 'react';
import {connect} from 'react-redux';

function Sons({audios}){

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

const mapStateToProps= state => ({
  audios: state.bateriaReducer.audios
});

export default connect(mapStateToProps)(Sons);