import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <>
                <div class="header">
                    <a href="#default" class="logo">Love <sup style={{color:"red"}}>&#10084;</sup> Nellore</a>
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;