import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { AddcountryComponent } from './addcountry/addcountry.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path:'add' ,component:AddcountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
