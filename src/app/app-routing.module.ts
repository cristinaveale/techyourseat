import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { OrganizersComponent } from "./organizers/organizers.component";
import { AboutComponent } from "./about/about.component";
import { EventsComponent } from "./events/events.component";
import { MembershipComponent } from "./membership/membership.component";
import { SponsorsComponent } from "./sponsors/sponsors.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about/organizations", component: OrganizersComponent },
  { path: "about", component: AboutComponent },
  { path: "events", component: EventsComponent },
  { path: "membership", component: MembershipComponent },
  { path: "sponsors", component: SponsorsComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
