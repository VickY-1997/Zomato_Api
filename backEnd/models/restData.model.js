import mongoose from 'mongoose'

const restDataSchema = new mongoose.Schema({
    restaurant_id : {
        type: Number,
        required: true
    },
    restaurant_name : {
        type: String,
        required: true
    },
    location_id : {
        type: Number,
        required: true
    },
    state_id : {
        type: Number,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    restaurant_thumb : {
        type: String,
        required: true
    },
    average_rating : {
        type: Number,
        required: true
    },
    rating_text : {
        type: String,
        required: true
    },
    cost : {
        type: Number,
        required: true
    },
    contact_number : {
        type: Number,
        required: true
    },
    mealTypes : {
        type: Array,
        required: true
    },
    cuisines :{
        type: Array,
        required: true
    },
    image_gallery : {
        type: Array,
        required: true
    }
})

export const RestaurantData = mongoose.model('restDetail', restDataSchema)