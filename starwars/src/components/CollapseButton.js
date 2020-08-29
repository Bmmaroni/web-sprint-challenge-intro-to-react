import React, { useState } from 'react';
import { Collapse, Button, Card, CardBody, CardText } from 'reactstrap';

const CollapseButton = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button onClick={toggle} style={styles.button}> {props.name} </Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody style={styles.body}>
                        <CardText> Born: {props.birthYear} </CardText>
                        <CardText> Eye Color: {props.eyeColor} </CardText>
                        <CardText> Gender: {props.gender} </CardText>
                        <CardText> Hair Color: {props.hairColor} </CardText>
                        <CardText> Height: {props.height} </CardText>
                        <CardText> Mass: {props.mass} </CardText>
                        <CardText> Skin Color: {props.skinColor} </CardText>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

const styles = {
    button: {
        backgroundColor: 'purple'
    },

    body: {
        backgroundColor: 'transparent'
    }
  };

export default CollapseButton;