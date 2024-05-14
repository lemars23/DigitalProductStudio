import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import NameSection from '../../components/name-section/name-section';
import TodayUxuid from "../../components/today-uxuid/today-uxuid";
import AboutDescriptionComponent from "../../components/about-page-components/description-component/description-component";
import AboutOurStoryComponent from "../../components/about-page-components/our-story-component/our-story-component";


class  AboutPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <NameSection 
                    title='About Us' 
                    subtitle='Welcome to UXUID, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.' 
                    backgroundImageNumber ='fourth'    
                />
                <AboutDescriptionComponent />
                <AboutOurStoryComponent />
                <TodayUxuid />
                <Footer />
            </>
        );
    }
}

export default AboutPage;