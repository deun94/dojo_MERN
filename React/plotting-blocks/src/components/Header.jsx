import React, {Component} from "react";

const headerStyle= {
    height: "150px",
    background: "#6aa84f",
    border: "5px black"
}

class Header extends Component {
    render(){
        return (
            <div style={headerStyle}>
                <h1>header</h1>
            </div>
        )
    }
}

export default Header;