import { Component} from '@angular/core';
import { BackendService } from '../backend.service'

export interface PeriodicElement {
  name: string;
  countryCode: number;
  landArea: number;
  population: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Sri Lanka', countryCode: 79, landArea: 763654, population: 6562542 },
  { name: 'Sri Lanka', countryCode: 79, landArea: 763654, population: 652542 },
  { name: 'Sri Lanka', countryCode: 79, landArea: 763654, population: 652542},
   
];

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent  {

  constructor(private _service: BackendService) { }
  
  ngOnInit() {
    this._service.getCountryList().subscribe(
      data => console.log("response recieverd!"),
      error => console.log("error occcured!")
    );
  }
  displayedColumns: string[] = [ 'name', 'countryCode', 'landArea','population','actions'];
  dataSource = ELEMENT_DATA;
  
}
