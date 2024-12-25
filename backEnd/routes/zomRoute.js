import express from 'express'
import { location, mealType, restaurantData, restMenu } from '../controller/zomController.js'

const router = express.Router()

router.get('/location', location)
router.get('/restMenu', restMenu)
router.get('/mealType', mealType)
router.get('/restaurantData', restaurantData)

export default router