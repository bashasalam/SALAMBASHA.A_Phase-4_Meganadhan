import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  quizList:any;
  constructor( private _httpClient:HttpClient) { }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:5000/questions').subscribe(result => {
      this.quizList = result;
      console.log(this.quizList);
    }, error => {console.log(error);})
  }

}
