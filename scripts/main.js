import initializeDetailButtonEvents from './dialog.js'
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './Fish/FishDataProvider.js'
import FishList from './Fish/FishList.js'
import { useTips } from './Tips/TipDataProvider.js'
import TipList from './Tips/TipList.js'





const arrayOfTheFishObjects = useFish()

FishList()
TipList()

initializeDetailButtonEvents()