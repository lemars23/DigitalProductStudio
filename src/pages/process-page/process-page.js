import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import Footer from '../../components/footer/footer';
import NameSection from '../../components/name-section/name-section';
import StartProject from "../../components/start-project/start-project";
import ContactForm from "../../components/contact-form/contact-form";
import ProcessPageComponents from "../../components/process-page-components/process-page-components";


class  ProcessPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <NameSection 
                    title='Process of Starting the Project' 
                    subtitle='At UXUID, we value transparency, collaboration, and delivering exceptional results.' 
                    backgroundImageNumber='fiveth' 
                />
                <ProcessPageComponents />
                <StartProject 
                    title='Thank you for your Interest in UXUID.' 
                    text='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.'    
                />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default ProcessPage;