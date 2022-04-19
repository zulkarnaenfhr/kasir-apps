import React, { Component, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

class Kasirappschild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLogin: "",
        };
    }
    async componentDidMount() {
        await this.setState({
            dataLogin: this.props.data,
        });
    }
    render() {
        return <div>KasirApps</div>;
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
