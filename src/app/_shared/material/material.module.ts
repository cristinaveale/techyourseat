import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSelectModule,
  MatMenuModule,
  MatGridListModule,
  MatPaginatorModule
} from "@angular/material";

const modules: Array<any> = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSelectModule,
  MatMenuModule,
  MatGridListModule,
  MatPaginatorModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
