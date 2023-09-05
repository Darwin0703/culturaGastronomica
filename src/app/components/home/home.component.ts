import { Component, OnInit } from '@angular/core';
import { Gastronomia } from 'src/app/gastronomia';
import { GastronomiaService } from 'src/app/services/gastronomia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  gastronomias?: Gastronomia[] = [];
  loading: boolean;


  constructor(private gastronomiaService: GastronomiaService) {
    this.loading = true;
   }

  ngOnInit() {
    this.getCall();
  }

  getCall():void{
    this.gastronomiaService.getCall('').subscribe(culturas =>
      this.gastronomias = culturas);
      this.loading = false;
  }
}
