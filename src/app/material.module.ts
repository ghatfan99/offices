import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatGridListModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatDividerModule, MatListModule,MatGridListModule,
  MatExpansionModule, MatTableModule, MatSortModule, MatSliderModule, MatDialogModule, MatCardModule, MatMenuModule,
  MatAutocompleteModule, MatTooltipModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatDividerModule, MatListModule,MatGridListModule,
  MatExpansionModule, MatTableModule, MatSortModule, MatSliderModule, MatDialogModule, MatCardModule, MatMenuModule,
  MatAutocompleteModule, MatTooltipModule]
})
export class MaterialModule {

}
