import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/`)
            .then( res => {
                console.log('Res: ', res);
                setCharacters(res.data.results);
            })
            .catch( err => {
                console.log('Error Occured: ', err);
            })
    }, []);
    
    return (
        <div>
            {characters.map(character => {
                return (
                    <Character 
                        birthYear= {character.birth_year} 
                        eyeColor= {character.eye_color} 
                        gender= {character.gender} 
                        hairColor= {character.hair_color} 
                        height= {character.height} 
                        homeworld= {character.homeworld} 
                        mass= {character.mass} 
                        name= {character.name} 
                        skinColor= {character.skin_color} 
                        species= {character.species}
                    />
                )
            })};
        </div>
    )
}

export default CharacterList;