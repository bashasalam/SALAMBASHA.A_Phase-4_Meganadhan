import { QuizService } from './../../services/quiz.service';
import { Answers } from './../../models/answers';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizList:any;
  answer : Answers = new Answers()
  constructor( private _httpClient:HttpClient,private quizService:QuizService) { }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:5000/questions').subscribe(result => {
      this.quizList = result;
    console.log(this.quizList);
      
    }, error => {console.log(error);});
    // this.quizList = this.quizService.getQuestionsViaRest();
    // console.log(this.quizList);



    }
 
    addAnswers(){

        this._httpClient.post('http://localhost:4500/submittedAnswers',this.answer).subscribe((result:any) => {
          alert('Answer Added Successfully..!!')
          console.log(result);
         // this._router.navigate(['/employees']);
        }, (error) => { console.log(error); })
    }


}