import React, {Component} from "react";
import HeaderPage from "./components/pages/HeaderPage";
import FooterPage from "./components/pages/FooterPage";
import Routes from "./routes";

class ApplicationContent extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%"
                }}>
                <HeaderPage/>
                <Routes/>
                <FooterPage/>
            </div>
        );
    }
}

export default ApplicationContent;
