
import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import TodayUxuid from "../../components/today-uxuid/today-uxuid";
import NameSection from "../../components/name-section/name-section";

import CareersWelcome from "../../components/careers-page-components/welcome-to-uxuid/welcome-to-uxuid";
import CareersCurrentOpenings from "../../components/careers-page-components/current-openings/current-openings";

class  CareersPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <NameSection 
                    title='Join Our Team at UXUID' 
                    subtitle='Unlock your potential and join our team of innovators and problem solvers.' 
                    backgroundImageNumber='fiveth'
                />
                <CareersWelcome />
                <CareersCurrentOpenings />
                <TodayUxuid />
                <Footer />
            </>
        );
    }
}

export default CareersPage;