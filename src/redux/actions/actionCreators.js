import {TROCAR_VOLUME, TROCAR_POWER, TROCAR_BANK, TOCAR_AUDIO} from './actionTypes';

export const trocarVolumeAction= volume => ({
    type: TROCAR_VOLUME,
    payload: {
      volume
    }
});
  
export const trocarPowerAction= () => ({
    type: TROCAR_POWER
});
  
export const trocarBankAction= () => ({
    type: TROCAR_BANK
});
  
const tocarAction= descricao => ({
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

      dispatch(tocarAction(audio.descricao));
    }
  };
}




