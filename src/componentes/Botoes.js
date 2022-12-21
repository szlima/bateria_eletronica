import React from 'react';
import {connect} from 'react-redux';

import {trocarVolumeAction, trocarPowerAction, trocarBankAction} from '../redux/actions/actionCreators';

function Botoes({power, display, volume, bank, trocarVolume, trocarPower, trocarBank}){

    return (
        <div id='botoes'>
          
          <div className='form-check form-switch'>
            <label className='form-check-label' htmlFor='power'>Power</label>
            <input className='form-check-input' type='checkbox' 
              id='power' name='power' defaultChecked={power} onClick={trocarPower}/>
          </div>
    
          <div id='display'>{display}</div>
    
          <input type="range" className="form-range" id="volume" 
            value={volume} onInput={e => trocarVolume(e.target.value)}/>
    
          <div className='form-check form-switch'>
            <label className='form-check-label' htmlFor='bank'>Bank</label>
            <input className='form-check-input' type='checkbox' 
              id='bank' name='bank' defaultChecked={bank} onClick={trocarBank}/>
          </div>
          
       </div>   
      );
}

const mapStateToProps= state => ({
  power: state.bateriaReducer.power,
  display: state.bateriaReducer.display,
  volume: state.bateriaReducer.volume,
  bank: state.bateriaReducer.bank
});

const mapDispatchToProps= dispatch => ({
  trocarVolume: volume => dispatch(trocarVolumeAction(volume)), 
  trocarPower: () => dispatch(trocarPowerAction()), 
  trocarBank: () => dispatch(trocarBankAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Botoes);