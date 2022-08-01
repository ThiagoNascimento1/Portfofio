// CSS
import "./style.css";

// Hools
import { useEffect, useState } from "react";


interface Props {
    name: string,
    job: string,
    image: string,
    social: Array<ItemSocial>
}

type ItemSocial = {link: string, icon: JSX.Element}


export const Profile = ({name, job, image, social}: Props) => {

    const [ nameProfile, setNameProfile ] = useState<string>();

    const handleName = () => {
        
        const arrayLetters = name.split('');
        let word: string = '';
        setNameProfile(word);
        arrayLetters.map((item, indice) => {
            setTimeout(() => {
                word += item;
                setNameProfile(word)
            }, 120 * indice);
        });
    };

    useEffect(() => handleName() , [])

    return (
        <div className="profile">
            <div className="img">
                <img src={image} alt=" profile image" />
            </div>
            <div className="name">{nameProfile}</div>
            <div className="job">{job}</div>
            <div className="social">
                {social.map((item, i) => <a href={item.link} key={i}>{item.icon}</a>)}
            </div>
        </div>
    )
};