import React from 'react';

function Botoes(){

    const display= '', power= true, volume= 50, bank= false;

    return (
        <div id='botoes'>
          
          <div className='form-check form-switch'>
            <label className='form-check-label' for='power'>Power</label>
            <input className='form-check-input' type='checkbox' 
              id='power' name='power' defaultChecked={power}/>
          </div>
    
          <div id='display'>{display}</div>
    
          <input type="range" class="form-range" id="volume" value={volume}/>
    
          <div className='form-check form-switch'>
            <label className='form-check-label' for='bank'>Bank</label>
            <input className='form-check-input' type='checkbox' id='bank' name='bank' defaultChecked={bank}/>
          </div>
          
       </div>   
      );
}

export default Botoes;