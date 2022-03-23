import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './home/_components/frontpage/frontpage.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './home/_components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './home/_components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeeklyEditionComponent } from './home/_components/weekly-edition/weekly-edition.component';
import { CardNumberComponent } from './home/_components/card-number/card-number.component';
import { MostReadComponent } from './home/_components/most-read/most-read.component';
import { UnitedStatesComponent } from './home/_components/united-states/united-states.component';
import { SectionGroupsComponent } from './home/_components/section-groups/section-groups.component';
import { SectionGroupsCardComponent } from './home/_components/section-groups-card/section-groups-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavbarComponent,
    LoginComponent,
    WeeklyEditionComponent,
    CardNumberComponent,
    MostReadComponent,
    UnitedStatesComponent,
    SectionGroupsComponent,
    SectionGroupsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
