import './style.css';

interface Props {
    aboutMe: {
        salutation: string,
        description: string[]
    }
}

export const AboutMe = ({ aboutMe }: Props) => {

    return (
        <div className="aboutme">
            <div className="salutation">{aboutMe.salutation}</div>
            {aboutMe.description.map((item, i) => (
                <div className="description">{item}</div>
            ))}
        </div>
    )
};