import { useLocations } from "./LocationDataProvider.js";
import Locs from "./Location.js";

const LocationList = () => {

    const contentElement = document.querySelector(".locations")
    const locations = useLocations()

    for (const locObject of locations) {
        contentElement.innerHTML += Locs(locObject)
    }
}

export default LocationList