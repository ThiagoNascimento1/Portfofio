import './style.css';

interface Props {
    projects: Obj[];
}
type Obj = {title: string, tech: string[], imgcode: string, link: string};

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
                        <div className="img-code">
                            <img src={item.imgcode}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};