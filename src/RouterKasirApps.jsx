import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Login from "./container/Pages/Admin/Log in/Login";
import Kasirapps from "./container/Pages/Kasir/KasirApps";
import "./components/Fonts Face/FontFace.css";

class Routerkasirapps extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/kasir-apps/" exact element={<Login />} />
                    <Route path="/kasir-apps/kasir" exact element={<Kasirapps />} />
                    <Route
                        path="*"
                        element={
                            <div id="notfound-page-container">
                                <p>Page Not Found</p>
                            </div>
                        }
                    />{" "}
                </Routes>
            </div>
        );
    }
}

export default Routerkasirapps;
