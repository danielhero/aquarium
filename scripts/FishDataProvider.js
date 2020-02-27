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
        Length: "1 ft",
        Food: ["Shrimp, Algae"],
        Image: "https://www.liveaquaria.com/images/products/swatches/st_73861_Blueface_Angelfish_Adult.jpg"
    },
    {
        Name: "Earl",
        Species: "Lantern Bass",
        Location: "Caribbean",
        Length: "4.5 in",
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_76586_Lantern_Bass.jpg"
    },
    {
        Name: "Spike",
        Species: "Porcupine Pufferfish",
        Location: "Carribean",
        Length: "1 ft",
        Food: ["Krill, Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_102001_Porcupine_Puffer.jpg"
    },
    {
        Name: "Phineas",
        Species: "Yellowband Wrasse",
        Location: "Fiji",
        Length: "5.5 in",
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg_75657_Velvet_Multicolor_Fairy_Wrasse.jpg"
    },
    {
        Name: "Seabiscuit",
        Species: "Lined Seahorse",
        Location: "Western Atlantic Ocean",
        Length: "7 in",
        Food: ["Shrimp"],
        Image: "https://www.liveaquaria.com/images/categories/large/lg73135LinedSeahorse.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}