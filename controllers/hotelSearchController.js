

const mongoose = require('mongoose');

SearchCriteria = mongoose.model('SearchCriteria');
HotelBasic = mongoose.model('HotelBasic');



module.exports.getHotelsByCity = function (SearchCriteria, callback) {
    const query = { CityName: SearchCriteria.city };
    HotelBasic.getHotelsByCity(query, callback);
};


