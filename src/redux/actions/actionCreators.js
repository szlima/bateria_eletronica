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

export const tocarAudioAction= (audio, power, volume) => {
  return dispatch => {

    if(power){
      const som= document.querySelector('#'+audio.tecla);
      som.volume= volume/100;
      som.play();

      dispatch(tocarAction(audio.descricao));
    }
  };
}




