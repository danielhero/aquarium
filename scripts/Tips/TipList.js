import { useTips } from "./TipDataProvider.js";
import Tip from "./Tip.js";

const TipList = () => {
    const contentElement = document.querySelector(".tipList")
    const tips = useTips()

    for (const tipString of tips) {
        contentElement.innerHTML += Tip(tipString)
    }
}

export default TipList