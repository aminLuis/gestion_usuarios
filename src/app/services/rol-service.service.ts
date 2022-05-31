import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Rol } from '../models/usuario.interface';
import { Observable, catchError, throwError } from 'rxjs';

const URL = environment.API_ROL;

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {

  constructor(private http:HttpClient) { }

  getRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(URL)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

}
