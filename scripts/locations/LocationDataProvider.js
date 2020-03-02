const martinLocations = [
    {
        Name:"Indonesia",
        Climate: "Tropical",
        Season: "Spring",
        Image: "https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/09/PINK-BEACH2.jpg"
    },
    {
        Name: "Caribbean",
        Climate: "Tropical",
        Season: "Summer",
        Image: "https://emenactravel.co.uk/media/holidays/Caribbean.jpg"
    },
    {
        Name: "Fiji",
        Climate: "Tropical",
        Season: "Summer",
        Image: "https://www.islands.com/resizer/debQMaMHWnP-pYP9zsuKsqplf-w=/1551x966/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OVFK5FK53ZAAVNEQ7NG4VHZ75Y.jpg"
    }
  
]

export const useLocations = () => {
    return martinLocations.slice()
}