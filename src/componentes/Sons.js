import React from 'react';
import {connect} from 'react-redux';

import {tocarAudioAction} from '../redux/actions/actionCreators';

function Sons({audios, power, volume, tocarAudio}){

    return (
        <div id='sons'>
          {
            audios.map(audio => (
              <div className='drum-pad' id={audio.descricao} key={audio.tecla} onClick={() => tocarAudio(audio, power, volume)}>
                {audio.tecla}   
                <audio className='clip' id={audio.tecla} src={audio.link}/>             
              </div>
            ))
          }
        </div>
      );
}

const mapStateToProps= state => ({
  audios: state.bateriaReducer.audios,
  power: state.bateriaReducer.power,
  volume: state.bateriaReducer.volume
});

const mapDispatchToProps= dispatch => ({
  tocarAudio: (audio, power, volume) => dispatch(tocarAudioAction(audio, power, volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sons);