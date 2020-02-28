const martinTips = [
    
{ 
    tip: "Keep close attention to pH balance of tank." 
},
{
    tip: "Clean tank regularly.  Do not use harsh chemical cleaners."
},
{
    tip: "Make sure to feed correct type of food for each species of fish."
 },
{
    tip: "Do not keep aquarium light running 24/7.  Make sure to cycle the lighting in the tank."
},
{
    tip: "Make sure the species of fish you want in the same tank can cohabitate!"   
}  
    
]

export const useTips = () => {
    return martinTips.slice()
}