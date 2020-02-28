import initializeDetailButtonEvents from './dialog.js'
import { useFish } from './Fish/FishDataProvider.js'
import FishList from './Fish/FishList.js'
import { useTips } from './Tips/TipDataProvider.js'
import TipList from './Tips/TipList.js'



// initializeDetailButtonEvents()

const arrayOfTheFishObjects = useFish()

FishList()
TipList()