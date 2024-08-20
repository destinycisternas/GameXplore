import React from 'react'
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            < h1 className="header-title">GameXplore</h1>
            <nav className="navBar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login" className="login-wrapper"><span className="login-button">Log In</span></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header