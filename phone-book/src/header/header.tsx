import React from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default class Header extends React.Component {
    render() {
        return(
            <div style={{display: "flex", cursor: "pointer"}}>
                <h2>Phone book</h2>
                <FilterAltIcon></FilterAltIcon>
                <AddNewContactButton></AddNewContactButton>
            </div>
        );
    }
}

class AddNewContactButton extends React.Component {
    render() {
        return(
            <div>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                <label>New contact</label>
            </div>
        );
    }
}