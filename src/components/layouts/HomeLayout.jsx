import Adventure from "../Home/Adventure";
import HighestRated from "../Home/HighestRated";
import SimpleSlider from "../Home/SimpleSlider";
import Trending from "../Home/Trending";


export default function HomeLayout() {
    return (
        <div>
            <SimpleSlider />
            <HighestRated />
            <Adventure />
            <Trending />
        </div>
    )
}
