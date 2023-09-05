import { Component, OnInit } from '@angular/core';
import { Gastronomia } from 'src/app/gastronomia';
import { GastronomiaService } from 'src/app/services/gastronomia.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mediterranea',
  templateUrl: './mediterranea.component.html',
  styleUrls: ['./mediterranea.component.css']
})
export class MediterraneaComponent implements OnInit{

  private url = 'api/gastronomias';
  loading: boolean;
  culturas: Gastronomia[] = []

  constructor(private gastronomiaService: GastronomiaService, private router: Router, private location: Location){  
    this.loading = true;
    
  }

    ngOnInit(){
      this.getCall();
    }

    getCall():void{
      this.gastronomiaService.getCall('/mediterranea').subscribe(culturas => this.culturas = culturas.slice(0,4));
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