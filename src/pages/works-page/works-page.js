import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import NameSection from '../../components/name-section/name-section';
import StartProject from "../../components/start-project/start-project";
import OurWorks from "../../components/our-works-components/our-works-components";


class  WorksPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <NameSection  
                    title='Our Works'
                    subtitle='Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.'
                    backgroundImageNumber='first'
                />
                <OurWorks />
                <StartProject 
                    title='Let us Bring your Ideas to Life in the Digital World.' 
                    text='No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.'    
                />
                <Footer />
            </>
        );
    }
}

export default WorksPage;