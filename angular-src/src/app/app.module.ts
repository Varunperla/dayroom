import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { RouterModule, Routes} from "@angular/router";

import { ValidateService } from "./services/validate.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BusinessComponent } from './components/business/business.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    BusinessComponent,
    BookingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [ ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
