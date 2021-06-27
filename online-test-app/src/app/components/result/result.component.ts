import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  quizList:any;
  answerList:any;
  option:any;
  quizId:any;
  element:any;
  lengthOfJson:number=0;
  score:number=0;
  quote:String='';
  
  
  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:5000/questions').subscribe(result => {
      this.quizList = result;
     // console.log(this.quizList);
    //  console.log(typeof this.quizList);

      this._httpClient.get('http://localhost:4500/submittedAnswers').subscribe(result => {
        this.answerList = result;
         this.lengthOfJson = Object.keys(this.quizList).length;
        // console.log(this.lengthOfJson);
  
        for(let i=0; i<this.lengthOfJson;i++){
        
              // console.log(this.answerList[i].quizId);
              if((this.answerList[i].quizId == this.quizList[i].quizId) &&(this.answerList[i].option == this.quizList[i].answer)){

                this.score = this.score+1;
                console.log(this.score);
                    }


        
              }

              if(this.score == this.lengthOfJson){
                this.quote = "Excellent";
              }else if(this.score == (this.lengthOfJson-1)){

                this.quote = "Very Good";
              }else if((this.score >= (this.lengthOfJson/1.5)) || this.score == (this.lengthOfJson-2) ){

                this.quote = "Good";
              }else if(this.score >= (this.lengthOfJson/2)){

                this.quote = "Nice Try";
              }else{

                this.quote = "Participation Is Much Important Than Winning";
              }
       

       
       
       
  
        
        
        
      }, error => {console.log(error);});

     
    }, error => {console.log(error);});

    // this._httpClient.get('http://localhost:4500/submittedAnswers').subscribe(result => {
    //   this.answerList = result;
    //    this.lengthOfJson = Object.keys(this.answerList).length;

    //   // for(let i=0; i<this.lengthOfJson;i++){
      
    //   //        // console.log(this.answerList[i].quizId);
      
    //   //       }
     

      
      
      
    // }, error => {console.log(error);});
    // console.log(this.lengthOfJson);



     
   

 }

}
