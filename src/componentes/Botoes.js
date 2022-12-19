import React from 'react';
import {connect} from 'react-redux';

function Botoes({power, display, volume, bank}){

    return (
        <div id='botoes'>
          
          <div className='form-check form-switch'>
            <label className='form-check-label' htmlFor='power'>Power</label>
            <input className='form-check-input' type='checkbox' 
              id='power' name='power' defaultChecked={power}/>
          </div>
    
          <div id='display'>{display}</div>
    
          <input type="range" className="form-range" id="volume" value={volume}/>
    
          <div className='form-check form-switch'>
            <label className='form-check-label' htmlFor='bank'>Bank</label>
            <input className='form-check-input' type='checkbox' id='bank' name='bank' defaultChecked={bank}/>
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

export default connect(mapStateToProps)(Botoes);