import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { RouterModule, Routes} from "@angular/router";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ValidateService } from "./services/validate.service";
import { DataService} from "./services/data.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BusinessComponent } from './components/business/business.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { LoginComponent } from './components/login/login.component';
import { ResultsComponent } from './components/results/results.component';
import { PossibilitiesComponent } from './components/possibilities/possibilities.component';
import { HotelpageComponent } from './components/hotelpage/hotelpage.component';
import { ReviewBookingComponent } from './components/review-booking/review-booking.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'possibilities', component: PossibilitiesComponent},
  {path: 'hotelpage', component: HotelpageComponent},
  {path: 'review-booking', component: ReviewBookingComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    BusinessComponent,
    BookingsComponent,
    LoginComponent,
    ResultsComponent,
    PossibilitiesComponent,
    HotelpageComponent,
    ReviewBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ ValidateService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
