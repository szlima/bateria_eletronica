import {TROCAR_VOLUME, TROCAR_POWER, TROCAR_BANK, TOCAR_AUDIO} from '../actions/actionTypes';

import {audios} from '../../dados';

const inicio= {
    audios,
    display: '',
    volume: 50,
    power: true,
    bank: false
};

export default function bateriaReducer(state=inicio, action){
    
    switch(action.type){
      case TROCAR_VOLUME:
        return {
          ...state,
          volume: action.payload.volume,
          display: 'Volume: ' + action.payload.volume
        };
        
      case TOCAR_AUDIO:
        return {
          ...state,
          display: action.payload.descricao
        };
        
      case TROCAR_POWER:
        return {
          ...state,
          power: !state.power,
          display: ''
        };
        
      case TROCAR_BANK:
        return {
          ...state,
          bank: !state.bank
        };
        
      default:
        return state;
    }
}