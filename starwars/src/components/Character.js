// Write your Character component here
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Character = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle> {props.name} </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem> Born: {props.birthYear}</DropdownItem>
                        <DropdownItem> Eye Color: {props.eyeColor}</DropdownItem>
                        <DropdownItem> Gender: {props.gender}</DropdownItem>
                        <DropdownItem> Hair Color: {props.hairColor}</DropdownItem>
                        <DropdownItem> Height: {props.height}</DropdownItem>
                        <DropdownItem> Mass: {props.mass}</DropdownItem>
                        <DropdownItem> Skin Color: {props.skinColor}</DropdownItem>
                    </DropdownMenu>
            </Dropdown>
        </div>
    )
};

export default Character;