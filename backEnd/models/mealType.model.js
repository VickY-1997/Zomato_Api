import mongoose from "mongoose";

const mealTypeSchema = new mongoose.Schema({
    mealtype_id : {
        type: Number,
        required: true
    },
    mealtype : {
        type : String,
        required: true
    },
    content : {
        type : String,
        required: true
    },
    meal_image :{
        type : String,
        required: true
    }
})

export const MealType = mongoose.model('MealType', mealTypeSchema)