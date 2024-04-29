
import './description-section.scss';

const DescriptionSection = (props) => {
    const {title, text, content} = props;
    return (
        <div className="description-section">
            <div className="container">
                <h2 className="description-section__title">
                    {title}
                </h2>
                <p className="description-section__text">
                    {text}
                </p>
                <div className="description-section__content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default DescriptionSection;