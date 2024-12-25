import {Location} from "../models/location.model.js"
import {RestMenu} from '../models/restMenu.model.js'
import {MealType} from '../models/mealType.model.js'
import {RestaurantData} from '../models/restData.model.js'

export const location = async (req,res) => {
    try {
        const allLocation = await Location.find({})
        res.status(200).json({success:true, message:"All Location", allLocation})
    } catch (error) {
        console.log(`Error in get allLocation controller`)
        res.status(400).json({success:false, message:"Internal server error"})
    }
}

export const restMenu = async (req,res) => {
    try {
        const restData = await RestMenu.find({})
        res.status(200).json({success:true, message:"restMenu", restData})
    } catch (error) {
        console.log(`Error in get restMenu controller`)
        res.status(400).json({success:false, message:"Internal server error"}) 
    }
}

export const mealType = async (req,res) => {
    try {
        const mealData = await MealType.find({})
        res.status(200).json({success:true, message:"mealType", mealData})
    } catch (error) {
        console.log(`Error in get mealType controller`)
        res.status(400).json({success:false, message:"Internal server error"}) 
    }
}

export const restaurantData = async (req, res) => {
    try {
      const { mealtype_id, state_id } = req.query; 
      let query = {}
      if (mealtype_id) {
        query = { 
          "mealTypes": {
            "$elemMatch": {
              "mealtype_id": Number(mealtype_id) 
            }
          }
        };
      }
      if(state_id){
        query.state_id = state_id
      }
      const restaurantData = await RestaurantData.find(query); 
      res.json({ restaurantData });
    } catch (error) {
      console.log(`error in restaurantData controller : ${error.message}`);
      res.status(400).json({ message: "Internal server error" });
    }
  };