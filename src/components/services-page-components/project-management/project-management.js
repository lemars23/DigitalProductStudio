import DescriptionSection from '../../description-section/description-section';

import '../services-page.scss';

import RequirementsIcon from './icons/requirements.svg';
import ProjectRoadmapIcon from './icons/project-roadmap.svg';
import ResourceAllocationIcon from './icons/resource-allocation.svg';
import RiskIcon from './icons/risk-assessment.svg';

import IterativeDevIcon from './icons/interative-dev.svg';
import ScrumIcon from './icons/scrum.svg';
import RegularProgressIcon from './icons/regular-progress.svg';
import ContinuousIcon from './icons/continuous-improvement.svg';

import TestIcon from './icons/test-planning.svg';
import FunctionalIcon from './icons/functional.svg';
import PerormanceIcon from './icons/performance.svg';
import BugTrackingIcon from './icons/bag-tracking.svg';



const ListItem = (props) => {
    const {id, icon, name} = props;
    return (
    <li className="service-section__item">
        <img src={icon} alt="service icon" className="service-section__item-icon" />
        <div className="service-section__item-name">{name}</div>
    </li>
    )
};

const ProjectManagement = () => {
    const listProjectPlanning = [
        {
            name: 'Requirements Gathering and Analysis',
            icon: RequirementsIcon
        },
        {
            name: 'Project Roadmap and Timeline Development',
            icon: ProjectRoadmapIcon
        },
        {
            name: 'Resource Allocation and Task Assignment',
            icon: ResourceAllocationIcon
        },
        {
            name: 'Risk Assessment and Mitigation Strategies',
            icon: RiskIcon
        },
    ];

    const listAgileDev = [
        {
            name: 'Iterative Development and Sprints',
            icon: IterativeDevIcon
        },
        {
            name: 'Scrum or Kanban Methodology Implementation',
            icon: ScrumIcon
        },
        {
            name: 'Regular Progress Updates and Demos',
            icon: RegularProgressIcon
        },
        {
            name: 'Continuous Improvement and Feedback Incorporation',
            icon: ContinuousIcon
        },
    ];

    const listQuality = [
        {
            name: 'Test Planning and Execution',
            icon: TestIcon
        },
        {
            name: 'Functional and Usability Testing',
            icon: FunctionalIcon
        },
        {
            name: 'Performance and Security Testing',
            icon: PerormanceIcon
        },
        {
            name: 'Bug Tracking and Issue Resolution',
            icon: BugTrackingIcon
        },
    ];


    return (
        <section className="service-section">
            <DescriptionSection
                title='Project Management'
                text="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
                content='Our project management services include:'
            />
            <div className="container">
                <div className="service-section__title">
                    Project Planning and Scoping
                </div>
                <ul className="service-section__list">
                    {
                        listProjectPlanning.map((item, i) => 
                           <ListItem key={i} icon={item.icon} name={item.name} />
                        )
                    }
                </ul>
                <div className="service-section__title">
                    Agile Development
                </div>
                <ul className="service-section__list">
                    {
                        listAgileDev.map((item, i) => 
                           <ListItem key={i} icon={item.icon} name={item.name} />
                        )
                    }
                </ul>
                <div className="service-section__title">
                    Quality Assurance and Testing
                </div>
                <ul className="service-section__list">
                    {
                        listQuality.map((item, i) => 
                           <ListItem key={i} icon={item.icon} name={item.name} />
                        )
                    }
                </ul>
            </div>
        </section>
    )
};

export default ProjectManagement;