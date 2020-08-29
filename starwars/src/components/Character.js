// Write your Character component here
import React from 'react';
import FadeButton from './FadeButton';

const Character = (props) => {
    
    return (
        <div>
            <FadeButton 
                name= {props.name}
                birthYear= {props.birth_year} 
                eyeColor= {props.eye_color} 
                gender= {props.gender} 
                hairColor= {props.hair_color} 
                height= {props.height} 
                mass= {props.mass} 
                skinColor= {props.skin_color}
            />
        </div>
    )
};

export default Character;