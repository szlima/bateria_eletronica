import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {tocarAudioAction} from '../redux/actions/actionCreators';

function Som({audio, tocar}){

    useEffect(() => {      
        document.addEventListener('keypress', e => {      
            if(e.key.toUpperCase() === audio.tecla)
                tocar(audio);
        });
    }, []);

    return (
        <div className='drum-pad' id={audio.descricao} onClick={() => tocar(audio)}>
            {audio.tecla}
            <audio className='clip' id={audio.tecla} src={audio.link}/>             
        </div>
    );
}

const mapDispatchToProps= dispatch => ({
    tocar: audio => dispatch(tocarAudioAction(audio))
});

export default connect(null, mapDispatchToProps)(Som);