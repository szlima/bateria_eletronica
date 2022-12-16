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
  
export const tocarAudioAction= descricao => ({
    type: TOCAR_AUDIO,
    payload: {
      descricao
    }
});