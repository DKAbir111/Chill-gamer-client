import { useContext } from "react";
import Adventure from "../Home/Adventure";
import HighestRated from "../Home/HighestRated";
import SimpleSlider from "../Home/SimpleSlider";
import Trending from "../Home/Trending";
import { AuthContext } from "../../Context/AuthContext";
import Title from "../title/Title";
import WhoWeAre from "../Home/WhoWeAre";


export default function HomeLayout() {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={darkMode ? "dark" : ""}>
            <Title title="Home|ChillGam" />
            <SimpleSlider />
            <HighestRated />
            <Adventure />
            <Trending />
            <WhoWeAre />
        </div>
    )
}
