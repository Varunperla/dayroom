const mongoose = require('mongoose');
const config = require('../config/database');
var conn = mongoose.connection;

// Hotel Schema
const HotelBasicSchema = mongoose.Schema({      //With Mongoose, everything is derived from a Schema
    HotelName: {
        type: String
    },
    star: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    location:{
        lat: {
            type: String
        },
        long: {
            type: String
        }
    },
    price: {
        type: Number
    },
    status:{
        type: Boolean
    },
    ChainCode: {
        type: String
    },
    HotelCode: {
        type: String
    },
    media:{
        type: String
    }
});


//Search Schema
// const SearchCriteriaSchema = mongoose.Schema({      //With Mongoose, everything is derived from a Schema
//     CityName: {
//         type: String
//     },
//     date: {
//         type: String
//     }
// });



const HotelBasic =  mongoose.model('HotelBasic', HotelBasicSchema);  //A model is a class with which we construct documents.
module.exports = HotelBasic;
// const SearchCriteria =  module.exports = mongoose.model('SearchCriteria', SearchCriteriaSchema);  //A model is a class with which we construct documents.



module.exports.createHotelBasic = function (req, res) {
    console.log("req body " + req);
    var newHotel = new HotelBasic(req);
    console.log("new hotel " + newHotel);
    // newHotel.save( function(err , succ) {
    //     // we've saved the dog into the db here
    //
    //     if (err)
    //     {console.log("error  " + err);
    //         throw err;}
    //     else
    //     {console.log("succeess "+ succ);
    //         return res.json({"code":"0","message":"success"})}
    // });
    newHotel.collection('users').insert(newHotel);
    return res.json({"code":"0"});

};
