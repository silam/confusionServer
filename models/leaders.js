const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);



const leaderSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        
        image: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },


        abbr: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },

        featured: {
            type: Boolean,
            default:false      
        }
    }, 

    {
        timestamps: true
    }
);

var Leaders = mongoose.model('Leaders', leaderSchema);

module.exports = Leaders;