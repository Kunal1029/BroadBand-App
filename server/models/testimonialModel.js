import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    pic:{
        type: String,
    },
    comment:{
        type: String,
        required: true,
    }
},
{ timestamps: true })

const testimonialModel = mongoose.model("testimonial",testimonialSchema)
export default testimonialModel;