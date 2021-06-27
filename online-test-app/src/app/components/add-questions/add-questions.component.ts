import { Questions } from './../../models/questions';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  question: Questions = new Questions();

  constructor(private _httpClient:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }
  addQuestion() {
    console.log(this.question);
    this._httpClient.post('http://localhost:5000/questions', this.question).subscribe(result => {
      alert('Question Added Successfully..!!')
      console.log(result);
      this._router.navigate(['/quiz/admin']);
    }, (error) => { console.log(error); })

  }

}
