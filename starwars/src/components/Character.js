// Write your Character component here
import React from 'react';
import CollapseButton from './CollapseButton';

const Character = (props) => {
    
    return (
        <div>
            <CollapseButton 
                name= {props.name}
                birthYear= {props.birthYear} 
                eyeColor= {props.eyeColor} 
                gender= {props.gender} 
                hairColor= {props.hairColor} 
                height= {props.height} 
                mass= {props.mass} 
                skinColor= {props.skinColor}

                style={{margin: '100px'}}
            />
        </div>
    )
};

export default Character;