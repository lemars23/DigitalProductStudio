import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/Navigation";
import Footer from '../../components/footer/Footer';
import Header from "../../components/header/header";

class  HomePage extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <Header title='title' subtitle='subtitle'/>
            </>
        );
    }
}

export default HomePage;