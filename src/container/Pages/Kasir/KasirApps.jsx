import React, { Component, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Kasirappsnavbar from "../../../components/Navbar/KasirAppsNavbar";
import { API } from "../../../services";
import "./KasirApps.css";

class Kasirappschild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLogin: "",
            dataAdmin: "",
        };
        this.handleGetAdminData = this.handleGetAdminData.bind(this);
    }
    handleGetAdminData = () => {
        API.getAdminData(this.state.dataLogin.state.username).then(async (result) => {
            this.setState({
                dataAdmin: result.data,
            });
        });
    };
    async componentDidMount() {
        await this.setState({
            dataLogin: this.props.data,
        });
        this.handleGetAdminData();
    }
    render() {
        return (
            <div id="KasirApps">
                <div className="KasirApps-Navbar-Container">
                    <Kasirappsnavbar />
                </div>
                <div className="KasirApps-Content-Container">
                    <h1>masuk</h1>
                    <button
                        onClick={() => {
                            console.log(this.state.dataAdmin);
                        }}
                    >
                        cek state
                    </button>
                </div>
            </div>
        );
    }
}

const Kasirapps = () => {
    const location = useLocation();

    const navigate = useNavigate();
    useEffect(() => {
        if (location.state === null) {
            navigate(`/kasir-apps/`);
        }
    }, []);

    return <Kasirappschild data={location} />;
};

export default Kasirapps;
