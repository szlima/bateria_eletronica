import {
  TROCAR_VOLUME, TROCAR_POWER, TROCAR_BANK, TOCAR_AUDIO, LIMPAR_DISPLAY
} from './actionTypes';

import {playlists} from '../../dados';

const trocarVolume= volume => ({
    type: TROCAR_VOLUME,
    payload: {
      volume
    }
});

const limparDisplay= () => ({
  type: LIMPAR_DISPLAY
});

export const trocarVolumeAction= volume => {
  return (dispatch, getState) => {

    if(getState().bateriaReducer.power){
      dispatch(trocarVolume(volume));
      setTimeout(() => dispatch(limparDisplay())
      , 700);
    }
  };
};
  
const trocarPower= () => ({
    type: TROCAR_POWER    
});

export const trocarPowerAction= () => {
  return (dispatch, getState) => {

    if(getState().bateriaReducer.power)
      document.querySelector("#bank").disabled = true;
    else
      document.querySelector("#bank").disabled = false;

    dispatch(trocarPower());
  };
};
  
const trocarBank= (audios, display) => ({
    type: TROCAR_BANK,
    payload: {
      audios,
      display
    }
});

export const trocarBankAction= () => {
  return (dispatch, getState) => {

    if(getState().bateriaReducer.power){
      const audios= playlists[+(!getState().bateriaReducer.bank)].audios;
      const display= playlists[+(!getState().bateriaReducer.bank)].nome;

      dispatch(trocarBank(audios, display));
    }
  };
};
  
const tocarAudio= descricao => ({
  type: TOCAR_AUDIO,
  payload: {
    descricao
  }
});

export const tocarAudioAction= audio => {
  return (dispatch, getState) => {

    if(getState().bateriaReducer.power){
      const som= document.querySelector('#'+audio.tecla);
      const botao= document.querySelector(`#drum${audio.tecla}`);

      som.volume= getState().bateriaReducer.volume/100;      
      botao.classList.add('drum-pad-ativo');
      som.play();
      
      setTimeout(() => botao.classList.remove('drum-pad-ativo')
                , 500);

      dispatch(tocarAudio(audio.descricao));
    }
  };
}




