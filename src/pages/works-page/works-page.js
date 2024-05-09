import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import NameSection from '../../components/name-section/name-section';
import LetUsBring from "../../components/let-us-bring/let-us-bring";
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
                <LetUsBring />
                <Footer />
            </>
        );
    }
}

export default WorksPage;