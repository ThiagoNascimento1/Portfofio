import './style.css';

interface Props {
    setSection: (item: string) => void,
    sectionSelected: string
}

export const NavBar = ({ setSection, sectionSelected}: Props) => {

    return (
        <div className="navBar">
            <div className="item" onClick={() => setSection('skills')}>Skills</div>
            <div className="item" onClick={() => setSection('projects')}>Projects</div>
            <div className="item" onClick={() => setSection('aboutMe')}>About me</div>
            <div id="selected" style={{ left: sectionSelected }}></div>
        </div>
    )
};