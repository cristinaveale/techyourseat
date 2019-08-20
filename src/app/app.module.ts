import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./_shared/shared.module";

import { AppComponent } from "./app.component";
import { SponsorsComponent } from "./sponsors/sponsors.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { OrganizersComponent } from "./organizers/organizers.component";
import { HomeComponent } from "./home/home.component";
import { EventsComponent } from "./events/events.component";
import { MembershipComponent } from "./membership/membership.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SponsorsComponent,
    ContactComponent,
    FooterComponent,
    OrganizersComponent,
    HomeComponent,
    EventsComponent,
    MembershipComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
