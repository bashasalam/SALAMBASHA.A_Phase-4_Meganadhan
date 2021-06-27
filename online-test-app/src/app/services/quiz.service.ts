import { Iquiz } from './../interface/iquiz';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private _routeUrl: string = 'http://localhost:5000/questions';

  constructor(private http: HttpClient) { }

  getQuestionsViaRest():Observable<Iquiz[]>{

    return this.http.get<Iquiz[]>(this._routeUrl);

  }
}
