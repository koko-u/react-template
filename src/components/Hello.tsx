import React from "react";
import NavBar from "./NavBar";
import MainContainer from "./MainContainer";
import Footer from "./Footer";

const Hello: React.FunctionComponent = () => {
    return (
        <>
            <NavBar />
            <MainContainer />
            <Footer />
        </>
    );
};

export default Hello;