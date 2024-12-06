import { useContext } from "react";
import Adventure from "../Home/Adventure";
import HighestRated from "../Home/HighestRated";
import SimpleSlider from "../Home/SimpleSlider";
import Trending from "../Home/Trending";
import { AuthContext } from "../../Context/AuthContext";


export default function HomeLayout() {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={darkMode ? "dark" : ""}>
            <SimpleSlider />
            <HighestRated />
            <Adventure />
            <Trending />
        </div>
    )
}
