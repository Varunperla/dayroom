webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_business_business_component__ = __webpack_require__("../../../../../src/app/components/business/business.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_bookings_bookings_component__ = __webpack_require__("../../../../../src/app/components/bookings/bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'business', component: __WEBPACK_IMPORTED_MODULE_10__components_business_business_component__["a" /* BusinessComponent */] },
    { path: 'bookings', component: __WEBPACK_IMPORTED_MODULE_11__components_bookings_bookings_component__["a" /* BookingsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_business_business_component__["a" /* BusinessComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_bookings_bookings_component__["a" /* BookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/bookings/bookings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bookings/bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bookings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/bookings/bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingsComponent = (function () {
    function BookingsComponent() {
    }
    BookingsComponent.prototype.ngOnInit = function () {
    };
    BookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bookings',
            template: __webpack_require__("../../../../../src/app/components/bookings/bookings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bookings/bookings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/business/business.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*brand speaking*/\n\n.Brand-speaking{\n  padding-top: 200px;\n  padding-bottom: 100px;\n}\n\n/*Reach us*/\n\n.reach-us-banner{\n  text-align: center;\n}\n\n\n.reachus-entry{\n  padding-top: 30px;\n}\n\n.reachus-submit{\n  text-align: center;\n  padding-top: 40px;\n}\n\n\n\n\n\n\n\n/*Footer*/\n.footer{\n  background-color: whitesmoke;\n  padding: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/business/business.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n\n  <div class=\"container\">\n    <div class=\"Brand-speaking\">\n      <h1><span style=\"color: red\"><strong>Dayroom</strong>.com</span> for business</h1>\n      <h3>Book awesome hotel rooms for few hours at huge discounts <strong style=\"color: red\">:)</strong></h3>\n    </div>\n  </div>\n\n\n  <!--Reach us-->\n  <div class=\"container\">\n    <div class=\"reach-us-banner\">\n      <h3><strong>TAKE US FOR A SPIN</strong></h3>\n      <p style=\"font-size: 50px; color: red\">-</p>\n      <p style=\"font-size: 20px; color: gray\">Parterning with us is as easy as saving a bookmark.</p>\n      <p style=\"font-size: 20px; color: gray\">Enter your information below and a member from our partner services team will contact you as soon as possible.</p>\n    </div>\n  </div>\n\n\n  <!--Reach out form-->\n  <div class=\"row reachus-entry\">\n    <div class=\"col-lg-6\">\n      <label>FULL NAME</label>\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ex. Shriram\" aria-label=\"Username\" aria-describedby=\"sizing-addon1\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <label>EMAIL ID</label>\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"shriram@companyname.com\" aria-label=\"Username\" aria-describedby=\"sizing-addon1\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row reachus-entry\">\n    <div class=\"col-lg-6\">\n      <label>BUSINESS NAME</label>\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"My compnay name\" aria-label=\"Username\" aria-describedby=\"sizing-addon1\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <label>ADDRESS OF BUSINESS</label>\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ex. Road No. 10, Banjara Hills, Hyderabad - 500034\" aria-label=\"Username\" aria-describedby=\"sizing-addon1\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"reachus-submit\">\n    <button type=\"button\" class=\"btn  btn-outline-danger btn-lg\">Submit</button>\n  </div>\n\n\n  <!--How can DAYROOM for Business be used-->\n<div style=\"padding-bottom: 50px\">\n  <h2 style=\"text-align: center; padding-top: 100px; padding-right: 100px; padding-left: 100px\">ONE <a style=\"color: red\">DAYROOM</a>, UNLIMITED BUSINESS OPPORTUNITIES</h2>\n  <hr style=\"padding-bottom: 20px \">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h4 class=\"featurette-heading\" style=\"padding-top: 180px; padding-right: 150px\">If some important guest is visiting your company, <span class=\"text-muted\">make their visit pleasant by offering <span style=\"color: red\">dayroom</span> for few hours</span></h4>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-fluid\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" style=\"width: 500px; height: 500px; \" src=\"../../../assets/business/welcome.jpg\" data-holder-rendered=\"true\">\n    </div>\n  </div>\n\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-5 order-md-2\">\n      <h4 class=\"featurette-heading\" style=\"padding-top: 180px\">Want to avoid noisy coffee shop meetings, <span class=\"text-muted\">book a <span style=\"color: red\">dayroom</span> and have a pleasant talk with your client</span></h4>\n    </div>\n    <div class=\"col-md-7 order-md-1\">\n      <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" style=\"width: 500px; height: 500px;\" src=\"../../../assets/business/meeting.jpg\" data-holder-rendered=\"true\">\n    </div>\n  </div>\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h4 class=\"featurette-heading\" style=\"padding-top: 180px; padding-right: 150px\">Does your employees make one day trips frequently, <span class=\"text-muted\">make their journey pleasant by offering <span style=\"color: red\">dayroom</span> for few hours</span></h4>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" style=\"width: 500px; height: 500px;\" src=\"../../../assets/business/employee.jpg\" data-holder-rendered=\"true\">\n    </div>\n  </div>\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-5 order-md-2\">\n      <h4 class=\"featurette-heading\" style=\"padding-top: 180px\">Want to avoid noisy area at client's place, <span class=\"text-muted\">book a <span style=\"color: red\">dayroom</span> and offer exquisite and peaceful makeup experience to your client</span></h4>\n    </div>\n    <div class=\"col-md-7 order-md-1\">\n      <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" style=\"width: 500px; height: 500px;\" src=\"../../../assets/business/makeup.jpg\" data-holder-rendered=\"true\">\n    </div>\n  </div>\n\n</div>\n\n</main>\n\n<footer class=\"footer\">\n  <div class=\"container footer-text\">\n    <span>All rights reserved with dayroom pvt ltd. </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/business/business.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusinessComponent = (function () {
    function BusinessComponent() {
    }
    BusinessComponent.prototype.ngOnInit = function () {
    };
    BusinessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-business',
            template: __webpack_require__("../../../../../src/app/components/business/business.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/business/business.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BusinessComponent);
    return BusinessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*brand speaking*/\n.Brand-speaking{\n  padding-top: 200px;\n  padding-bottom: 50px;\n}\n\n\n\n/*Booking entry*/\n.guestNumber-dropdown{\n  background-color: white;\n  color: #868E95;\n  border-color: #CED4DA ;\n  width: 250px;\n  text-align: left;\n}\n\n.booking-entry{\n  padding-bottom: 100px;\n}\n\n\n/*USP section*/\n.usp-icons{\n  color: red;\n  font-size: 30px;\n}\n\n.usp-row{\n  padding-bottom: 120px;\n}\n\n\n/*DAYROOMS showcase*/\n\n.card {\n  border: none;\n  box-shadow: none;\n}\n\n.card-deck{\n  padding-bottom: 30px;\n}\n\n\n/*Footer*/\n.footer{\n  background-color: whitesmoke;\n  padding: 100px;\n}\n\n\n/*.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {*/\n  /*color: red;*/\n  /*background-color: white !important;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n\n  <div class=\"container\">\n    <div class=\"Brand-speaking\">\n      <h1 style=\"color: red\"><strong>Dayroom</strong>.com</h1>\n      <h2>Book awesome hotel rooms for few hours at huge discounts <strong style=\"color: red\">:)</strong></h2>\n    </div>\n  </div>\n\n  <div class=\"row booking-entry\">\n    <div class=\"col-lg-3\">\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" id=\"search_term\" placeholder=\"Where to?\" aria-label=\"Username\" aria-describedby=\"sizing-addon1\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-3\">\n      <div class=\"input-group input-group-lg\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"On which date?\" aria-label=\"Username\" aria-describedby=\"sizing-addon1\">\n      </div>\n    </div>\n\n\n    <div class=\"col-lg-3\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-lg dropdown-toggle guestNumber-dropdown\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          How many?\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">1</a>\n          <a class=\"dropdown-item\" href=\"#\">2</a>\n          <a class=\"dropdown-item\" href=\"#\">3</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3\">\n      <button type=\"button\" class=\"btn  btn-outline-danger btn-lg\">Search Rooms</button>\n\n    </div>\n\n  </div>\n\n  <div class=\"container usp-row\">\n    <div class=\"row features\">\n      <div class=\"col-lg-3 text-center\">\n        <i class=\"material-icons usp-icons\">av_timer</i>\n        <h6>Pay only for few hours</h6>\n        <!--<p>Don't pay 24hr room rent. Only pay for some hours and save yourselves a lot</p>-->\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-3 text-center\">\n        <i class=\"material-icons usp-icons\">star_border</i>\n        <h6>Certified hotels</h6>\n        <!--<p>We only show best hotels, dive in to check our hotels with amazing rates</p>-->\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-3 text-center\">\n        <i class=\"material-icons usp-icons\">shuffle</i>\n        <h6>Free cancellation</h6>\n        <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-3 text-center\">\n        <i class=\"material-icons usp-icons\">credit_card</i>\n        <h6>Pay by card</h6>\n        <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n      </div><!-- /.col-lg-4 -->\n    </div>\n  </div>\n\n  <div>\n    <h2><strong>DAYROOMS</strong></h2>\n    <hr>\n\n    <!--HOTEL SHOWCASE-->\n    <!--Row1-->\n  <div class=\"row\">\n   <div class=\"card-deck\">\n    <div class=\"card col-lg-4\">\n      <img class=\"card-img-top\" src=\"../../../assets/bed.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Novotel Hitec City</h4>\n        <div class=\"row\">\n        <p style=\"font-weight:100; padding-right: 120px\">₹2599 not <a style=\"text-decoration: line-through; text-decoration-color: red\">₹6599</a></p>\n          <button type=\"button\" class=\"btn  btn-outline-danger btn-sm\">Book</button>\n        </div>\n      </div>\n    </div>\n\n     <div class=\"card col-lg-4\">\n       <img class=\"card-img-top\" src=\"../../../assets/room2.jpg\" alt=\"Card image cap\">\n       <div class=\"card-body\">\n         <h4 class=\"card-title\">Novotel Hitec City</h4>\n         <div class=\"row\">\n           <p style=\"font-weight:100; padding-right: 120px\">₹2599 not <a style=\"text-decoration: line-through; text-decoration-color: red\">₹6599</a></p>\n           <button type=\"button\" class=\"btn  btn-outline-danger btn-sm\">Book</button>\n         </div>\n       </div>\n     </div>\n\n     <div class=\"card col-lg-4\">\n       <img class=\"card-img-top\" src=\"../../../assets/room1.jpg\" alt=\"Card image cap\">\n       <div class=\"card-body\">\n         <h4 class=\"card-title\">Novotel Hitec City</h4>\n         <div class=\"row\">\n           <p style=\"font-weight:100; padding-right: 120px\">₹2599 not <a style=\"text-decoration: line-through; text-decoration-color: red\">₹6599</a></p>\n           <button type=\"button\" class=\"btn  btn-outline-danger btn-sm\">Book</button>\n         </div>\n       </div>\n     </div>\n  </div>\n  </div>\n\n    <!--Row2-->\n    <div class=\"row\">\n    <div class=\"card-deck\">\n      <div class=\"card col-lg-4\">\n        <img class=\"card-img-top\" src=\"../../../assets/bed.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Novotel Hitec City</h4>\n          <div class=\"row\">\n            <p style=\"font-weight:100; padding-right: 120px\">₹2599 not <a style=\"text-decoration: line-through; text-decoration-color: red\">₹6599</a></p>\n            <button type=\"button\" class=\"btn  btn-outline-danger btn-sm\">Book</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card col-lg-4\">\n        <img class=\"card-img-top\" src=\"../../../assets/room2.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Novotel Hitec City</h4>\n          <div class=\"row\">\n            <p style=\"font-weight:100; padding-right: 120px\">₹2599 not <a style=\"text-decoration: line-through; text-decoration-color: red\">₹6599</a></p>\n            <button type=\"button\" class=\"btn  btn-outline-danger btn-sm\">Book</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card col-lg-4\">\n        <img class=\"card-img-top\" src=\"../../../assets/room1.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Novotel Hitec City</h4>\n          <div class=\"row\">\n            <p style=\"font-weight:100; padding-right: 120px\">₹2599 not <a style=\"text-decoration: line-through; text-decoration-color: red\">₹6599</a></p>\n            <button type=\"button\" class=\"btn  btn-outline-danger btn-sm\">Book</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  </div>\n\n  <div>\n    <h2 style=\"text-align: center; padding-top: 100px; padding-right: 100px; padding-left: 100px\">ONE <a style=\"color: red\">DAYROOM</a>, UNLIMITED POSSIBILITIES</h2>\n    <hr style=\"padding-bottom: 20px \">\n    <!--row1-->\n    <div class=\"container usp-row\">\n      <div class=\"row features\">\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">refresh</i>\n          <h6>Stop for a refresh</h6>\n          <!--<p>Don't pay 24hr room rent. Only pay for some hours and save yourselves a lot</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">important_devices</i>\n          <h6>Best office for few hours</h6>\n          <!--<p>We only show best hotels, dive in to check our hotels with amazing rates</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">favorite</i>\n          <h6>Your wedding dressing room</h6>\n          <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">cake</i>\n          <h6>Cake cutting for loved ones</h6>\n          <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n        </div><!-- /.col-lg-4 -->\n      </div>\n    </div>\n      <!--row2-->\n    <div class=\"container usp-row\">\n      <div class=\"row features\">\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">time_to_leave</i>\n          <h6>Stop on a highway commute</h6>\n          <!--<p>Don't pay 24hr room rent. Only pay for some hours and save yourselves a lot</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">airline_seat_individual_suite</i>\n          <h6>Sleep on kingsize bed</h6>\n          <!--<p>We only show best hotels, dive in to check our hotels with amazing rates</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">airline_seat_legroom_normal</i>\n          <h6>Skip layover at airport</h6>\n          <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">monochrome_photos</i>\n          <h6>A silent place for photo shoot</h6>\n          <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n        </div><!-- /.col-lg-4 -->\n      </div>\n    </div>\n\n    <!--row3-->\n    <div class=\"container usp-row\">\n      <div class=\"row features\">\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">business_center</i>\n          <h6>Perfect place to close a deal</h6>\n          <!--<p>Don't pay 24hr room rent. Only pay for some hours and save yourselves a lot</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">group</i>\n          <h6>Good place to interview</h6>\n          <!--<p>We only show best hotels, dive in to check our hotels with amazing rates</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">spa</i>\n          <h6>A quite peaceful place</h6>\n          <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3 text-center\">\n          <i class=\"material-icons usp-icons\">headset_mic</i>\n          <h6>Silent place for a long call</h6>\n          <!--<p>You can directly pay here or reserve here and pay at the hotel</p>-->\n        </div><!-- /.col-lg-4 -->\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n</main>\n\n<h3 style=\"text-align: center; padding-top: 10px; padding-right: 100px; padding-left: 100px; padding-bottom: 50px\">Any questions? <a style=\"color: red\">DAYROOM </a>executive will answer all your questions on <a href=\" \">+91 9100105673</a></h3>\n\n<footer class=\"footer\">\n  <div class=\"container footer-text\">\n    <span>All rights reserved with dayroom pvt ltd. </span>\n  </div>\n</footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-content {border-radius: 0;box-shadow: none;}\n.modal-header {border-bottom: 1px solid #F2F2F2;}\n.modal-body {padding: 30px 15px;}\n.form .button {width: 100%; margin: 15px 0; padding: 10px 0; border: none;}\n\n.form .button.primary {color: #fff; background-color: #22E094; margin: 0 0 15px 0;}\n.form .button.primary:hover {color: #fff; background-color: #22d68e;}\n.form .button.facebook {color: #fff; background-color: #4267b2;}\n.form .button.facebook:hover {color: #fff; background-color: #3f62a8;}\n.form .button.twitter {color: #fff; background-color: #1da1f2;}\n.form .button.twitter:hover {color: #fff; background-color: #199ae5;}\n\n.form .form-control {margin: 0 0 30px 0; box-shadow: none; background: #F2F2F2; border: none; border-radius: 0;}\n.form .labelRight{float: right; cursor: pointer;}\n.form .control-label {margin: 0 0 10px 0;}\n.form .control-label a {color: #4267b2;}\n.form .control-label a:hover {color: #1da1f2; text-decoration: none;}\n\n.form p {text-align: center;}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row base\">\n  <div class=\"col-md-12\">\n    <!--&lt;!&ndash;BOTÃO PARA ABRIR MODAL&ndash;&gt;-->\n    <!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\">Open Modal</button>-->\n    <!--&lt;!&ndash;BOTÃO PARA ABRIR MODAL FIM&ndash;&gt;-->\n\n    <!--ÁREA MODAL-->\n    <div class=\"modal fade bs-example-modal-sm\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\n      <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n            <h4 class=\"modal-title\" id=\"exampleModalLabel\">Entrar</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"recipient-name\" class=\"control-label\">Email</label>\n                    <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Senha</label>\n\n                    <label class=\"control-label labelRight\"><a href=\"#\">Esqueceu sua Senha?</a></label>\n\n                    <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\n                  </div>\n                  <button type=\"button\" class=\"button btn primary\">Entrar</button>\n\n                  <p>- ou -</p>\n\n                  <button type=\"button\" class=\"button btn facebook\">Entrar com Facebook</button>\n                  <button type=\"button\" class=\"button btn twitter\">Entrar com Twitter</button>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--ÁREA MODAL FIM-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item:hover{\n  text-decoration: underline;\n}\n\n.navbar{\n  background-color: white;\n  /*box-shadow: 0 0 5px black;*/\n}\n\n.navbar-link{\n  color: #007BFF;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: red\"><strong>Dayroom</strong></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item navbar-link\" [routerLink]=\"['/profile']\">\n        <a class=\"nav-link\">Profile<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item navbar-link\" [routerLink]=\"['/bookings']\">\n        <a class=\"nav-link\" target=\"_blank\" style=\"color: #\">My bookings</a>\n      </li>\n      <li class=\"nav-item \" [routerLink]=\"['/business']\">\n        <a class=\"nav-link\" target=\"_blank\" style=\"color: indianred\">Dayroom for Business</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map