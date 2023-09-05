import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gastronomia } from 'src/app/gastronomia';
import { GastronomiaService } from 'src/app/services/gastronomia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-latinoamericana',
  templateUrl: './latinoamericana.component.html',
  styleUrls: ['./latinoamericana.component.css']
})
export class LatinoamericanaComponent {
  
  private url = 'api/gastronomias';
  loading: boolean;
  culturas: Gastronomia[] = []

  constructor(private gastronomiaService:GastronomiaService, private router: Router, private location: Location){
    this.loading = true;
  }

  ngOnInit(){
    this.getCall();
  }

  getCall():void{
    this.gastronomiaService.getCall('/latinoamericana').subscribe(culturas => this.culturas = culturas.slice(0,5));
    this.loading = false;
  }

  previousPage():void{
    this.location.back();
  }

  vewCulture(region: any) {
    const url = `${this.url}/${region}`;
    console.log(url);
    this.router.navigate([`url`], {state: {data: region}});
  }
}
