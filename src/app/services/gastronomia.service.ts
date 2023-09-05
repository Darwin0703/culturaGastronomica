import { Injectable } from '@angular/core';
import { Gastronomia } from '../gastronomia'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {

  private gastronoUrl = 'api/gastronomias';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

 
  getCall(endPoint: string):Observable<Gastronomia[]>{
    return this.http.get<Gastronomia[]>(`${this.gastronoUrl}/${endPoint}`)
    .pipe(
      tap(),
      catchError(this.handleError<Gastronomia[]>('getCultura', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      
      return of(result as T);
    };
  }

}
