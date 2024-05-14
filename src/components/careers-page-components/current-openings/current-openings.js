import DescriptionSection from '../../description-section/description-section';


import UiDesignerIcon from './icons/ui-designer.svg';
import UxDesignerIcon from './icons/ux-designer.svg';
import DesignHeadIcon from './icons/design-head.svg';


import FrontendIcon from './icons/frontend.svg';
import BackendIcon from './icons/backend.svg';
import FullstackIcon from './icons/fullstack.svg';

import BaManagerIcon from './icons/ba-manager.svg';
import ProjectManagerIcon from './icons/project-manager.svg';
import HrManagerIcon from './icons/hr-manager.svg';

import QaTesterIcon from './icons/qa-tester.svg';
import SqlTesterIcon from './icons/sql-tester.svg';
import ManualTesterIcon from './icons/manual-tester.svg';


import './current-openings.scss';

const CareersCurrentOpeningsItem = (props) => {

    const {icon, title, desc, linkHref} = props;

    return (
        <li className="current-openings__item">
            <img src={icon} alt="current openings icon" className="current-openings__item-icon" />
            <div className="current-openings__item-title">{title}</div>
            <div className="current-openings__item-desc">{desc}</div>
            <a href={linkHref} className="current-openings__item-apply">Apply Now</a>
        </li>
    );
};


const CareersCurrentOpenings = () => {

    const listDesign = [
        {
            icon: UiDesignerIcon,
            title: 'UI Designer',
            desc: 'Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.',
            linkHref: '/'
        },
        {
            icon: UxDesignerIcon,
            title: 'UX Designer',
            desc: 'Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.',
            linkHref: '/'
        },
        {
            icon: DesignHeadIcon,
            title: 'Design Head',
            desc: 'Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.',
            linkHref: '/'
        }
    ];

    const listDevelopment = [
        {
            icon: FrontendIcon,
            title: 'Front - End Developer',
            desc: 'Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.',
            linkHref: '/'
        },
        {
            icon: BackendIcon,
            title: 'Back - End  Developer',
            desc: 'Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.',
            linkHref: '/'
        },
        {
            icon: FullstackIcon,
            title: 'Full Stack Developer',
            desc: 'Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.',
            linkHref: '/'
        }
    ];

    const listManagement = [
        {
            icon: BaManagerIcon,
            title: 'BA Manager',
            desc: 'Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.',
            linkHref: '/'
        },
        {
            icon: ProjectManagerIcon,
            title: 'Project Manager',
            desc: 'Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.',
            linkHref: '/'
        },
        {
            icon: HrManagerIcon,
            title: 'HR Manager',
            desc: 'Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.',
            linkHref: '/'
        }
    ];

    const listQA = [
        {
            icon: QaTesterIcon,
            title: 'QA Tester',
            desc: 'Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.',
            linkHref: '/'
        },
        {
            icon: SqlTesterIcon,
            title: 'SQL Tester',
            desc: 'Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.',
            linkHref: '/'
        },
        {
            icon: ManualTesterIcon,
            title: 'Manual Tester',
            desc: 'Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.',
            linkHref: '/'
        }
    ];

    return (
        <section className="current-openings">
            <div className="container">
                <div className="current-openings__innner">
                    <div className="current-openings__data">
                        <div className="current-openings__data-title">Current Openings</div>
                        <div className="current-openings__data-desc">
                            We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.
                        </div>
                    </div>

                    <div className="current-openings__title">
                        Design Job Openings
                    </div>
                    <ul className="current-openings__list">
                        {
                            listDesign.map((item, i) => <CareersCurrentOpeningsItem key={i} icon={item.icon} title={item.title} desc={item.desc} linkHref={item.linkHref} />)
                        }
                    </ul>

                    <div className="current-openings__title">
                        Development Job Openings
                    </div>
                    <ul className="current-openings__list">
                        {
                            listDevelopment.map((item, i) => <CareersCurrentOpeningsItem key={i} icon={item.icon} title={item.title} desc={item.desc} linkHref={item.linkHref} />)
                        }
                    </ul>

                    <div className="current-openings__title">
                        Management Job Openings
                    </div>
                    <ul className="current-openings__list">
                        {
                            listManagement.map((item, i) => <CareersCurrentOpeningsItem key={i} icon={item.icon} title={item.title} desc={item.desc} linkHref={item.linkHref} />)
                        }
                    </ul>

                    <div className="current-openings__title">
                        QA Job Openings
                    </div>
                    <ul className="current-openings__list">
                        {
                            listQA.map((item, i) => <CareersCurrentOpeningsItem key={i} icon={item.icon} title={item.title} desc={item.desc} linkHref={item.linkHref} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default CareersCurrentOpenings;