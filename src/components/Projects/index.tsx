import './style.css';

interface Props {
    projects: Obj[];
}
type Obj = {title: string, tech: JSX.Element[], imgexample: string[], link: string};

export const Projects = ({ projects }: Props) => {

    return (
        <div className="projects">
            {
                projects.map((item, i) => (
                    <div className="item" key={i} onClick={() => window.location.href = item.link}>
                        <div className="title">{item.title}</div>
                        <div className="technologies">
                            {
                                item.tech.map((item, i) => (
                                    <div className="tech" key={i}>{item}</div>
                                ))
                            }
                            
                        </div>
                        <div className={`img-project ${item.imgexample[1]}`}>
                            <img src={item.imgexample[0]}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};