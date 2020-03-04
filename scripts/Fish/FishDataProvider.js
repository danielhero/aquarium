/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        Name: "Angela",
        Species: "Blueface Angelfish",
        Location: "Indonesia",
        Length: 11,
        Food: ["Shrimp, Algae"],
        Image: "https://www.liveaquaria.com/images/products/swatches/st_73861_Blueface_Angelfish_Adult.jpg"
    },
    {
        Name: "Earl",
        Species: "Lantern Bass",
        Location: "Caribbean",
        Length: 2,
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_76586_Lantern_Bass.jpg"
    },
    {
        Name: "Spike",
        Species: "Porcupine Pufferfish",
        Location: "Carribean",
        Length: 12,
        Food: ["Krill, Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_102001_Porcupine_Puffer.jpg"
    },
    {
        Name: "Phineas",
        Species: "Fairy Wrasse",
        Location: "Fiji",
        Length: 5,
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_75657_Velvet_Multicolor_Fairy_Wrasse.jpg"
    },
    {
        Name: "Seabiscuit",
        Species: "Lined Seahorse",
        Location: "Western Atlantic Ocean",
        Length: 6,
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg73135LinedSeahorse.jpg"
    },
    {
        Name: "Arthur",
        Species: "Saddleback Butterflyfish",
        Location: "Hawaii",
        Length: 8,
        Food: ["Krill, Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_68845_Saddleback_Butterflyfish.jpg"
    },
    {
        Name: "Shogun",
        Species: "Japanese Dragon Eel",
        Location: "Japan",
        Length: 15,
        Food: ["Squid, Octopus"],
        Image: "https://www.liveaquaria.com/images/categories/product/lg_042419_315.jpg"
    },
    {
        Name: "Bullseye",
        Species: "Scissortail Dartfish",
        Location: "Indonesia",
        Length: 5,
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg71497ScissortailDartfish.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    
    const holyFish = []
    
    for (const fish of fishCollection) {
        if (fish.Length % 3 === 0) {
            holyFish.push(fish)
        }
    }    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    
        for (const fish of fishCollection) {
            if (fish.Length % 5 === 0 && fish.Length % 3 !== 0) {
                soldiers.push(fish)
            }
        }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    
        for (const fish of fishCollection) {
            if (fish.Length % 5 !== 0 && fish.Length % 3 !== 0) {
                regularFish.push(fish)
            }
        }
    return regularFish
}
