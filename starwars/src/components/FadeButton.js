import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const FadeButton = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button color="success" onClick={toggle} margin='100px'> {props.name} </Button>
            <Fade in={fadeIn} tag="p" className="mt-3" style={styles.fadedText}>
                <p>{props.birthYear}</p>
                <p>{props.eyeColor}</p>
                <p>{props.description}</p>
                <p>{props.description}</p>
                <p>{props.description}</p>
                <p>{props.description}</p>
                <p>{props.description}</p>
            </Fade>
        </div>
    );
}

const styles = {
    fadedText: {
        backgroundColor: 'dodgerblue',
        padding: '1%',
        borderRadius: '500px'
    }
  };

export default FadeButton;