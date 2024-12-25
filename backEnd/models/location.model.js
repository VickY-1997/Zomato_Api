import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    location_id : {
        type : Number,
        required : true
    },
    location_name : {
        type : String,
        required : true
    },
    state_id  :{
        type: Number,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country_name : {
        type : String,
        default : "India"
    }
},{timestamps:true})

export const Location = mongoose.model('Location', locationSchema)