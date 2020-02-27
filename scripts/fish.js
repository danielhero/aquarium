/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.Image}" alt="fish image">
            </div>
            <div class="fish__name">${fish.Name}</div>
            <button id="button--${fish.Name}">Details</button>
            <dialog class="dialog--fish" id="details--${fish.Name}">
                <div>Species: ${fish.Species}</div>
                <div>Location: ${fish.Location}</div>
                <div>Length: ${fish.Size}</div>
                <div>Food: ${fish.Food.join(",")}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Fish