import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import LetUsBring from "../../components/let-us-bring/let-us-bring";
import NameSection from "../../components/name-section/name-section";

import Design from "../../components/services-page-components/design/design";
import Engineering from "../../components/services-page-components/engineering/engineering";
import ProjectManagement from "../../components/services-page-components/project-management/project-management";

class  ServicesPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <NameSection 
                    title='Our Services' 
                    subtitle='Transform your brand with our innovative digital solutions that captivate and engage your audience.' 
                    backgroundImageNumber='fourth' 
                />
                <Design />
                <Engineering />
                <ProjectManagement />
                <LetUsBring />
                <Footer />
            </>
        );
    }
}

export default ServicesPage;