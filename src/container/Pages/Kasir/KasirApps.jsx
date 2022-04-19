import React, { Component, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
            <div>
                <h1>masuk</h1>
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
