import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./KasirAppsNavbar.css";

class Kasirappsnavbar extends Component {
    render() {
        return (
            <div id="KasirAppsNavbar">
                <nav className="navbar navbar-content-container navbar-expand-lg">
                    <div className="container">
                        <a className="NavbarBrand" href="#">
                            Catering Bunda Mia Cashier
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav KasirNavbar-Menu-Container">
                                <li>
                                    <Link
                                        className="KasirNavbar-Menu"
                                        to={{
                                            pathname: `notset`,
                                        }}
                                    >
                                        <p>Edit Profile</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>{" "}
            </div>
        );
    }
}

export default Kasirappsnavbar;
