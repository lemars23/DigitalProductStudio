import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import StartProject from "../../components/start-project/start-project";
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
                <StartProject 
                    title='Let us Bring your Ideas to Life in the Digital World.' 
                    text='No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.'    
                />
                <Footer />
            </>
        );
    }
}

export default ServicesPage;