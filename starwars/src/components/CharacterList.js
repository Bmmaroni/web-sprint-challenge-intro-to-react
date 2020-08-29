import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios
            .get(``)
            .then( res => {
                console.log('Res: ', res.data);
                setCharacters();
            })
            .catch( err => {
                console.log('Error Occured: ', err);
            })
    }, []);
    
    return (
        <div>
            <Character />
        </div>
    )
}

export default CharacterList;