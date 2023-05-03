import React from "react";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default class Header extends React.Component {
    render() {
        return(
            <div style={{display: "flex", justifyContent: "space-between", margin: "20px", height: "40px"}}>
                <h2>Phone book</h2>
                <div style={{display: "flex", margin: "5px"}}>
                    <FilterAltOutlinedIcon style={{backgroundColor: "#DCDCDC", cursor: "pointer", borderRadius: "5px", padding: "5px"}}></FilterAltOutlinedIcon>
                    <AddNewContactButton></AddNewContactButton>
                </div>
            </div> 
        );
    }
}

class AddNewContactButton extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: "#90EE90", cursor: "pointer", borderRadius: "5px", padding: "6px", display:"flex", alignItems: "center"}}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                <label>New contact</label>
            </div>
        );
    }
}