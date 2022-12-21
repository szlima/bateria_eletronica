import React from 'react';
import {connect} from 'react-redux';

import {tocarAudioAction} from '../redux/actions/actionCreators';

const tocar= (audio, power, volume, funcaoTocar) => {

  if(power){
    const som= document.querySelector('#'+audio.tecla);
    som.volume= volume/100;
    som.play();
    funcaoTocar(audio.descricao); 
  }
};

function Sons({audios, power, volume, tocarAudio}){

    return (
        <div id='sons'>
          {
            audios.map(audio => (
              <div className='drum-pad' id={audio.descricao} key={audio.tecla} onClick={() => tocar(audio, power, volume, tocarAudio)}>
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
  tocarAudio: audio => dispatch(tocarAudioAction(audio))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sons);