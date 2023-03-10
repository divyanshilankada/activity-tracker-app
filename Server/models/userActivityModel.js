const mongoose=require('mongoose');

const UserActivitySchema = new mongoose.Schema({

    activity : {
        type:String,
    },
    status : {
        type:String,
    },
    time:{type:Number},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userRegisterModel",
        required:true
    }
   

}, { timestamps: true })


const UserActivityModel = mongoose.model("userActivityModel", UserActivitySchema);
module.exports = UserActivityModel;
