import './style.css';

interface Props {
    skills: Obj[];
}
type Obj = {technology: string, level: string, icon: JSX.Element};

export const Skills = ({ skills }: Props) => {
    return (
        <div className="skills">
            {
                skills.map((item, i) => (
                    <div className="item" key={i}>
                        <div className="icon-skill">{item.icon}</div>
                        <div className="name-skill">{item.technology}</div>
                        <div className="level-skill">{item.level}</div>
                    </div>
                ))
            }
        </div>
    )
};