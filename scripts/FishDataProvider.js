/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Betty",
        species: "Longtooth Barracuda",
        location: "Cumberland River",
        length: "2 ft",
        food: ["Squid"],
        image: "https://i.ytimg.com/vi/z_XlTRYLZ1Q/maxresdefault.jpg"
    },
    {
        name: "Bart",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "3 in",
        food: ["Algae", "Crustaceans"],
        image: "https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg"
    },
    {
        length: "2 in",
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7xhhlta3q-wVKpgzGdTlpAHaFj%26pid%3DApi&f=1",
        name: "Nemo"
    },
    {
        name: "Dory",
        species: "Blue Tang",
        location: "New Zealand Sea",
        length: "4 in",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedisneyinme.files.wordpress.com%2F2013%2F12%2Fdory.jpg&f=1&nofb=1",
        food: ["Clownfish"]
    }
]

export const useFish = () => {
    return fishCollection.slice()
}