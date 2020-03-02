const Locs = (location) => {
    return `
        <div class="locations__info bordered">
            <div>
                <img class="locations__image" src="${location.Image}" alt="loc image">
            </div>
            <button id="button--${location.Name}">Details</button>
                <dialog class="location">
                    <div>Location: ${location.Name}</div>
                    <div>Climate: ${location.Climate}</div>
                    <div>Season to Harvest: ${location.Season}</div>
                    <button class="button--close">Close Dialog</button>
                </dialog>
        </div>
    `
}

export default Locs