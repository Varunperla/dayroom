// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var conn = mongoose.connection;


const hotelSearch = require('../models/hotelSearch');


// Creating mongo models which are classes
HotelBasic = mongoose.model('HotelBasic');
// SearchCriteria = mongoose.model('SearchCriteria');

// Routes
// router.get('/search', function(req, res, next) {
//     let newSearch = new SearchCriteria ({
//         CityName : req.body.city,
//         date : req.body.date
//     });
//
//     newSearch.getHotelsByCity(newSearch , function(err, SearchCriteria) {
//         if(err){
//             res.json({success: false, msg:'Failed to get hotels'});
//         } else {
//             res.json({success: true, msg:'Lets see the hotels now'});
//         }
//     });
// });

router.post('/createHotel', function (req, res, next) {
    let newHotel = new hotelSearch ({
        HotelName: req.body.HotelName,
        star : req.body.star,
        city : req.body.city
    });

   // newHotel.set('collection', 'users');

    // hotelSearch.createHotelBasic(newHotel , function (err) {
    //     if(err){
    //         console.log("error" + err);
    //         res.send(err);
    //     }else{
    //         res.send('Successfully creates the hotel')
    //         //res.json({ task: 'hotel basic details successfully created'})
    //     }
    // });
    conn.collection('users').insert(newHotel);

    res.send('Successfully creates the hotel')
});

// Return router
module.exports = router;

