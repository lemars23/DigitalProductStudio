import React from "react";
import { Component } from "react";

import Navigation from "../../components/navigation/Navigation";
import Footer from '../../components/footer/Footer';
import Header from "../../components/header/header";
import DescriptionSection from "../../components/description-section/description-section";
import TodayUxuid from "../../components/today-uxuid/today-uxuid";
import LetUsBring from "../../components/let-us-bring/let-us-bring";
import FrequentlyAsked from "../../components/frequently-asked/frequently-asked";
import ContactForm from "../../components/contact-form/contact-form";

class  HomePage extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <Header 
                title='title' 
                subtitle='subtitle'/>
                <DescriptionSection 
                title='Design' 
                text="At UXUID, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences." 
                content='Our design services include:'
                />
                <TodayUxuid/>
                <LetUsBring/>
                <FrequentlyAsked/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}

export default HomePage;