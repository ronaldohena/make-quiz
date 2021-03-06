import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand" href="index.html">Buy my phone!</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Kryefaqja
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Kryefaqja</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">Rreth Nesh</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="post.html">Postimet</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Kontakti</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    } 
}

