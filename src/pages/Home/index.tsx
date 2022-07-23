// Components
import { Profile } from "../../components/Profile";

// CSS
import "./style.css";

// Data
import { profileInfo } from "../../data/ProfileInfo";
import { social } from "../../data/Social";


export const App = () => {

  return (
    <div className="app">
      <Profile name={profileInfo.name} job={profileInfo.job} image={profileInfo.image} social={social}/>
    </div>
  )
};